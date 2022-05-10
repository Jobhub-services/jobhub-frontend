import React, { useEffect } from 'react';
import { FlexBox, Button } from 'staak-ui';
import { metadataActions } from '@/modules/actions/metadata.actions';
import HireLocation from './HireLocation';
import Compensation from './Compensation';
import WorkLocation from './WorkLocation';

const DetailedInfo = (props: any) => {
	useEffect(() => {
		metadataActions.getCurrency();
		metadataActions.getCountries();
	}, []);
	function handleNext(event: React.SyntheticEvent) {
		if (props.onNext) props.onNext(event);
	}
	function handlePrevious(event: React.SyntheticEvent) {
		if (props.onPreviouse) props.onPreviouse(event);
	}
	return (
		<div>
			<FlexBox align="flex-start" justify="flex-start">
				<Compensation />
				<div style={{ padding: '0 0 0 15px', width: '50%' }}>
					<div>
						<h3>Job Location</h3>
						<WorkLocation />
						<HireLocation />
					</div>
				</div>
			</FlexBox>
			<FlexBox gap={15} className="mt-10" align="flex-start" justify="flex-start">
				<Button variant="outlined" onClick={handlePrevious}>
					Back
				</Button>
				<Button onClick={handleNext}>Save & Continue</Button>
			</FlexBox>
		</div>
	);
};

export default DetailedInfo;
