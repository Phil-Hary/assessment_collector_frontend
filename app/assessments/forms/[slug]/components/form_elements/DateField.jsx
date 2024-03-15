import { Form, DatePicker } from "antd"

const DateField = ({label, fieldName, placeholder, options, required=false}) => {
    return (
        <Form.Item label={label} key={fieldName} required={required} name={fieldName} rules={[{ required }]}>
            <DatePicker style={{ width: "100%"}}/>
        </Form.Item>
    )
}

export default DateField