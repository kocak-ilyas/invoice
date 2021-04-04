import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Chart from './Chart.js';

function App() {
	const [ open, setOpen ] = useState(false);
	const openToggle = () => setOpen(!open);

	const [ isSend, setIsSend ] = useState(false);
	const sendToggle = () => {
		setIsSend(!isSend);
	};

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
			<Button color="primary" onClick={openToggle} className="sticky-md-top">
				Set New Invoice
			</Button>
			<Modal isOpen={open} >
				<ModalBody>Fatura body</ModalBody>
				<ModalFooter>
					<Button
						color="primary"
						onClick={() => {
							sendToggle();
							openToggle();
						}}
					>
						Send Invoice with E-mail
					</Button>
					<Button color="danger" onClick={openToggle}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
			<Modal isOpen={isSend}>
				<ModalBody>Invoice sended</ModalBody>
				<Button color="info" onClick={sendToggle}>
					Close
				</Button>
			</Modal>
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
