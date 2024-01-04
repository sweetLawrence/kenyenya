// import axios from "axios";

// function getTokenFromLocalStorage() {
//     let accessToken = '';
//     if (localStorage.getItem('accessToken')) {
//         accessToken = localStorage.getItem("accessToken");
//     } else {
//         accessToken = '';
//     }
//     return accessToken;
// }

// // let path = window.location.href.includes("localhost")
// //     ? "http://localhost:3001"
// //     : "https://b3d0-154-159-237-69.ngrok-free.app";

// let path = "http://localhost:3001";

// const apiCall = axios.create({
//     baseURL: `${path}/api`,
//     headers: {
//         'accessToken': getTokenFromLocalStorage(),
//         'ngrok-skip-browser-warning': 'anyValue',
//     },
// });

// apiCall.interceptors.request.use(config => {
//     config.headers.setAuthorization(getTokenFromLocalStorage())
//     return config
// })

// export default apiCall;

let basePath = window.location.href.includes("localhost")
    ? "http://localhost:3001"
    : "https://8e08-154-159-237-179.ngrok-free.app";

export default basePath;

