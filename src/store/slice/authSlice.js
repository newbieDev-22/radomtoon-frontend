import { AxiosError } from "axios";
import authApi from "../../apis/auth";
import { getAccessToken, setAccessToken } from "../../utils/localStorage";
import { toast } from "react-toastify";

export const createAuthSlice = (set) => ({
  authUser: { user: null, loading: false, error: null },
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
