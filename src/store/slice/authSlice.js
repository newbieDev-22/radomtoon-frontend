import { AxiosError } from "axios";
import authApi from "../../apis/auth";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../../utils/localStorage";
import { USER_ROLE } from "../../constants";
import creatorApi from "../../apis/creator";

export const authSlice = (set, get) => ({
  authUser: { user: null, loading: false, error: null, role: USER_ROLE.GUEST },
  // Function to handle user login
  login: async (credentials) => {
    try {
      set((state) => ({ authUser: { ...state.authUser, loading: true } }));

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
      console.error(err);
      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? "Invalid email or password"
            : "Internet Server Error";
        return message;
      } else {
        console.error(err);
        return "An unexpected error occurred";
      }
    } finally {
      set((state) => ({ authUser: { ...state.authUser, loading: false } }));
    }
  },

  // Function to fetch the authenticated user
  fetchUser: async () => {
    try {
      set((state) => ({ authUser: { ...state.authUser, loading: true } }));

      const accessToken = getAccessToken();
      if (accessToken) {
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
      console.error(err);
      set((state) => ({
        authUser: { ...state.authUser, error: "Failed to fetch user data" },
      }));
    } finally {
      set((state) => ({ authUser: { ...state.authUser, loading: false } }));
    }
  },

  // Function to handle user logout
  logout: () => {
    removeAccessToken();
    set(() => ({
      authUser: { user: null, loading: false, error: null, role: USER_ROLE.GUEST },
    }));
  },

  // Function to update profile image based on user role
  updateProfileImage: async (formData) => {
    try {
      set((state) => ({ authUser: { ...state.authUser, loading: true } }));
      const { role } = get().authUser;

      let result;
      if (role === USER_ROLE.CREATOR) {
        const getAuthUserResponse = await authApi.creatorProfileImage(formData);
        result = getAuthUserResponse.data.user;
      } else if (role === USER_ROLE.SUPPORTER) {
        const getAuthUserResponse = await authApi.supporterProfileImage(formData);
        result = getAuthUserResponse.data.user;
      } else {
        throw new Error("Unsupported user role");
      }

      set((state) => ({
        authUser: {
          ...state.authUser,
          user: result,
        },
      }));
      return true;
    } catch (err) {
      console.error(err);
      set((state) => ({
        authUser: { ...state.authUser, error: "Failed to update profile image" },
      }));
      return false;
    } finally {
      set((state) => ({ authUser: { ...state.authUser, loading: false } }));
    }
  },

  updateInfo: async (data) => {
    try {
      set((state) => ({ authUser: { ...state.authUser, loading: true } }));

      const getResponse = await creatorApi.updateInfoCreator(data);

      set((state) => ({
        authUser: {
          ...state.authUser,
          user: getResponse.data.creatorInfo,
        },
      }));
    } catch (err) {
      console.error(err);
      set((state) => ({
        authUser: { ...state.authUser, error: "Failed to update info" },
      }));
    } finally {
      set((state) => ({ authUser: { ...state.authUser, loading: false } }));
    }
  },
});
