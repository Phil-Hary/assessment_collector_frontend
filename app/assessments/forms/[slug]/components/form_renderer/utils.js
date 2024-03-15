import { DateField, InputField, Dropdown, InputNumberField, TextArea} from "../form_elements"

const getFormElement = ({componentType, ...formProps}) => {
    switch(componentType) {
        case "text-field":
            return (
                <InputField
                    {...formProps}
                />
            )
        
        case "dropdown":
            return (
                <Dropdown
                    {...formProps}
                />
            )
        
        case "number-field":
            return (
                <InputNumberField
                    {...formProps}
                />
            )
        
        case "date-field":
            return (
                <DateField 
                    {...formProps}
                />
            )
        
        case "text-area":
            return (
                <TextArea
                    {...formProps}
                />
            )
    }
}

export {
    getFormElement
}