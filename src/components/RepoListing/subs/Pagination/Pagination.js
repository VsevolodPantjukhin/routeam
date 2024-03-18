import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import './Pagination.scss';

const RepoPagination = ({ page, setPage, pageCount, ...props }) => {

    const handleEdges = p => {
        if (p < 1) return 1;
        if (p > pageCount) return pageCount;
        return p;
    }

    const padPage = p => {
        if (p + 4 > pageCount) return p - 4;
        return p;
    }

    return (
        <div className='repos-pagination'>
            <Pagination>
                <PaginationItem onClick={() => setPage(1)} disabled={page === 1}>
                    <PaginationLink
                        first
                    />
                </PaginationItem>
                <PaginationItem onClick={() => setPage(handleEdges(page - 1))} disabled={page === 1}>
                    <PaginationLink
                        previous
                    />
                </PaginationItem>
                {/* 8, 9, 10, 11 , 12 */}
                {/* 5 6 7 8 9 10 */}
                {Array.from({ length: Math.min(5, pageCount) }, (_, i) => padPage(page) + i).map(ind => (
                    <PaginationItem onClick={() => setPage(handleEdges(ind))} disabled={page === ind} active={page === ind} key={ind}>
                        <PaginationLink
                        >  {ind}</PaginationLink>

                    </PaginationItem>
                ))}

                <PaginationItem onClick={() => setPage(handleEdges(page + 1))} disabled={page === pageCount}>
                    <PaginationLink
                        next
                    />
                </PaginationItem>
                <PaginationItem onClick={() => setPage(pageCount)} disabled={page === pageCount}>
                    <PaginationLink
                        last
                    />
                </PaginationItem>
            </Pagination>
        </div>
    )

}

export default RepoPagination;