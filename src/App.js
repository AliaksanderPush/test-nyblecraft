import React, { useEffect,  } from "react";
import { Home } from "./pages/Home";
import { Layout } from "./layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { noutesLoad,errorOn,errOff } from "./redux/acshions";
import { urlNotes, urlTags } from "./helpers/url";
import {errors} from './redux/selectors';
import {Error} from './components/error/ErrorBandle';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const err= useSelector(errors);
  
  useEffect(() => {
  // dispatch(noutesLoad(urlNotes));
   // dispatch(noutesLoad(urlTags));
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
