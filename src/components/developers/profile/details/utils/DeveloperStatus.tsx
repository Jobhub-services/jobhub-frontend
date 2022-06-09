import { Radio } from 'staak-ui';

const DeveloperStatus = () => {
	const handleInput = () => {};
	return (
		<div>
			<Radio name="duration" value="ready" checked={data.duration === 'Temporary'} onChange={handleInput}>
				Ready to interview
			</Radio>
			<Radio name="duration" value="open" checked={data.duration === 'Temporary'} onChange={handleInput}>
				Open to offers
			</Radio>
			<Radio name="duration" value="closed" checked={data.duration === 'Temporary'} onChange={handleInput}>
				Closed to offers
			</Radio>
		</div>
	);
};

export default DeveloperStatus;
