import React from 'react';
import { Link } from 'react-router-dom';
// import slug from 'slug';


const Base_url = "http://vietpro.online";

const ProductItem = ({ item }) => {
// const urlSlug = slug(item.name, { lower: true });

    return (
        <div className="product-item card text-center">
            <Link to={`product.${item._id}`}><img alt={`${item.name}`} src={`${Base_url}/assets/uploads/${item.image}`} /></Link>
            <h4><Link to={`product.${item._id}`}>{item.name}</Link></h4>
            <p>Giá Bán: <span>{new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</span></p>
        </div>
    )
}
export default ProductItem;
