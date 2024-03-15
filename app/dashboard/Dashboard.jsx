'use client'

import { AppLayout } from "@/common/layouts"
import { Card, Col, Flex, Row, Typography, message } from "antd"
import { FormOutlined, UnorderedListOutlined } from '@ant-design/icons'
import styles from "./Dashboard.module.css"
import { useRouter } from "next/navigation"

const Dashboard = () => {
    const { Title } = Typography;
    const router = useRouter()
    const [ messageApi, contextHolder ] = message.useMessage();

    const creatFormhandler = () => {
        messageApi.warning("Currently form can be created only using apis");
    }

    const viewResponseHandler = () => {
        router.push("/responses")
    }

    return (
        <AppLayout>
            {contextHolder}
            <Row>
                <Col offset={4} span={8}>
                    <Card size="large" className={styles.card} onClick={creatFormhandler}>
                        <Flex justify="center" align="center" vertical>
                            <Title level={3}>Create Form</Title>
                            <FormOutlined style={{ fontSize: '64px' }}/>
                        </Flex>
                    </Card>
                </Col>
                <Col offset={2} span={8}>
                    <Card size="large" className={styles.card} onClick={viewResponseHandler}>
                        <Flex justify="center" align="center" vertical>
                            <Title level={3}>View Responses</Title>
                            <UnorderedListOutlined style={{ fontSize: '64px' }}/>
                        </Flex>
                    </Card>
                </Col>
            </Row>
        </AppLayout>
    )
}

export default Dashboard
