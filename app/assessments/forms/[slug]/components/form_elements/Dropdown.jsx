import { Form, Select } from "antd"

const Dropdown = ({label, fieldName, placeholder, options, required=false}) => {
    return (
        <Form.Item label={label} key={fieldName} required={required} name={fieldName} rules={[{ required }]}>
            <Select placeholder={placeholder} options={options} />
        </Form.Item>
    )
}

export default Dropdown