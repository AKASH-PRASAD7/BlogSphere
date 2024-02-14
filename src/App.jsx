import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/features/auth";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(loading);
  console.log(error);

  useEffect(() => {
    authService
      .getCurrrntUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <main>
        {loading ? (
          <div>loading...</div>
        ) : error ? (
          <span>{error.message}</span>
        ) : (
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        )}
      </main>
    </>
  );
}

export default App;
