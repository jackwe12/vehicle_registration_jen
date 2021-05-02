import http from './axiosSetting';
export const getRegoList= () => http.get(process.env.REACT_APP_SNSW_REGO_LIST_URL);