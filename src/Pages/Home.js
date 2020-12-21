import React from 'react';
import ProductItem from '../Components/ProductItem';
import {productsApi} from '../Services/Api';
import {useSelectors, useDispatch} from 'react-redux';
function Home() {
    const [productNew, setProductNew] = React.useState([]);
    const [productFeature, setProductFeature] = React.useState([]);
    
    
    React.useEffect(() => {
        productsApi({
            params: {
                limit: 6,
            },
        }).then(({ data }) => {
            setProductNew(data.data.docs)
        });
        productsApi({
            params: {
                limit:6,
                'filter[is_featured]': true,
            }
        }).then(({data}) =>{
            setProductFeature(data.data.docs)
        });

    }, []);

    return (
        <div>
            <div>
                <div className="products">
                    <h3>Sản phẩm nổi bật</h3>
                    <div className="product-list card-deck">
                        {productFeature.map((product) => {
                            return <ProductItem item={product} key={product._id} />
                        })}

                    </div>

                </div>
                {/*	End Feature Product	*/}
                {/*	Latest Product	*/}
                <div className="products">
                    <h3>Sản phẩm mới</h3>
                    <div className="product-list card-deck">
                        {productNew.map((product) => {
                            return <ProductItem item={product} key={product._id} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;