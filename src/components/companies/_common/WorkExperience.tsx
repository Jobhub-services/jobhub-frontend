import { useState } from 'react';
import { FlexBox, Tag } from 'staak-ui';
import { colors } from '@/assets/theme';
import { CalendarFillIcon, CompanyIcon, LocationIcon } from '@/assets/icons';
import styled from 'styled-components';
import { WorkExperienceProps } from '@/models/component/companies/applications/applications.interface';
import { CJobType } from '@/constants/company/application.constants';

const SSpan = styled.span<any>`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_9};
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
	margin-left: 5px;
	color: ${colors.PURPLE_BASE};
	text-decoration: underline !important;
`;
const STitle = styled.div`
	font-size: 14px;
	font-weight: 500;
	color: ${colors.BLACK_4};
`;
const WorkExperience = ({ title, jobType, company, location, dateRange, description, link, style, className }: WorkExperienceProps) => {
	const [descShowed, setDescShowed] = useState(false);
	return (
		<div className={className} style={{ ...style }}>
			<FlexBox justify="space-between">
				<STitle>{title}</STitle>
				<Tag size="12px" color={CJobType[jobType ?? 'Full time']}>
					{jobType}
				</Tag>
			</FlexBox>
			<FlexBox justify="space-between" className="mt-15">
				<FlexBox gap={50}>
					<FlexBox gap={5}>
						<FlexBox>
							<CompanyIcon width="17px" height="17px" color={colors.BLACK_9} />
						</FlexBox>
						<SSpan>{company}</SSpan>
					</FlexBox>
					<FlexBox gap={5}>
						<FlexBox>
							<LocationIcon width="17px" height="17px" color={colors.BLACK_9} />
						</FlexBox>
						<SSpan>{location}</SSpan>
					</FlexBox>
				</FlexBox>
				<FlexBox gap={10}>
					<CalendarFillIcon color={colors.BLACK_9} />
					<SSpan>{dateRange}</SSpan>
				</FlexBox>
			</FlexBox>
			{description && (
				<div className="mt-10">
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
			)}
		</div>
	);
};

export default WorkExperience;
