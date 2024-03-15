import { COMPONENT_TYPE_MAPPING } from "@/constants"


class FormUtils {
    static responseTransformer = (response, componentTypes) => {
        const transformedResponse = []

        for(let responseValue of Object.keys(response)) {
            const responseType = COMPONENT_TYPE_MAPPING[componentTypes[responseValue]]

            transformedResponse.push({
                field_name: responseValue,
                value: response[responseValue] || "",
                type: responseType
            })
        }

        return transformedResponse
    }
}

export default FormUtils