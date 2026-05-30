import { createSlice } from '@reduxjs/toolkit'

export type Theme = 'light' | 'dark'

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'light' as Theme },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
