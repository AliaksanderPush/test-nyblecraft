import React, { useEffect } from "react";
import { Home } from "./pages/Home";
import { Layout } from "./layout/layout";
import { useDispatch } from "react-redux";
import { noutesLoad } from "./redux/acshions";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(noutesLoad());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
