import React from 'react';
import "../Access/css/cart.css";
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL } from '../constants/index';
import { UPDATE_CART_ITEM , DELETE_ITEM, RESET_CART} from '../constants/action-type';
import {orderApi} from '../Services/Api';
function Card({history}) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  let totalprice = items.reduce((a,c)=> a + c.qty * c.price, 0);
  const [customer, setCustomer] = React.useState({})
  
  const onChangeInput = (e, id) => {
    let value = parseInt(e.target.value);
    if(isNaN(value)){
      value = 1;
    }

    dispatch({
      type: UPDATE_CART_ITEM,
      payload: {
        id: id,
        qty: value,
      }

    })

  }
  const onDeleteItem=(e,id)=>{
    e.preventDefault();
     
    const confirmDel = window.confirm("Bạn muốn xóa sản phầm này?");

    if(confirmDel){
      dispatch({
        type: DELETE_ITEM,
        payload: {
          id: id,
        }
      })
    }
  }
  const onChangeInputOrder = (e)=>{
    const {value, name} = e.target;
    setCustomer({ [name]: value})
    
  };
  const onSubmit = (e) =>{
    e.preventDefault();


    dispatch({
      type: RESET_CART,
    });
    history.push("/success");
    // orderApi({
    //   ...customer,
    //   items: items.map((i)=>({prd_id:i.id, qty: i.id}))
    // }).then((res)=>{
    //   dispatch({
    //     type: RESET_CART,
    //   })
    //   history.push("/Success");
    // }).catch(
    //   console.log("🚀 ~ file: Cart.js ~ line 57 ~ onSubmit ~ res")

    // )
  }

  return (
    <div id="my-cart">
      <div className="row">
        <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">Thông tin sản phẩm</div>
        <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">Tùy chọn</div>
        <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
      </div>
      <form method="post">
        {items.map((item, index) =>
          (
            <div key={item.id} className="cart-item row">
              <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                <img alt="" src={`${BASE_URL}/assets/uploads/${item.img}`} />
                <h4>{item.name}</h4>
              </div>
              <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                <input
                  type="number"
                  id="quantity"
                  className="form-control form-blue quantity"
                  value={item.qty}
                  onChange={(e) => onChangeInput(e, item.id)}
                  min={1} />
              </div>
              <div className="cart-price col-lg-3 col-md-3 col-sm-12">
                <b>{new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</b>
                <Link to="#" onClick={(e) => onDeleteItem(e, item.id)}>Xóa</Link></div>
            </div>
          ))}
        <div className="row">
          <div className="cart-thumb col-lg-7 col-md-7 col-sm-12"></div>
          <div className="cart-total col-lg-2 col-md-2 col-sm-12">
            <b>Tổng cộng:</b>
          </div>
          <div className="cart-price col-lg-3 col-md-3 col-sm-12">
            <b>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(totalprice)}
            </b>
          </div>
        </div>
      </form>
      <div id="customer">
        <form method="post" onSubmit={onSubmit}>
          <div className="row">
            <div id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
              <input 
              onChange={onChangeInputOrder}
              placeholder="Họ và tên (bắt buộc)" 
              type="text" name="name" 
              className="form-control" 
              required />
            </div>
            <div id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
              <input 
              onChange={onChangeInputOrder}
              placeholder="Số điện thoại (bắt buộc)" 
              type="text" name="phone" 
              className="form-control" required />
            </div>
            <div id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
              <input 
              onChange={onChangeInputOrder}
              placeholder="Email (bắt buộc)" 
              type="text" name="mail" 
              className="form-control" required />
            </div>
            <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
              <input 
              onChange={onChangeInputOrder}
              placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)" 
              type="text" 
              name="add" 
              className="form-control" required />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="by-now col-lg-6 col-md-6 col-sm-12">
            <Link to="#" onClick={onSubmit}>
              <b>Mua ngay</b>
              <span>Giao hàng tận nơi siêu tốc</span>
            </Link>
          </div>
          <div className="by-now col-lg-6 col-md-6 col-sm-12">
            <Link to="#">
              <b>Trả góp Online</b>
              <span>Vui lòng call (+84) 0988 550 553</span>
            </Link>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Card;