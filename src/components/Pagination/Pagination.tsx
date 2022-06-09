import React from 'react'
import cn from 'classnames'

import './pagination.scss'

interface PaginationProps {
    pages: number[]
    changePage: (page: number) => void
    page: number
}

const Pagination: React.FC<PaginationProps> = ({ pages, changePage, page }) => {
    return (
        <div className="zui-pager">
            <ol className="btn-group">
                {pages.map(p => (
                    <li className="btn-group__item" key={p} onClick={() => changePage(p)}>
                        <button className={cn({ 'btn__active': p === page }, 'btn btn--basic')}><span>{p}</span></button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Pagination
