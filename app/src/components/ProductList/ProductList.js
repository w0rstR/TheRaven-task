import ProductItem from "../ProductItem/ProductItem";
import s from "./ProductList.module.css"

export default function ProductList(){
    return(
        <div className={s.container}>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>
    )
}