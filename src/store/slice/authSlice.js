import { AxiosError } from "axios";
import authApi from "../../apis/auth";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../../utils/localStorage";
import { USER_ROLE } from "../../constants";

export const authSlice = (set, get) => ({
  authUser: { user: null, loading: false, error: null, role: USER_ROLE.GUEST },

  // Function to handle user login
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
      } else {
        console.error(err);
        return "An unexpected error occurred";
      }
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
      const { role } = get().authUser;
      let getAuthUserResponse;

      if (role === USER_ROLE.CREATOR) {
        getAuthUserResponse = await authApi.creatorProfileImage(formData);
        console.log("getAuthUserResponse.data.user", getAuthUserResponse.data.user);
      } else if (role === USER_ROLE.SUPPORTER) {
        getAuthUserResponse = await authApi.supporterProfileImage(formData);
      } else {
        throw new Error("Unsupported user role");
      }

      set((state) => ({
        authUser: {
          ...state.authUser,
          user: getAuthUserResponse.data.user,
        },
      }));
      return true;
    } catch (err) {
      console.error(err);
      set((state) => ({
        authUser: { ...state.authUser, error: "Failed to update profile image" },
      }));
      return false;
    }
  },
});
