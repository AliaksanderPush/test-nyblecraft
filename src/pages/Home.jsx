import React from "react";
import { Form } from "../components";
import { Notes } from "../components";
import { Htag } from "../components";
import { P } from "../components";
import { Button } from "../components";
import { useDispatch } from "react-redux";
import { noutesLoad } from "../redux/acshions";
import "./Home.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const handleGetNoutes = () => {
    dispatch(noutesLoad());
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6 ">
          <Htag tag="h1">Редактор заметок</Htag>
          <Notes />
          <P size="m">Запись успешно сохранена!</P>
          <Form />
        </div>
      </div>
      <Button type={"button"} appearance="primary" onClick={handleGetNoutes}>
        Получить все заметки
      </Button>
    </div>
  );
};
