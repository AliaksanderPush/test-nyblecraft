import React from "react";
import { Form } from "../components";
import { Notes } from "../components";
import { Htag } from "../components";
import { P } from "../components";
import { Button } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { noutesLoad } from "../redux/acshions";
import { SingleTag } from "../components";
import { getTags } from "../redux/selectors";
import "./Home.scss";

export const Home = () => {
  const tag = useSelector(getTags);
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
          <div>
            {!!tag &&
              tag.map((item, index) => {
                return <SingleTag key={index + item.id} data={item} />;
              })}
          </div>
        </div>
      </div>
      <Button type={"button"} appearance="ghost" onClick={handleGetNoutes}>
        Получить все заметки
      </Button>
    </div>
  );
};
