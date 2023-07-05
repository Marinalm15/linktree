import { useClerk, useSession } from "@clerk/clerk-react";
import { apiPrivate } from "../api/axios";

export const useApiPrivate = () => {
  const { session } = useSession();
  const { signOut } = useClerk();

  apiPrivate.interceptors.request.use(
    async (config) => {
      if (!config.headers.Authorization) {
        /// Verifica se existe sessão
        if (session) {
          const token = await session.getToken();
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          signOut();
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  apiPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
      return Promise.reject(error);
    }
  );

  return apiPrivate;
};
