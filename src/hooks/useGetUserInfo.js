import Cookies from "js-cookie";

export const useGetUserInfo = () => {
  const { userId, name, email, profilePhoto, isAuth } = JSON.parse(
    Cookies.get("auth") || {}
  );
  return { userId, name, email, profilePhoto, isAuth };
};
