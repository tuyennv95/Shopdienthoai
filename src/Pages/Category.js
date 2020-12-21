import React from 'react';
import "../Access/css/category.css";
import { getCategories, getCategory, getProductCategory, productsApi } from '../Services/Api';
import ProductItem from '../Components/ProductItem';
import Pagination from '../Components/Pagination';
import queryString from 'query-string';

export default function Category(props) {
  const [category, setCategory] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [pages, setPages] = React.useState({
      limit: 12,
      totalProducts: 0,
    }
  );
  // console.log(props);
  const { id } = props?.match?.params;

  const search = queryString.parse(props.location.search);
  const { page } = search;

  const _getCategoryProducts = () => {
    productsApi({
      params: {
        "filter[category_id]": id,
        limit: pages.limit,
        page: page,
      },
    }).then(({data}) => {
      if (data?.data?.docs) {
        setProducts(data.data.docs);
      }
      if (data?.data?.pages) {
        setTotal(data.data.pages.total)

      }
      if (data?.data?.pages) {
        setPages({...pages, totalProducts: data.data.pages.total } )

      }
    })

  };



  React.useEffect(() => {
    getCategory(id)
      .then(({ data }) => {
        if (data?.data) {
          setCategory(data.data);
        }
      })
    _getCategoryProducts();

  }, [id])
  React.useEffect(() => {
    _getCategoryProducts();
  }, [page])
  console.log(pages);


  return (
    <div>
      <div className="products">
        <h3>{category?.name} (có {pages.totalProducts} sản phẩm)</h3>
        <div className="product-list card-deck">
          {products.map((product) => {

            return <ProductItem item={product} key={product._id} />
          })}

        </div>
      </div>
      {/*	End List Product	*/}
      <div id="pagination">
        <Pagination {...pages} />

      </div>
    </div>

  );
}

// export default Category;