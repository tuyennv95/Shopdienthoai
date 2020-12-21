import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ data }) {
  return (

    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <nav>
          <div id="menu" className="collapse navbar-collapse">
            <ul>
              {data.map((item) => {
                return (
                  <li key={item._id} className="menu-item">
                    <Link to={`/cat-${item._id}`}>{item.name}</Link>
                  </li>
                )
              })};
            </ul>
          </div>
        </nav>
      </div>
    </div>

  );
}
Menu.defaultProps = {
  data: [],
};

export default Menu;