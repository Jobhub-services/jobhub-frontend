import React, { useEffect } from 'react';
import { FlexBox, Button } from 'staak-ui';
import { metadataActions } from '@/modules/actions/metadata.actions';
import HireLocation from '@/components/companies/jobs/newjob/details/HireLocation';
import Compensation from '@/components/companies/jobs/newjob/details/Compensation';
import WorkLocation from '@/components/companies/jobs/newjob/details/WorkLocation';
import { HeaderContainer, StyledHeadline, StepContent } from '@/components/companies/jobs/newjob/newjob.styles';

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
		<>
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="md">
					Detailed Informations
				</StyledHeadline>
				<FlexBox gap={10} align="flex-start" justify="flex-start">
					<Button variant="outlined" onClick={handlePrevious}>
						Back
					</Button>
					<Button onClick={handleNext}>Save & Continue</Button>
				</FlexBox>
			</HeaderContainer>
			<StepContent className="staak_scrollbar">
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
			</StepContent>
		</>
	);
};

export default DetailedInfo;
