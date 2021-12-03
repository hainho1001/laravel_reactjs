import axios from "axios";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const Repository = {
  fetch(resource: any, params: any) {
    return api.get(resource, { params });
  },
  post(resource: any, params: any) {
    return api.post(resource, params);
  },
  patch(resource: any, params: any) {
    return api.patch(resource, params);
  },
  delete(resource: any, params: any) {
    return api.delete(resource, { params });
  },
};

export default Repository;