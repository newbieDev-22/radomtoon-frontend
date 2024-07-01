import { AxiosError } from "axios";
import authApi from "../../apis/auth";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../../utils/localStorage";
import { USER_ROLE } from "../../constants";

export const authSlice = (set) => ({
  authUser: { user: null, loading: false, error: null, role: USER_ROLE.GUEST },
  login: async (credentials) => {
    try {
      const loginResponse = await authApi.login(credentials);
      setAccessToken(loginResponse.data.accessToken);
      const getAuthUserResponse = await authApi.getAuthUser();
      set((state) => ({
        authUser: {
          ...state.authUser,
          user: getAuthUserResponse.data.user,
          error: null,
          role: getAuthUserResponse.data.user.role,
        },
      }));
      return true;
    } catch (err) {
      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? "Invalid email or password"
            : "Internet Server Error";
        return message;
      }
    }
  },
  fetchUser: async () => {
    try {
      set((state) => ({ ...state.authUser, loading: true }));
      if (getAccessToken()) {
        const getAuthUserResponse = await authApi.getAuthUser();
        set((state) => ({
          authUser: {
            ...state.authUser,
            user: getAuthUserResponse.data.user,
            error: null,
            role: getAuthUserResponse.data.user.role,
          },
        }));
      }
    } catch (err) {
      console.log(err);
    } finally {
      set((state) => ({ authUser: { ...state.authUser, loading: false } }));
    }
  },
  logout: () => {
    removeAccessToken();
    set(() => ({
      authUser: { user: null, loading: false, error: null, role: USER_ROLE.GUEST },
    }));
  },
});
