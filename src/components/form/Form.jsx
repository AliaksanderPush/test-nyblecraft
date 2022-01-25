import React from 'react';
import './Form.scss';

export const Form = () => {
	return (
 	  <div id="form">
          <form action="#form" method="POST">
            <p><input className="form-control" placeholder="Ваше имя"/></p>
            <p><textarea className="form-control" placeholder="Ваша заметка"></textarea></p>
            <p><input type="submit" className="btn btn-info btn-block" value="Сохранить"/></p>
          </form>
	  </div>
	);
}