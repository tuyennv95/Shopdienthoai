import React from 'react';

function Slider() {
  return (

    <div id="slide" className="carousel slide" data-ride="carousel">
  {/* Indicators */}
  <ul className="carousel-indicators">
    <li data-target="#slide" data-slide-to={0} className="active" />
    <li data-target="#slide" data-slide-to={1} />
    <li data-target="#slide" data-slide-to={2} />
    <li data-target="#slide" data-slide-to={3} />
    <li data-target="#slide" data-slide-to={4} />
    <li data-target="#slide" data-slide-to={5} />
  </ul>
  {/* The slideshow */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/slide-1.png" alt="Vietpro Academy" />
    </div>
    <div className="carousel-item">
      <img src="images/slide-2.png" alt="Vietpro Academy" />
    </div>
    <div className="carousel-item">
      <img src="images/slide-3.png" alt="Vietpro Academy" />
    </div>
    <div className="carousel-item">
      <img src="images/slide-4.png" alt="Vietpro Academy" />
    </div>
    <div className="carousel-item">
      <img src="images/slide-5.png" alt="Vietpro Academy" />
    </div>
    <div className="carousel-item">
      <img src="images/slide-6.png" alt="Vietpro Academy" />
    </div>
  </div>
</div>
  )
}

export default Slider;