import { Form, Input } from "antd"

const TextArea = ({label, fieldName, placeholder, required=false}) => {
    return (
        <Form.Item label={label} key={fieldName} name={fieldName} rules={[{ required }]}>
            <Input.TextArea placeholder={placeholder} />
        </Form.Item>
    )
}

export default TextArea