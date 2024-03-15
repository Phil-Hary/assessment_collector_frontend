import { Form, Input } from "antd"

const InputField = ({label, fieldName, placeholder, required=false}) => {
    return (
        <Form.Item label={label} key={fieldName} name={fieldName} rules={[{required }]}>
            <Input placeholder={placeholder} />
        </Form.Item>
    )
}

export default InputField