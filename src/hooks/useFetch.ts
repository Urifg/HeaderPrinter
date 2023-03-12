import {useState} from 'react';

export const useFetch = () => {
    const [requestHeaders, setRequestHeaders] = useState<string>("");
    const [responseHeaders, setResponseHeaders] = useState<Array<{value: string, key: string}>>();

    const incomeHeader: Array<{value: string, key: string}> = [];

    const hanldeincomeHeader = (value: string, key: string) => {
        incomeHeader.push({value, key});
    }

    const callEndpoint = (endpoint: string, headers?: any) => {
        
        setRequestHeaders(headers);
        fetch(endpoint, headers)
            .then(response => {response.headers.forEach(hanldeincomeHeader); setResponseHeaders(incomeHeader); return response.json()})
            .then(data => {setRequestHeaders(data)})
    }

    return {
        requestHeaders,
        responseHeaders,
        callEndpoint
    }
}