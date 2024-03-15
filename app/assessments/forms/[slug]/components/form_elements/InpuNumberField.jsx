import { Form, InputNumber } from "antd"

const InputNumberField = ({label, fieldName, placeholder, required=false}) => {
    return (
        <Form.Item label={label} key={fieldName} name={fieldName} rules={[{ required }]}>
            <InputNumber placeholder={placeholder} min={1} max={10} style={{ width: "100%"}}/>
        </Form.Item>
    )
}

export default InputNumberField