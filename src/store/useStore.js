import { create } from "zustand";
import { authSlice } from "./slice/authSlice";
import { productSlice } from "./slice/productSlice";
import { devtools } from "zustand/middleware";
import { creatorProductSlice } from "./slice/creatorProductSlice";
import { creatorUserSlice } from "./slice/creatorUserSlice";
import { adminApprovalSlice } from "./slice/adminApprovalSlice";
import { commentSlice } from "./slice/commentSlice";

export const useStore = create(
  devtools((...a) => ({
    ...authSlice(...a),
    ...productSlice(...a),
    ...creatorProductSlice(...a),
    ...creatorUserSlice(...a),
    ...adminApprovalSlice(...a),
    ...commentSlice(...a)
  }))
);
