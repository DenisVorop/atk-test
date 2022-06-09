import { newsApi } from '../../api/newsApi'

import { newsSlice } from '../newsSlice/newsSlice'

import { AppDispatch } from '../store'
import { TPost } from '../../types/types'

// *** News ***
export const fetchNewsData = (limit: number, page: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await newsApi(limit, page)
        dispatch(newsSlice.actions.fetchNews())
        dispatch(newsSlice.actions.fetchNewsSuccess(response.data as TPost[]))
        dispatch(newsSlice.actions.fetchNewsTotalCount(+response.headers['x-total-count']))
    } catch (e: any) {
        return dispatch(newsSlice.actions.fetchNewsError(e.message))
    }
}
