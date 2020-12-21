import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import "../Access/css/product.css";
import { BASE_URL } from "../constants/index";
import {
    productApi,
    commentApi,
    createCommentApi
} from '../Services/Api';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../constants/action-type';

function ProductDetail({ match, history }) {
    const [product, setProduct] = React.useState({});
    const [comments, setComments] = React.useState({});
    const [inputComment, setInputComment] = React.useState({
        content: "",
        email: "",
        name: "",
    });
    const [qty, setQty] = React.useState(1);
    const dispatch = useDispatch();

    const { id } = match.params;

    // -----------------------------------------
    React.useEffect(() => {
        productApi(id).then(({ data }) => {
            if (data.data) {

                setProduct(data.data);
            }

        })
        getComment(id);
    }, [id]);
    // --------------------------------------------
    function getComment(id) {
        commentApi(
            id,
            {
                params: {
                    sort: "-_id"
                }
            }
        ).then(({ data }) => {
            setComments(data.data.docs);
        })
    };
    // -----------------------------------
    function onChangeInput(e) {
        const { name, value } = e.target;
        setInputComment({
            ...inputComment,
            [name]: value
        });
    }
    function onSubmitComment(e) {
        e.preventDefault();


        createCommentApi(id, inputComment).then((data) => {
            setInputComment({ ...inputComment, content: "" });
            getComment(id);

        })

    }
    function onChangeQuantity(e) {
        const { value } = e.target;
        setQty(parseInt(value));

    }
    function onAddToCart(e) {
        e.preventDefault();

        dispatch({
            type: ADD_TO_CART,
            payload: {
                id: product._id,
                name: product.name,
                qty,
                price: product.price,
                img: product.image,

            }
        })
        setQty(1);
    }





    return (


        <div>
            <div id="product">
                <div id="product-head" className="row">
                    <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
                        <img alt="" src={product.image && `${BASE_URL}/assets/uploads/${product.image}`} />
                    </div>
                    <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
                        <h1>{product.name}</h1>

                        <ul>
                            <li><span>Bảo hành:</span> 12 Tháng</li>
                            <li><span>Đi kèm:</span> Hộp, sách, sạc, cáp, tai nghe</li>
                            <li><span>Tình trạng:</span> Máy Mới 100%</li>
                            <li><span>Khuyến Mại:</span> Dán Màn Hình 3 lớp</li>
                            <li id="price">Giá Bán (chưa bao gồm VAT)</li>
                            <li id="price-number">{new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(product.price)}</li>
                            <li id="status">{product.is_stock ? "Còn hàng" : "Hêt hàng"}</li>
                        </ul>
                        {product.is_stock ? (
                            <form onSubmit={onAddToCart} className="form-inline row">
                                <div className="form-group mx-sm-3 mb-2">
                                    <input
                                        type="number"
                                        min={1}
                                        value={qty}
                                        className="form-control"
                                        onChange={onChangeQuantity}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mb-2">
                                    Add to cart
                </button>
                            </form>
                        ) : null}
                    </div>
                </div>
                <div id="product-body" className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3>Đánh giá về {product.name}</h3>
                        {/* <p>
                            Màn hình OLED có hỗ trợ HDR là một sự nâng cấp mới của Apple thay vì màn hình LCD với IPS được tìm thấy trên iPhone 8 và iPhone 8 Plus đem đến tỉ lệ tương phản cao hơn đáng kể là 1.000.000: 1, so với 1.300: 1 ( iPhone 8 Plus ) và 1.400: 1 ( iPhone 8 ).
        </p>
                        <p>
                            Màn hình OLED mà Apple đang gọi màn hình Super Retina HD có thể hiển thị tông màu đen sâu hơn. Điều này được thực hiện bằng cách tắt các điểm ảnh được hiển thị màu đen còn màn hình LCD thông thường, những điểm ảnh đó được giữ lại. Không những thế, màn hình OLED có thể tiết kiệm pin đáng kể.
        </p>
                        <p>
                            Cả ba mẫu iPhone mới đều có camera sau 12MP và 7MP cho camera trước, nhưng chỉ iPhone X và iPhone 8 Plus có thêm một cảm biến cho camera sau. Camera kép trên máy như thường lệ: một góc rộng và một tele. Vậy Apple đã tích hợp những gì vào camera của iPhone X?
        </p>
                        <p>
                            Chống rung quang học (OIS) là một trong những tính năng được nhiều hãng điện thoại trên thế giới áp dụng. Đối với iPhone X, hãng tích hợp chống rung này cho cả hai camera, không như IPhone 8 Plus chỉ có OIS trên camera góc rộng nên camera tele vẫn rung và chất lượng bức hình không đảm bảo.
        </p>
                        <p>
                            Thứ hai, ống kính tele của iPhone 8 Plus có khẩu độ f / 2.8, trong khi iPhone X có ống kính tele f / 2.2, tạo ra một đường cong nhẹ và có thể chụp thiếu sáng tốt hơn với ống kính tele trên iPhone X.
        </p>
                        <p>
                            Portrait Mode là tính năng chụp ảnh xóa phông trước đây chỉ có với camera sau của iPhone 7 Plus, hiện được tích hợp trên cả iPhone 8 Plus và iPhone X. Tuy nhiên, nhờ sức mạnh của cảm biến trên mặt trước của iPhone X, Camera TrueDepth cũng có thể chụp với Potrait mode.
        </p> */}
                        {product && product.details}
                    </div>
                </div>
                {/*	Comment	*/}
                {inputComment && (
                    <div id="comment" className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h3>Bình luận sản phẩm</h3>
                            <form method="post">
                                <div className="form-group">
                                    <label>Tên:</label>
                                    <input name="name" required type="text" className="form-control" onChange={onChangeInput} value={inputComment.name} />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input name="email" required type="email" className="form-control" id="pwd" onChange={onChangeInput} value={inputComment.email} />
                                </div>
                                <div className="form-group">
                                    <label>Nội dung:</label>
                                    <textarea name="content" required rows={8} className="form-control" onChange={onChangeInput} value={inputComment.details} />
                                </div>
                                <button type="submit" name="sbm" className="btn btn-primary" onClick={onSubmitComment}>Gửi</button>
                            </form>
                        </div>
                    </div>)}
                {/*	End Comment	*/}
                {/*	Comments List	*/}
                {comments && comments.length && (
                    <div id="comments-list" className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            {comments.map((comment) => {
                                const timeComment = moment(comment && comment.createdAt);
                                return (
                                    <div key={comment._id} className="comment-item">
                                        <ul>
                                            <li><b>{comment.name}</b></li>
                                            <li>{timeComment.fromNow()}</li>
                                            <li>
                                                <p>{comment.content}</p>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                )}
                {/*	End Comments List	*/}
            </div>
            {/*	End Product	*/}
            <div id="pagination">
                <ul className="pagination">
                    <li className="page-item"><Link className="page-link" to="#">Trang trước</Link></li>
                    <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">Trang sau</Link></li>
                </ul>
            </div>
        </div>



    );
}

export default ProductDetail;