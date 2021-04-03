import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import "./styles/styles.css"
// import "bootstrap/dist/css/bootstrap.min.css";
// import "alertifyjs/build/css/alertify.min.css";
import App from './App.js';
// import configureStore from "./redux/reducers/configureStore";
// const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		{/* <BrowserRouter>
      <Provider store={store}> */}
		<App />
		{/* </Provider>
    </BrowserRouter> */}
	</React.StrictMode>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept();
}
