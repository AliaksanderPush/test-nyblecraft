import React from "react";
import { formatDateTime } from "../../helpers/FormatDataTime";
import { Htag } from "../UI/Htag/Htag";
import { Button } from "../UI/buttons/Button";
import "./SingleNote.scss";

export const SingleNote = ({ data }) => {
  const { generalText, text } = data;
  const currTime = new Date();
  const dataNow = formatDateTime(currTime);

  return (
    <div className="note">
      <div>
        <Htag tag="h6">
          {dataNow} {generalText}
        </Htag>
      </div>
      <p>{text}</p>
      <Button type={"button"} appearance="primary">
        Изменить
      </Button>
      <Button type={"button"} appearance="ghost">
        Удалить
      </Button>
    </div>
  );
};
