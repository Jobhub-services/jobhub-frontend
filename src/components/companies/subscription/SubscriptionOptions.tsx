import { FlexBox, Headline } from 'staak-ui';
import styled from 'styled-components';
import Standard from '@/components/companies/subscription/options/Standard';
import InfinityPro from '@/components/companies/subscription/options/InfinityPro';
import ForOne from '@/components/companies/subscription/options/ForOne';
import HeaderTab from '@/components/companies/subscription/HeaderTab';
import { useState } from 'react';
import { PayOptions } from '@/models/component/companies/subscription/subscription.interface';
const HEADER_STEP_HEIGHT = 45;
const StyledHeadline = styled(Headline)`
	margin: 0px;
`;
const HeaderContainer = styled(FlexBox)`
	padding: 5px 20px 5px 0;
	height: ${HEADER_STEP_HEIGHT}px;
`;
const SOptions = styled(FlexBox)`
	border-radius: 8px;
`;
const SubscriptionOptions = () => {
	const handleChange = (status: string) => {};
	const [status, setStatus] = useState(PayOptions.YEARLY);
	return (
		<div className="mt-20">
			<HeaderContainer justify="start">
				<StyledHeadline variant="h2" size="sm">
					Upgrade Subscription Options
				</StyledHeadline>
			</HeaderContainer>
			<FlexBox gap={20} justify="start" className="mt-10">
				<HeaderTab onClick={handleChange} title="Pay Yearly (20% off)" active={status === PayOptions.YEARLY} status={PayOptions.YEARLY} />
				<HeaderTab onClick={handleChange} title="Pay Monthly" active={status === PayOptions.MONTHLY} status={PayOptions.MONTHLY} />
			</FlexBox>
			<SOptions gap={20} align="start" className="mt-15">
				<ForOne />
				<Standard />
				<InfinityPro />
			</SOptions>
		</div>
	);
};

export default SubscriptionOptions;
