import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "@utils";
import { THomeItem } from "@types"
import axios from "axios";



type TResponse = THomeItem[];

const actGetHome = createAsyncThunk(
  "home/actGetHome",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>("/Home", { signal });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetHome;
