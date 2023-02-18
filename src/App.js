import React, { useEffect } from "react";
import { AppRoutes } from "./routes";
import "./App.css";
import { useGetCurrentUserQuery, useRefreshTokenMutation } from "./store/services";
import getCookie from "./store/getCookie";
import { useDispatch } from "react-redux";
import { setToken, setLogout } from "./store/slices/auth";

function App() {
  const {refetch} = useGetCurrentUserQuery({ enabled: false });
  const [refreshToken, {data, isSuccess, isError}] = useRefreshTokenMutation();
  const refresh_token = getCookie('tokenRefresh');
  const access_token = getCookie('tokenAccess');
  const dispatch = useDispatch();
  useEffect(() => {
    if(refresh_token) {
    refreshToken({refresh_token, access_token});
  }
}, [])

  useEffect(() => {
    if(isSuccess) {
      dispatch(setToken(data?.access_token));
      document.cookie = `tokenAccess=${data?.access_token}`;
      document.cookie = `tokenRefresh=${data?.refresh_token}`;
      refetch();
    }
    if(isError) {
      dispatch(setLogout());
      document.cookie = `tokenAccess=''`;
      document.cookie = `tokenRefresh=''`;
    }
  }, [data, isSuccess, isError])



  return(<AppRoutes />);

}

export default App;


