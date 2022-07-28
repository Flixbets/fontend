import axios from "axios";

export default axios.create({
    baseURL: `${process.env.REACT_APP_NODE_HOST_URL}`,
    // baseURL:"https://nodejs-server-project.herokuapp.com/",
    headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
       
    },
});
