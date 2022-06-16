import { instance } from "./api-base";

export function Get() {
  instance.get(`v1/products`).then((res) => {
    return res.data;
  }).catch((error) => console.log(error));
}
export function Post(data) {
  instance.post(`v1/products`, data).then((res) => {
    return res;
  }).catch((error) => console.log(error));
}
