import { AxiosError } from "axios";
import authApi from "../../apis/auth";
import { getAccessToken, setAccessToken } from "../../utils/localStorage";
import { toast } from "react-toastify";

export const createAuthSlice = (set) => ({
  authUser: { user: null, loading: false, error: null },
  supporterRegister: async (registerData, onSuccess, setInputError) => {
    try {
      await authApi.supporterRegister(registerData);
      onSuccess();
      toast.success("Registered successfully, please log in to continue", {
        position: "bottom-right",
        autoClose: 2000,
      });
    } catch (err) {
      console.dir(err);
      if (err instanceof AxiosError) {
        if (err.response.data.field === "email") {
          setInputError((prev) => ({
            ...prev,
            email: "Email is already in use",
          }));
        }
        if (err.response.data.field === "phone") {
          setInputError((prev) => ({
            ...prev,
            phone: "Phone number is already in use",
          }));
        }
      }
    }
  },
  creatorRegister: {},
  login: async (credentials) => {
    try {
      const loginResponse = await authApi.login(credentials);
      setAccessToken(loginResponse.data.accessToken);
      const getAuthUserResponse = await authApi.getAuthUser();
      set((state) => ({
        ...state.authUser,
        user: getAuthUserResponse.data.user,
        error: null,
      }));
      toast.success("Login success");
    } catch (err) {
      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? "Invalid email or password"
            : "Internet Server Error";
        return toast.error(message);
      }
    }
  },
  fetchUser: async () => {
    try {
      set((state) => ({ ...state.authUser, loading: true }));
      if (getAccessToken()) {
        const getAuthUserResponse = await authApi.getAuthUser();
        set((state) => ({
          ...state.authUser,
          user: getAuthUserResponse.data.user,
          error: null,
        }));
      }
    } catch (err) {
      console.log(err);
    } finally {
      set((state) => ({ ...state.authUser, loading: false, error: null }));
    }
  },
});
