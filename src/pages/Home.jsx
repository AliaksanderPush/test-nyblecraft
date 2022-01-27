import React from "react";
import { Form } from "../components";
import { Notes } from "../components";
import { Htag } from "../components";
import { P } from "../components";
import { useSelector } from "react-redux";
import { SingleTag } from "../components";
import { getTags } from "../redux/selectors";
import "./Home.scss";

export const Home = () => {
  const tag = useSelector(getTags);
  

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-6 ">
          <Htag tag="h1">Редактор заметок</Htag>
          <Notes />
          <Form />
          <div className="row">
            <div className="col-12">
            {!!tag &&
              tag.map((item, index) => {
                return <SingleTag key={index + item.id} data={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
