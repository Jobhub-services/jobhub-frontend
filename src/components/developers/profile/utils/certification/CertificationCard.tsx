import { CertificationProps } from '@/models/component/developer/profile.interface';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { CalendarIcon, CertificateIcon } from '@/assets/icons';
import { useState } from 'react';
const dateOptions: any = { month: 'short', year: 'numeric' };

const STitle = styled.div`
	font-size: 15px;
	font-weight: 500;
	color: ${colors.BLACK_4};
`;
const SSpan = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const SubTitle = styled.span`
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
	height: ${(props) => (props.showed ? '100px' : '0')};
	overflow: hidden;
`;
const SLink = styled.a`
	font-size: 12px;
	margin-left: 5px;
	color: ${colors.PURPLE_BASE};
	text-decoration: underline !important;
`;
const CertificationCard = ({ title, provider, issuedDate, expirationDate, description, link, certificationId }: CertificationProps) => {
	const [descShowed, setDescShowed] = useState(false);
	return (
		<div className="mt-10">
			<STitle>{title}</STitle>
			<FlexBox justify="start" className="mt-5" gap={10}>
				<CertificateIcon color={colors.BLACK_8} />
				<div>
					<SubTitle>Provider </SubTitle>
					<SSpan>{provider}</SSpan>
				</div>
			</FlexBox>
			<FlexBox gap={10} justify="start" className="mt-10">
				<CalendarIcon width="17px" height="17px" color={colors.BLACK_8} />
				<SSpan>{issuedDate?.toLocaleDateString('en-US', dateOptions)} - </SSpan>
				<SSpan>{expirationDate?.toLocaleDateString('en-US', dateOptions)}</SSpan>
			</FlexBox>
			{certificationId !== '' && (
				<div className="mt-10">
					<SubTitle>Certification ID </SubTitle>
					<SSpan>{certificationId}</SSpan>
				</div>
			)}
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
