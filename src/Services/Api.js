import http from './Http';

export const productsApi = (config)=> {
    return http.get("/products", config);
};
export const productApi = (id, config) =>{
    return http.get(`/products/${id}` , config);
};
export const commentApi = (id , config)  => {
    return http.get(`/products/${id}/comments` , config);
};
export const createCommentApi  = (id, data, config) => {
    return http.post(`/products/${id}/comments` , data, config);
};
export const getCategories = (config)=>{
    return http.get(`/categories`,config);
};
export const getCategory = (id, config) =>{
    return http.get(`/categories/${id}` , config)
};
export const getProductCategory = (id, config) =>{
    return http.get(`/categories/${id}/products`, config);
};
export const orderApi = (data, config) =>{
    return http.post("/order", data, config);
};