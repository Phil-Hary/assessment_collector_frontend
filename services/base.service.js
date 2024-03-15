import axios from "axios";

/**
 * @name BaseService
 * @description This is the base class which is inherited by all the other services.
 * This class contains few default consigurations like interceptor configuration, exposing
 * an axios method
 */
class BaseService {
  constructor() {
    this.tokenType = "Bearer";
    this.storageTokenKeyName = "access";

    axios.interceptors.request.use(
      (request) => {
        const accessToken = this.getAccessToken();

        if (accessToken) {
          request.headers.authorization = `${this.tokenType} ${accessToken}`;
        }

        return request;
      },
      (error) => Promise.reject(error)
    );

    axios.defaults.baseURL = "https://assessment-collector-backend.onrender.com";
  }

  getAccessToken = () => {
    return window.localStorage.getItem(this.storageTokenKeyName);
  };

  apiService = ({ method = "GET", url, params, data, responseType }) => {
    const axiosParams = {
      method,
      url,
      params,
      data,
    };

    if (responseType) {
      axiosParams["responseType"] = responseType;
    }

    return axios({
      ...axiosParams,
    });
  };
}

export default BaseService;
