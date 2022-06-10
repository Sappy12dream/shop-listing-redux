import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopList: [],
  area: "All",
  category: "All",
  status: "All",
};
const ShopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addShop: (state, action) => {
      const { id, name, category, area, openingDate, closingDate } =
        action.payload;
      let existsShop = state.shopList.find((shop) => shop.id === id);
      if (existsShop) {
        existsShop.name = name;
        existsShop.category = category;
        existsShop.area = area;
        existsShop.openingDate = openingDate;
        existsShop.closingDate = closingDate;
      } else {
        state.shopList.push(action.payload);
      }
    },
    deleteShop: (state, action) => {
      const { id } = action.payload;
      let existsShop = state.shopList.find((shop) => shop.id === id);
      if (existsShop) {
        return state.shopList.filter((shop) => shop.id !== id);
      }
    },
    setArea: (state, action) => {
      state.area = action.payload;
    },
    setCate: (state, action) => {
      state.category = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { addShop, deleteShop, setArea, setCate, setStatus } =
  ShopSlice.actions;
export const selectAllShop = (state) => state.shop.shopList;
export const area = (state) => state.shop.area;
export const category = (state) => state.shop.category;
export const status = (state) => state.shop.status;
export default ShopSlice.reducer;
