import { createSlice } from "@reduxjs/toolkit";
import actGetHome from "./act/actGetHome";
import actGetHomeItems from "./act/actGetHomeItems"; 

type THomeItem = {
  id: number;
  img: string;
  title?: string;
  price?: string;
};

type HomeState = {
  homeData: THomeItem[];
  homeItemsData: THomeItem[]; 
  loading: boolean;
  error: string | null;
};

const initialState: HomeState = {
  homeData: [],
  homeItemsData: [], 
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(actGetHome.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(actGetHome.fulfilled, (state, action) => {
        state.loading = false;
        state.homeData = action.payload;
      })
      .addCase(actGetHome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      
      .addCase(actGetHomeItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(actGetHomeItems.fulfilled, (state, action) => {
        state.loading = false;
        state.homeItemsData = action.payload; 
      })
      .addCase(actGetHomeItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default homeSlice.reducer;
export { actGetHome, actGetHomeItems };