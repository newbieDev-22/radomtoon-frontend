import { create } from "zustand";
import { createAuthSlice } from "./slice/authSlice";

export const useStore = create((...a) => ({
  ...createAuthSlice(...a),
}));
