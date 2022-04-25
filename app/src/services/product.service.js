
import axiosService from "./axios.service";
import {urls} from "../config/urls";



const productService = {
    getAllProducts: () => axiosService.get(`${urls.products}`).then(value => value.data),

}

export default productService