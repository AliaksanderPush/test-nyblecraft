import React, { useEffect } from "react";
import { Home } from "./pages/Home";
import { Layout } from "./layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { noutesLoad } from "./redux/acshions";
import { errors } from "./redux/selectors";
import { Error } from "./components/error/ErrorBandle";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const err = useSelector(errors);

  useEffect(() => {
    dispatch(noutesLoad());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Home />
        {err ? <Error /> : null}
      </Layout>
    </>
  );
}

export default App;
