import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter } from 'reactstrap';

const InvoiceForm = () => {
	const [ open, setOpen ] = useState(false);
	const openToggle = () => setOpen(!open);

	const [ isSend, setIsSend ] = useState(false);
	const sendToggle = () => {
		setIsSend(!isSend);
	};
	return (
		<div>
			<Button color="primary" onClick={openToggle} className="sticky-md-top">
				Set New Invoice
			</Button>{' '}
			<Form>
				<Modal isOpen={open}>
					<ModalBody>
						<FormGroup>
							<Label for="hours">Hours of work </Label>
							<Input type="number" name="hours" id="hours" placeholder="Hours a week" />
						</FormGroup>
						<br />
						<FormGroup>
							<Label for="expenses">Work-related expenses</Label>
							<Input type="number" name="expenses" id="expenses" placeholder="$" />
						</FormGroup>{' '}
						<br />
						<FormGroup>
							<Label for="materials">Materials</Label>
							<Input type="text" name="materials" id="materials" placeholder="Paper, pencil ect." />
						</FormGroup>{' '}
						<br />
						<FormGroup>
							<Label for="labor">labor</Label>
							<Input type="number" name="labor" id="labor" placeholder="$" />
						</FormGroup>{' '}
						<br />
						<FormGroup>
							<Label for="descriptions">Descriptions</Label>
							<Input type="text" name="descriptions" id="descriptions" placeholder="..." />
						</FormGroup>{' '}
						<br />
						<FormGroup check>
							<Label check>
								<Input type="checkbox" /> All information is correct.
							</Label>
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button
							color="primary"
							onClick={() => {
								sendToggle();
								openToggle();
							}}
						>
							Submit and Send Invoice with E-mail
						</Button>
						<Button color="danger" onClick={openToggle}>
							Close
						</Button>
					</ModalFooter>
				</Modal>
			</Form>
			<Modal isOpen={isSend}>
				<ModalBody>Invoice sended</ModalBody>
				<Button color="info" onClick={sendToggle}>
					Close
				</Button>
			</Modal>
		</div>
	);
};

export default InvoiceForm;
