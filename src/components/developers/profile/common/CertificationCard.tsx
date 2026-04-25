import { CertificationProps } from '@/models/component/developer/profile.interface';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { CalendarIcon, CertificateIcon, CertificationColorIcon } from '@/assets/icons';
import { SIcon } from '@/components/developers/profile/common';
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
	display: -webkit-box;
	margin: 5px 0;
	font-family: inherit;
	-webkit-line-clamp: ${(props) => (props.showed ? 'none' : 1)};
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SLink = styled.a`
	font-size: 12px;
	margin-left: 5px;
	color: ${colors.PURPLE_BASE};
	text-decoration: underline !important;
`;

const CertificationCard = ({ title, provider, issuedDate, expirationDate, description, link, certificationId, width }: CertificationProps) => {
	const [descShowed, setDescShowed] = useState(false);
	return (
		<FlexBox justify="start" align="start" gap={20} width={width}>
			<SIcon>
				<CertificationColorIcon />
			</SIcon>
			<div>
				<STitle>{title}</STitle>
				<FlexBox justify="start" className="mt-5" gap={5}>
					<CertificateIcon color={colors.BLACK_8} />
					<FlexBox gap={15}>
						<SubTitle>Provider </SubTitle>
						<SSpan>{provider}</SSpan>
					</FlexBox>
				</FlexBox>
				<FlexBox gap={5} justify="start" className="mt-10">
					<CalendarIcon width="17px" height="17px" color={colors.BLACK_8} />
					<SSpan>{issuedDate && new Date(issuedDate)?.toLocaleDateString('en-US', dateOptions)} - </SSpan>
					<SSpan>{expirationDate ? new Date(expirationDate).toLocaleDateString('en-US', dateOptions) : 'N/A'}</SSpan>
				</FlexBox>
				{certificationId !== '' && (
					<FlexBox justify="start" gap={15} className="mt-10">
						<SubTitle>Certification ID </SubTitle>
						<SSpan>{certificationId}</SSpan>
					</FlexBox>
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
		</FlexBox>
	);
};
CertificationCard.defaultProps = {
	width: '100%',
};
export default CertificationCard;
