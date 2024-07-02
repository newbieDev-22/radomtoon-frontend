import { create } from "zustand";
import { authSlice } from "./slice/authSlice";
import { productSlice } from "./slice/productSlice";
import { devtools } from "zustand/middleware";
import { creatorProductSlice } from "./slice/creatorProductSlice";
import { creatorUserSlice } from "./slice/creatorUserSlice";

export const useStore = create(
  devtools((...a) => ({
    ...authSlice(...a),
    ...productSlice(...a),
    ...creatorProductSlice(...a),
    ...creatorUserSlice(...a),
  }))
);
