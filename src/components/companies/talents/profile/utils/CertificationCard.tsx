import { CertificationProps } from '@/models/component/companies/talents/talents.interface';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { CalendarFillIcon, CertificateIcon } from '@/assets/icons';
import { useState } from 'react';

const STitle = styled.div`
	font-weight: 500;
	color: ${colors.BLACK_4};
`;
const SSpan = styled.span`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const SubTitle = styled.span`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_5};
`;
const DescTitle = styled.span`
	font-size: 13px;
	color: ${colors.PURPLE_BASE};
	cursor: pointer;
`;
const Description = styled.p<any>`
	margin: 5px 0;
	height: ${(props) => (props.showed ? '100%' : '0')};
	overflow: hidden;
`;
const SLink = styled.a`
	margin-left: 5px;
	color: ${colors.PURPLE_BASE};
	text-decoration: underline !important;
`;
const CertificationCard = ({ title, provider, issuedDate, expirationDate, description, link, certificationId }: CertificationProps) => {
	const [descShowed, setDescShowed] = useState(false);
	return (
		<div>
			<STitle>{title}</STitle>
			<FlexBox justify="space-between" className="mt-10">
				<div>
					<FlexBox justify="start" gap={5}>
						<CertificateIcon color={colors.BLACK_8} />
						<FlexBox justify="start" gap={10}>
							<SubTitle>Provider </SubTitle>
							<SSpan>{provider}</SSpan>
						</FlexBox>
					</FlexBox>
					<FlexBox justify="start" gap={10} className="mt-10">
						<SubTitle>Certification ID </SubTitle>
						<SSpan>{certificationId ?? 'N/A'}</SSpan>
					</FlexBox>
				</div>
				<FlexBox gap={10}>
					<CalendarFillIcon color={colors.BLACK_9} />
					<SSpan>
						{issuedDate} - {expirationDate}
					</SSpan>
				</FlexBox>
			</FlexBox>
			<div className="mt-5">
				<DescTitle
					onClick={() => {
						setDescShowed(!descShowed);
					}}
				>
					{descShowed ? 'Hide' : 'Show'} description
				</DescTitle>
				<Description showed={descShowed}>
					{description}{' '}
					<SLink target="_blank" href={link}>
						Learn more
					</SLink>
				</Description>
			</div>
		</div>
	);
};

export default CertificationCard;
