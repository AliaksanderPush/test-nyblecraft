import React  from "react";
import {Form} from '../components';
import {Note} from '../components';
import './Home.scss';


export const  Home = () => {
   return (
   <div id="wrapper">
       <h1>Редактор заметок</h1>
	    <Note/>
		<div className="info alert alert-info">
          Запись успешно сохранена!
        </div>
        <Form/>
   </div>
   );
}
