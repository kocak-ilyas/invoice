import React from 'react';
import { Progress } from 'reactstrap';

const Chart = () => {
	const percentage = {
		overdue: 12,
		paidSoon: 33,
		nextTime: 15,
		paid: 40
	};
	return (
		<div>
			<hr />
			<div style={{ width: '20%' }} className="text-center badge bg-danger text-wrap shadow-sm p-1 mb-1 rounded">
				Overdue invoice
			</div>
			<Progress animated color="danger" value={percentage.overdue}>
				%{percentage.overdue}
			</Progress>
			<br />
			<div style={{ width: '20%' }} className="text-center badge bg-warning text-wrap shadow-sm p-1 mb-1 rounded">
				Invoice to be paid soon
			</div>
			<Progress animated color="warning" value={percentage.paidSoon}>
				%{percentage.paidSoon}
			</Progress>
			<br />
			<div style={{ width: '20%' }} className="text-center badge bg-info text-wrap shadow-sm p-1 mb-1 rounded">
				invoice to be paid next time
			</div>
			<Progress animated color="info" value={percentage.nextTime}>
				%{percentage.nextTime}
			</Progress>
			<br />
			<div style={{ width: '20%' }} className="text-center badge bg-success text-wrap shadow-sm p-1 mb-1 rounded">
				Paid invoice
			</div>
			<Progress animated color="success" value={percentage.paid}>
				%{percentage.paid}
			</Progress>
		</div>
	);
};

export default Chart;
