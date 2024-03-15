import BaseService from "./base.service"

class FormService extends BaseService {
    instance = null;
  
    constructor() {
      super();
    }

    submit = (method, url, response) => {
        return this.apiService({
            method,
            url,
            data: {
                response
            }
        })
    }

    getFormConfig = (formName) => {
        return this.apiService({
            method: "GET",
            url: `api/${formName}/config/`
        })
    }

    getForms = () => {
        return this.apiService({
            method: "GET",
            url: `api/forms/`
        })
    }

    getFormResponses = (formName) => {
        return this.apiService({
            method: "GET",
            url: `api/${formName}/responses/`
        })
    }

    static getService = () => {
        if(this.instance) {
          return this.instance
        }
    
        this.instance = new FormService()
        return this.instance
    }
}

export default FormService;