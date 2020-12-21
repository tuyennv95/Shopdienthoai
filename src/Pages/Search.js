import React from 'react';
import "../Access/css/search.css";
import ProductItem from '../Components/ProductItem';
import { productsApi } from '../Services/Api';
import queryString from 'query-string';
import Pagination from '../Components/Pagination';
function Search(props) {
  const [products, setProducts] = React.useState([]);

  const search = queryString.parse(props.location.search);

  const key = search.q;
  const page = search.page;
  const [pages, setPages] = React.useState({
    limit: 12,
    totalProducts: 0,
  });



  React.useEffect(() => {
    productsApi({
      params: {
        limit: pages.limit,
        name: key,
        page: page,

      }
    }
    ).then(({ data }) => {
      setProducts(data.data.docs);
      if(data?.data?.pages){
        setPages({...pages, totalProducts: data.data.pages.total});

      }
    })

    
  }, [key,page]);

  return (
    <div>
      <div className="products">
  <div id="search-result">Kết quả tìm kiếm với {pages.totalProducts} sản phẩm <span>{key}</span></div>
        <div className="product-list card-deck">
          {products.map((product) => {
            return <ProductItem key={product._id} item={product} />

          })}
        </div>
      </div>
      <div id="pagination">
        <Pagination  {...pages}/>
      </div>
    </div >

  );
}

export default Search;