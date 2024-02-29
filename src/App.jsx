import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/features/auth";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <main>
        {loading ? (
          <div>loading...</div>
        ) : (
          <main className="bg-gray-600 text-white min-h-screen ">
            {/* {error ? (
              <p className="text-xl font-semibold m-4 text-center text-red-700">
                {error}
              </p>
            ) : ( */}
            <>
              <Header />
              <section>
                <Outlet />
              </section>
              <Footer />
            </>
            {/* )} */}
          </main>
        )}
      </main>
    </>
  );
}

export default App;
