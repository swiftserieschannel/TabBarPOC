const FAILURE = 'failure';
const SUCCESS = 'success';
import { HTTP_GET, HTTP_POST, HTTP_PUT } from "./APIConstant"

export const executeApi = async (apiParams) => {
    switch (apiParams.httpType) {
        case HTTP_GET: executeGetRequest(apiParams);
            break;
        case HTTP_POST: executePostRequest(apiParams);
            break;
        case HTTP_PUT: executePutRequest(apiParams);
            break
    }
};

function executePostRequest(apiParams) {
    const url = apiParams.apiProps.baseUrl + apiParams.url;
    const header = apiParams.apiProps.header;
    const requestBody = apiParams.requestBody;
    const callback = apiParams.callback;

    fetch(url, { method: 'POST', headers: header, body: JSON.stringify(requestBody) })
        .then((response) => response.json())
        .then((data) => {
            console.log(`\n********\nmethod : POST \nurl : ${url} \nbody : ${JSON.stringify(requestBody, null, 4)} \nheaders : ${JSON.stringify(header, null, 4)} \ndata : ${JSON.stringify(data, null, 4)} \n********\n`);
            if (data?.status === SUCCESS)
                callback(data, null);
            else
                callback(null, data.error);
        })
        .catch(error => {
            console.log(`\n********\nmethod : POST \nurl : ${url} \nbody : ${JSON.stringify(requestBody, null, 4)} \nheaders : ${JSON.stringify(header, null, 4)} \nerror : ${JSON.stringify(error, null, 4)} \n********\n`);
            callback(null, error);
        })
}

function executeGetRequest(apiParams) {
    const url = apiParams.apiProps.baseUrl + apiParams.url;
    const header = apiParams.apiProps.header;
    const callback = apiParams.callback;
    fetch(url, { method: 'GET', headers: header })
        .then((response) => response.json())
        .then((data) => {
            console.log(`\n********\nmethod : GET \nurl : ${url} \nheaders : ${JSON.stringify(header, null, 4)} \ndata : ${JSON.stringify(data, null, 4)} \n********\n`);
            if (data?.status?.toLowerCase() === SUCCESS || data?.status === undefined) // check for undefined only for autosuggestion API.
                callback(data, null);
            else
                callback(null, data?.error);
        })
        .catch(error => {
            console.log(`\n********\nmethod : GET \nurl : ${url} \nheaders : ${JSON.stringify(header, null, 4)} \nerror : ${JSON.stringify(error, null, 4)} \n********\n`);
            callback(null, error);
        })
}

function executePutRequest(apiParams) {
    const url = apiParams.apiProps.baseUrl + apiParams.url;
    const header = apiParams.apiProps.header;
    const requestBody = apiParams.requestBody;
    const callback = apiParams.callback;

    fetch(url, {method: 'PUT', headers: header, body: JSON.stringify(requestBody)})
        .then((response) => {
            console.log("url : ", url);
            console.log("body : ", requestBody);
            console.log("headers : ", header);
            return response.json()
        })
        .then((data) => {
            console.log("data : ", data);
            if (data?.status === SUCCESS)
                callback(data, null);
            else
                callback(null, data.error);
        })
        .catch(error => {
            console.log("error : ", error);
            callback(null, error);
        })
}


export function executeDocUploadRequest(apiParams) {
    const url = apiParams.apiProps.baseUrl + apiParams.url;
    const header = apiParams.apiProps.header;
    const requestBody = apiParams.requestBody;
    const callback = apiParams.callback;

    fetch(url, { method: 'POST', headers: header, body: requestBody })
        .then((response) => response.json())
        .then((data) => {
            console.log(`\n********\nmethod : POST \nurl : ${url} \nbody : ${JSON.stringify(requestBody, null, 4)} \nheaders : ${JSON.stringify(header, null, 4)} \ndata : ${JSON.stringify(data, null, 4)} \n********\n`);
            if (data?.status?.toLowerCase() === SUCCESS)
                callback(data, null);
            else
                callback(null, data?.error);
        })
        .catch(error => {
            console.log(`\n********\nmethod : POST \nurl : ${url} \nbody : ${JSON.stringify(requestBody, null, 4)} \nheaders : ${JSON.stringify(header, null, 4)} \nerror : ${JSON.stringify(error, null, 4)} \n********\n`);
            callback(null, error);
        })
}

const timeout = (ms, promise) => new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("timeout")), ms)
    promise.then(resolve, reject)
})