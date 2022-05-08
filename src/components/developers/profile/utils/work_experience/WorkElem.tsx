import { CalendarIcon, CompanyIcon, LocationIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { JobTypeColor } from '@/constants/public/job.constants';
import { WorkExperienceProps } from '@/models/component/developer';
import { useState } from 'react';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const dateOptions: any = { month: 'short', year: 'numeric' };

const SSpan = styled.span<any>`
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const DescTitle = styled.span`
	font-weight: 600;
	color: ${colors.PURPLE_BASE};
	cursor: pointer;
`;
const Description = styled.pre<any>`
	font-family: inherit;
	margin: 5px 0;
	max-height: ${(props) => (props.showed ? 'fit-content' : '45px')};
	overflow: hidden;
	text-align: justify;
`;
const STitle = styled.div`
	font-size: 16px;
	font-weight: 500;
	color: ${colors.BLACK_4};
`;
const SJobT = styled.span<WorkExperienceProps>`
	font-weight: 600;
	color: ${(props) => JobTypeColor[props.job_type!]};
`;
const WorkElem = (props: WorkExperienceProps) => {
	const [showDesc, setShowDesc] = useState(false);
	return (
		<div>
			<FlexBox justify="space-between">
				<FlexBox justify="start" gap={10}>
					<STitle>{props.title}</STitle>
					<SJobT job_type={props.job_type}>{props.job_type}</SJobT>
				</FlexBox>
			</FlexBox>
			<FlexBox justify="space-between">
				<div>
					<FlexBox gap={10} justify="start">
						<CalendarIcon width="15px" height="15px" color={colors.BLACK_9} />
						<FlexBox>
							<SSpan>{props.startDate?.toLocaleDateString('en-US', dateOptions)} - </SSpan>
							<SSpan> {props.endDate?.toLocaleDateString('en-US', dateOptions)}</SSpan>
						</FlexBox>
					</FlexBox>
					<FlexBox gap={30} justify="start" className="mt-5">
						<FlexBox gap={5} justify="start">
							<CompanyIcon width="18px" height="18px" color={colors.BLACK_9} />
							<SSpan>{props.company_name}</SSpan>
						</FlexBox>
						<FlexBox gap={5} justify="start">
							<LocationIcon width="18px" height="18px" color={colors.BLACK_9} />
							<SSpan>{props.location?.label}</SSpan>
						</FlexBox>
					</FlexBox>
				</div>
			</FlexBox>
			{props.description && (
				<div className="mt-10">
					<Description showed={showDesc}>{props.description}</Description>
					<DescTitle
						onClick={() => {
							setShowDesc(!showDesc);
						}}
					>
						{showDesc ? 'Less' : 'More'}
					</DescTitle>
				</div>
			)}
		</div>
	);
};

export default WorkElem;
