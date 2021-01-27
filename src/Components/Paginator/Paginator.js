import React from 'react';
import ReactPaginate from 'react-paginate';

import './Paginator.css';


export default function Paginator({ onPageChange, pageCount }) {
    return (
        <React.Fragment>
            <ReactPaginate
                previousLabel={'‹'}
                nextLabel={'›'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={onPageChange}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </React.Fragment>
    )
}
