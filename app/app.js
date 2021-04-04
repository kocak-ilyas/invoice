import ReactDOM from 'react-dom';
import React from 'react';
import InvoiceForm from './InvoiceForm.js';
import Chart from './Chart.js';

function App() {
	return (
		<div
			className="container mt-3 p-3"
			style={{
				width: '100%',
				height: '550px',
				backgroundImage:
					'url(https://image.shutterstock.com/z/stock-vector-abstract-lines-and-dots-connect-background-technology-connection-digital-data-and-big-data-concept-1492332182.jpg)'
			}}
		>
			<InvoiceForm />
			<Chart />
		</div>
	);
}
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept();
}
