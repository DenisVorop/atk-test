import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TPost } from '../../types/types'

interface NewsState {
    news: TPost[] | null
    isLoading: boolean
    error: string
    totalCount: number
}

const initialState: NewsState = {
    news: null,
    isLoading: false,
    error: '',
    totalCount: 0,
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        fetchNews(state) {
            state.isLoading = true
        },
        fetchNewsSuccess(state, action: PayloadAction<TPost[]>) {
            state.isLoading = false
            state.error = ''
            state.news = action.payload
        },
        fetchNewsError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        fetchNewsTotalCount(state, action: PayloadAction<number>) {
            state.totalCount = action.payload
        },
    },
})

export default newsSlice.reducer
