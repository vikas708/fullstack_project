import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2EyOWVmMTljNTdlZGJhMjI1ZjI1NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDk3MDcxMCwiZXhwIjoxNjkxMjI5OTEwfQ.5ipgNWz-gBY741ZAy900LR65DW8VIVPbP-PUmoCDcEk'
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const NewTOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${NewTOKEN}` },
});