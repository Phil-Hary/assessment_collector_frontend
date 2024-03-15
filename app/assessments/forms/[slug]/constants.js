const FORM_CONFIG = {
    name: "Assessment Outcome Form",
    pages: [
        {
            name: "Assessment Outcome",
            template: "form",
            content: {
                title: "Assessment Outcome Form",
                subTitle: "Document the outcome of each lead's qualification assessment.",
                layout: "simple",
                formFields: [
                    {
                        label: "Lead ID",
                        fieldName: "lead_id",
                        componentType: "text-field",
                        placeholder: "Enter Lead ID",
                        required: true,
                    },
                    {
                        label: "Qualified Status",
                        fieldName: "qualified_status",
                        componentType: "dropdown",
                        options: [
                            {
                                label: "Yes",
                                value: "true",
                            },
                            {
                                label: "No",
                                value: "false",
                            },
                        ],
                        required: true,
                    },
                    {
                        label: "Lead Score",
                        fieldName: "lead_score",
                        componentType: "number-field",
                        placeholder: "Enter Lead Score",
                        required: true,
                    },
                    {
                        label: "Assigned Sales Representative",
                        fieldName: "assigned_sales_representative",
                        componentType: "text-field",
                        placeholder: "Enter Sales Representative Name",
                        required: true,
                    },
                    {
                        label: "Follow-Up Date",
                        fieldName: "follow_up_date",
                        componentType: "date-field",
                        required: true,
                    },
                    {
                        label: "Comments",
                        fieldName: "comments",
                        componentType: "text-area",
                        placeholder: "Enter any comments",
                        required: false,
                    },
                ],
                onSubmission: {
                    label: "Submit",
                    apiConfig: {
                        endpoint: "/api/assessmentoutcomeform/onSubmit/",
                        requestMethods: "post",
                        onSuccess: {
                            reset: true,
                            toast: "Submission successful",
                            navigateTo: "/dashboard",
                        },
                        onError: {
                            reset: false,
                            toast: "Submission failed, please try again.",
                            navigateTo: "",
                        },
                    },
                },
                onCancel: {
                    label: "Cancel",
                    navigateTo: "/dashboard",
                },
            },
        },
    ],
}

const LAYOUT = {
    "simple": "vertical"
}

export {
    FORM_CONFIG,
    LAYOUT
}