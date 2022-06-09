import React from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'

import { fetchNewsData } from '../../store/newsSlice/newsActionCreators'

import Post from '../../components/PostCard/PostCard'
import Pagination from '../../components/Pagination/Pagination'

import { getPages, getPagesArray } from '../../utils/pages'

import './news.scss'

const News: React.FC = () => {
    const dispatch = useAppDispatch()
    const { totalCount, news } = useAppSelector(store => store.newsReducer)

    const [limit, setLimit] = React.useState(9)
    const [page, setPage] = React.useState(1)
    const pagesArray: number[] = getPagesArray(getPages(totalCount, limit))

    React.useEffect(() => {
        dispatch(fetchNewsData(limit, page))
    }, [page])

    return (
        <div className="news">
            <div className="news__container">
                <div className="news__body">
                    <div className="news__cards">
                        {news?.map(post => (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        ))}
                    </div>
                </div>
                <Pagination
                    pages={pagesArray}
                    page={page}
                    changePage={setPage}
                />
            </div>
        </div>
    )
}

export default News
