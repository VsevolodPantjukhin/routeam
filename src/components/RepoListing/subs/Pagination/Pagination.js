import React, { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import './Pagination.scss';

const RepoPagination = ({ page, setPage, pageCount, limit, setLimit, ...props }) => {
    const [limitOpen, setLimitOpen] = useState(false);
    const options = [6, 12, 18];
    const handleEdges = p => {
        if (p < 1) return 1;
        if (p > pageCount) return pageCount;
        return p;
    }

    const padPage = p => {
        if (pageCount < 4) return p;
        if (p + 4 > pageCount) return p - 4;
        return p;
    }

    return (
        <div className='repos-pagination'>

            <Dropdown isOpen={limitOpen} toggle={() => setLimitOpen(!limitOpen)}>
                <DropdownToggle caret>
                    {limit}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Лимит</DropdownItem>
                    {options.map((option, index) =>
                        <DropdownItem onClick={() => setLimit(option)} key={index} >{option}</DropdownItem>)}
                </DropdownMenu>
            </Dropdown>


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