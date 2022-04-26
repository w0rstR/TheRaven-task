import axiosService from "./axios.service";



const productService = {
    getAllProducts: () => axiosService.get().then(value => value.data.products),

}

export default productService