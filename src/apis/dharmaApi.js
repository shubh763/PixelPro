import axios from "axios";

export const axiosBaseURL = axios.create({
  baseURL: "https://pixelprotechnologies.com/testapi/api/v1",
  

  // headers: {
  //   "X-user": "zur1xjb4123ascvb",
  // },
});
