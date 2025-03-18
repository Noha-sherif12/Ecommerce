import { createSlice } from '@reduxjs/toolkit';

type TThemeSlice={
    mode: 'light' | 'dark';
}
const initialState:TThemeSlice = {
  mode: 'light'
};
 const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;