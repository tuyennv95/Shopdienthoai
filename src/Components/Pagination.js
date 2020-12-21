import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import queryString from "query-string";

const Pagination = (props) => {
    const totalPage = Math.ceil(props.totalProducts / props.limit);

    const location = useLocation();
    const pathname = location.pathname;

    const search = queryString.parse(location.search);
    const page = parseInt(search.page) || 1;


    function makeUrl(page) {
        return `${pathname}?${queryString.stringify({ ...search, page: page })}`
    }
    function renderPage() {
        const pages = [];
        const left = page - 2;
        const right = page + 2;

        for (let i = 1; i <= totalPage; i++) {
            if (i === 1 || i===page || i === totalPage || (i >= left && i <= right)) {
                if (i === left && i - pages[pages.length - 1] > 1) {
                    pages.push("...");
                }
                pages.push(i);
                if (i === right && totalPage - i > 1) {
                    pages.push("...");
                }
            }
        }

        return pages.map((i, index) =>
            (
                <li key={index} className={`page-item ${page === i ? "active" : null} `}>
                    <Link className="page-link" to={makeUrl(i)}>
                        {i}
                    </Link>
                </li>

            ));

    }

    return (
        <div>
            <ul className="pagination">
                {page > 1 && (
                    <li className="page-item"><Link className="page-link" to={makeUrl(page - 1)}>Trang trước</Link></li>

                )}
                {renderPage()}

                {page < totalPage && (
                    <li className="page-item"><Link className="page-link" to={makeUrl(page + 1)}>Trang sau</Link></li>

                )}
            </ul>
        </div>
    );

};
export default Pagination;
