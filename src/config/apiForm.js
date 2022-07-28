import axios from "axios";

export default axios.create({
    withCredentials: true,
    baseURL: `${process.env.REACT_APP_NODE_HOST_URL}`,
   
    headers: { Accept: 'application/json', "Content-Type": "multipart/form-data" },
});