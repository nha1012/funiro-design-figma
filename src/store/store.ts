import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from './features/Gallery'
export const store = configureStore({
  reducer: {
    gallery: galleryReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
