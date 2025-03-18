import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ILanguageState {
  language: string;
}


const initialState: ILanguageState = {
  language: localStorage.getItem("language") || "en", 
};


const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload); 
    },
  },
});


export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;