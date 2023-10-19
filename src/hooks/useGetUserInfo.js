import Cookies from "js-cookie";

import { useEffect } from "react";
import { useState } from "react";

export const useGetUserInfo = () => {
  const { userId, name, email, profilePhoto, isAuth } = JSON.parse(
    Cookies.get("auth") || {}
  );
  return { userId, name, email, profilePhoto, isAuth };
};

// export const useGetUserInfo = () => {
//   const [isAuth, setIsAuth] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsAuth(true);
//       } else {
//         setIsAuth(false);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);
//   try {
//     const { userId, name, email, profilePhoto } = JSON.parse(
//       Cookies.get("auth") || "{}"
//     );
//     return { userId, name, email, profilePhoto, isAuth };
//   } catch (error) {
//     return {
//       userId: null,
//       name: null,
//       email: null,
//       profilePhoto: null,
//       isAuth: false,
//     };
//   }
//   // return { isAuth };
// };

// import { useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../config/firebase-config";

// export const useGetUserInfo = () => {
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is authenticated, update user information
//         const userData = {
//           userId: user.uid,
//           name: user.displayName,
//           email: user.email,
//           profilePhoto: user.photoURL,
//           verified: user.emailVerified,
//           isAuth: true,
//         };
//         setUserInfo(userData);
//       } else {
//         // User is not authenticated
//         setUserInfo({
//           userId: null,
//           name: null,
//           email: null,
//           profilePhoto: null,
//           verified: false,
//           isAuth: false,
//         });
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return { userInfo };
// };

// import { useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../config/firebase-config";

// export const useGetUserInfo = () => {
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is authenticated, update user information
//         const userData = {
//           userId: user.uid,
//           name: user.displayName,
//           email: user.email,
//           profilePhoto: user.photoURL,
//           verified: user.emailVerified,
//           isAuth: true,
//         };
//         setUserInfo(userData);
//       } else {
//         // User is not authenticated
//         setUserInfo(null);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return { userInfo };
// };
