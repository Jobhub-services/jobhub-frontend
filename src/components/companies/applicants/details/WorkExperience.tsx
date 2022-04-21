import { FlexBox, Tag } from 'staak-ui';
import { colors } from '@/assets/theme';
import { CompanyIcon, LocationIcon } from '@/assets/icons';
import styled from 'styled-components';
import { WorkExperienceProps } from '@/models/component/companies/applications/applications.interface';

const SSpan = styled.span<any>`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const WorkExperience = ({ title, jobType, company, location, dateRange, style, className }: WorkExperienceProps) => {
	return (
		<div className={className} style={{ ...style }}>
			<FlexBox justify="space-between">
				<div>{title}</div>
				<Tag color={colors.GREEN_CLEAR_4}>{jobType}</Tag>
			</FlexBox>
			<FlexBox justify="space-between" className="mt-5">
				<FlexBox gap={60}>
					<FlexBox gap={5}>
						<CompanyIcon width="15px" height="15px" color={colors.BLACK_9} />
						<SSpan>{company}</SSpan>
					</FlexBox>
					<FlexBox gap={5}>
						<LocationIcon width="15px" height="15px" color={colors.BLACK_9} />
						<SSpan>{location}</SSpan>
					</FlexBox>
				</FlexBox>
				<FlexBox>
					<SSpan>{dateRange}</SSpan>
				</FlexBox>
			</FlexBox>
		</div>
	);
};

export default WorkExperience;
