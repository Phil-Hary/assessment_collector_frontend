'use client'

import { AppLayout } from "@/common/layouts"
import { FormService } from "@/services"
import { Col, Row, Select, Table, Typography } from "antd"
import { useEffect, useState } from "react"

const Responses = () => {
    /**
     * This component renders responses page, where in user can select a form and see the responses received for that form
    */
    const formService = FormService.getService()
    const [forms, setForms] = useState([])
    const [currentForm, setCurrentForm] = useState()
    const [formResponses, setFormResponses] = useState([])

    const { Title } = Typography

    useEffect(() => {
        const getForms = async () => {
            const { data } = await formService.getForms()
            setForms(data.data)
        }

        (async () => await getForms())()
    }, [])

    useEffect(() => {
        const getFormResponses = async () => {
            if (currentForm) {
                const { data } = await formService.getFormResponses(currentForm)
                setFormResponses(data.data)
            }
        }

        (async () => await getFormResponses())()
    }, [currentForm])

    const getOptions = (forms) => {
        const options = forms.map(({ name: label, slug: value }) => ({ label, value }))
        return options
    }

    const onSelectChange = (value) => {
        setCurrentForm(value)
    }

    const getTableColumns = () => {
        const tableData = formResponses[0]
        const tableColumns = []

        for (let key of Object.keys(tableData)) {
            tableColumns.push({
                "title": key.replaceAll("_", " "),
                "dataIndex": key,
                key
            })
        }

        return tableColumns
    }

    return (
        <AppLayout>
            <Title level={2}>Responses</Title>
            <Row>
                <Col span={2}>
                    <Title level={4}>Form Name</Title>
                </Col>
                <Col span={4}>
                    <Select options={forms && getOptions(forms)} onChange={onSelectChange} style={{ width: "100%" }} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    {
                        formResponses.length > 0 && (
                            <Table dataSource={formResponses} columns={getTableColumns()} />
                        )
                    }
                </Col>
            </Row>
        </AppLayout>
    )
}

export default Responses