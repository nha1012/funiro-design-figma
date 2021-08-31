import { createSlice } from '@reduxjs/toolkit'

export interface Gallery {
  currentSlide: number
}

const initialState: Gallery = {
  currentSlide: 0,
}

export const Gallery = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    increment: (state) => {
      state.currentSlide += 1
    },
    decrement: (state) => {
      state.currentSlide -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = Gallery.actions

export default Gallery.reducer
