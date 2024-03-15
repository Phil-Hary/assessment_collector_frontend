'use client'

import dayjs from 'dayjs';
import { Form, Typography, Row, Col, Button, Space, Flex, message, Spin } from "antd"
import { useEffect, useState } from "react"


import { FORM_CONFIG, LAYOUT } from "./../../constants"
import { getFormElement } from "./utils"
import styles from "./FormRender.module.css"
import { useParams, useRouter } from "next/navigation"
import { FormService } from "@/services"
import { FormUtils } from "@/utils"



const { Text, Title } = Typography;

const FormRenderer = () => {
    const formService = FormService.getService()

    const router = useRouter()
    const params = useParams()

    const [ form ] = Form.useForm()
    const [ formMeta, setFormMeta ] = useState({})
    const [ messageApi, contextHolder ] = message.useMessage();
    const [ isLoading, setLoading ] = useState(false)

    useEffect(() => {
        const getFormConfig = async () => {
            setLoading(prevState => true)
            const { data } = await formService.getFormConfig(params.slug)
            setFormMeta(data.data)
            setLoading(prevState => false)
        }
        
        (async () => await getFormConfig())()
    }, [])

    
    const { title, subTitle, layout, formFields, onSubmission, onCancel } = formMeta?.pages?.[0]?.content || {}

    const renderFormFields = (formFields=[]) => {
        const uiFormFields = []

        formFields.length && formFields.forEach((formField) => {
            uiFormFields.push(getFormElement(formField))
        })

        return uiFormFields
    }

    const onFinishHandler = (values, {endpoint, requestMethods, onSuccess, onError}) => {
        try {
            const componentTypes = getComponentTypes(formFields)
            const transformedResponse = FormUtils.responseTransformer(values, componentTypes)

            formService.submit(requestMethods, endpoint, transformedResponse)

            messageApi.success(onSuccess.toast);
            router.push("/dashboard")
            form.resetFields()
        } catch {
            messageApi.error(onError.toast);
        }
        
    }

    const onCancelHandler = () => {
        router.push("/dashboard")
    }

    const getComponentTypes = (formFields) => {
        const componentTypes = {}

        for(let formField of formFields) {
            componentTypes[formField.fieldName] = formField.componentType
        }

        return componentTypes
    }
    
    return (
        <Row className={styles.formBackground}>
            {contextHolder}
            {isLoading ? (
                    <div className={styles.spinner}>
                        <Spin size='large' />
                    </div>
                ) : (
                <Col offset={6} span={12} className={styles.form}>
                <Form
                    name="control"
                    form={form}
                    layout={LAYOUT[layout]}
                    onFinish={(values) => onFinishHandler(values, onSubmission.apiConfig)}
                >
                    <Title level={2} style={{ marginBottom: "2px"}}>{title}</Title>
                    <div style={{ marginBottom: "30px"}}><Text type="secondary">{subTitle}</Text></div>
                    

                    {renderFormFields(formFields)}

                    {
                        onSubmission && (
                            <>
                                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                                    <Flex>
                                        <Col span={11}>
                                            <Button htmlType="button" onClick={onCancelHandler} block>
                                                Cancel
                                            </Button>
                                        </Col>
                                        <Col span={12} offset={1}>
                                            <Button type="primary" htmlType="submit" block>
                                                {onSubmission.label}
                                            </Button>
                                        </Col>
                                    </Flex>
                                </Form.Item>
                            </>
                    )}
                    
                </Form>
            </Col>)}
        </Row>
    )
}

export default FormRenderer