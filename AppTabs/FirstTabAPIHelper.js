import {HTTP_GET} from "../network/v2/APIConstant";
import {GET_HOME_DATA_URL} from "../AppConstants/AppURLs";
import {executeApi} from "../network/v2/ApiManager";

export const getHomeScreenData = (callback) => {
    console.log("calling api 2")
    let apiParams = {
        httpType: HTTP_GET,
        url: GET_HOME_DATA_URL,
        baseUrl: "",
        callback: callback,
    };
    apiParams.apiProps = {baseUrl: ''}
    executeApi(apiParams).done();
};