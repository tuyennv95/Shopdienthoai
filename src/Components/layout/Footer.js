import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div>
            <div id="footer-top">
                <div className="container">
                    <div className="row">
                        <div id="logo-2" className="col-lg-3 col-md-6 col-sm-12">
                            <h2><Link to="#"><img alt="" src="images/logo.png" /></Link></h2>
                            <p>
                                Shop chúng tôi chuyên kinh doanh các dòng điện thoại Iphone, samsung mới nhất, giá rẻ nhất đến tay người tiêu dùng.
                </p>
                        </div>
                        <div id="address" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Địa chỉ</h3>
                            <p>Xóm 5 Hải Anh- Hải Hậu- Nam Định</p>
                            <p>12/1 Trâu Quỳ-Gia Lâm</p>
                        </div>
                        <div id="service" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Dịch vụ</h3>
                            <p>Bảo hành rơi vỡ, ngấm nước Care Diamond</p>
                            <p>Bảo hành Care X60 rơi vỡ ngấm nước vẫn Đổi mới</p>
                        </div>
                        <div id="hotline" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Hotline</h3>
                            <p>Phone Sale: (+84) 123456789</p>
                            <p>Email: muangay@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p>
                                2018 © Vietpro Academy. All rights reserved. Developed by Vietpro Software.
                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;