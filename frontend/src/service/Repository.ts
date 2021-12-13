import api from "./api";

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
