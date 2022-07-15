import { colors } from '@/assets/theme';
import { useEffect, useState } from 'react';
import { CheckBox, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { PFilterStatus } from '@/models/component/companies/talents/talents.interface';
import { TalentStatus } from '@/types/company/talent.type';

const SH3 = styled.h3`
	font-size: 14px;
	margin: 10px 0;
	font-weight: 600;
	color: ${colors.BLACK_3};
`;

const ApplicantStatus = ({ onChange, status, clear }: PFilterStatus) => {
	const [localStatus, setLocalStatus] = useState<TalentStatus[]>([]);

	useEffect(() => {
		setLocalStatus(status ?? []);
	}, [clear]);

	const handleBox = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked, value } = event.target;
		let tmp = [...localStatus];
		if (checked) tmp.push(value as 'ready' | 'open' | 'closed');
		else tmp = tmp.filter((elem) => elem !== value);
		setLocalStatus(tmp);
		if (onChange) onChange(tmp, 'status');
	};
	return (
		<div className="mt-15">
			<SH3>Status</SH3>
			<FlexBox align="start" flexDirection="column" style={{ rowGap: '10px' }}>
				<CheckBox value="ready" checked={localStatus?.some((elem) => elem === 'ready')} onChange={handleBox}>
					Ready To Interview
				</CheckBox>
				<CheckBox value="open" checked={localStatus?.some((elem) => elem === 'open')} onChange={handleBox}>
					Open To Offers
				</CheckBox>
				<CheckBox value="closed" checked={localStatus?.some((elem) => elem === 'closed')} onChange={handleBox}>
					Closed To Offers
				</CheckBox>
			</FlexBox>
		</div>
	);
};

export default ApplicantStatus;
