import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axios from "axios";
import { TProduct } from "@types";
import { axiosErrorHandler } from "@utils";

type TRrespnose = TProduct[];

const actGetProductsByItems = createAsyncThunk("cart/actGetProductsByItems", async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState, signal} = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items)
    const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&")

    if(!itemsId.length){
        return fulfillWithValue([]);
    }

    try {
        const response = await axios.get<TRrespnose>(
            `/products?${concatenatedItemsId}`, { signal }
        );
        return response.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
});

export default actGetProductsByItems;