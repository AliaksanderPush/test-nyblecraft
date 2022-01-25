import React  from "react";
import './Footer.scss';

export const Footer = () => {
	const data = new Date().getFullYear();
	return (
	<>
		<footer className="bg-light text-center text-lg-start footer">
		  <div className="text-center p-3" >
				© {data} Copyright:
			 <a className="text-dark" href="https://github.com/AliaksanderPush?tab=repositories"> My Repo</a>
		  </div>
		</footer>
	</>
	);
}