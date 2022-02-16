import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("https://localhost:44335/api/products/getall");
    }
}