import { EducationProps } from '@/models/component/developer/profile.interface';
import { FlexBox } from 'staak-ui';
import { GraduationCapIcon, CalendarIcon, GraduationBigCapIcon } from '@/assets/icons';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { SIcon } from '@/components/developers/profile/common';

const dateOptions: any = { month: 'short', year: 'numeric' };

const SSpan = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const STitle = styled.div`
	font-size: 16px;
	font-weight: 500;
	color: ${colors.BLACK_4};
`;
const EducationCard = ({ title, school, startDate, endDate }: EducationProps) => {
	return (
		<FlexBox justify="start" align="start" gap={20}>
			<SIcon>
				<GraduationBigCapIcon />
			</SIcon>
			<div>
				<STitle>{title}</STitle>
				<div>
					<FlexBox justify="start" className="mt-10" gap={10}>
						<GraduationCapIcon color={colors.BLACK_8} />
						<SSpan>{school}</SSpan>
					</FlexBox>
					<FlexBox justify="start" gap={10} className="mt-10">
						<CalendarIcon width="17px" height="17px" color={colors.BLACK_8} />
						<SSpan>{startDate && new Date(startDate!)?.toLocaleDateString('en-US', dateOptions)} - </SSpan>
						<SSpan>{endDate && new Date(endDate!)?.toLocaleDateString('en-US', dateOptions)}</SSpan>
					</FlexBox>
				</div>
			</div>
		</FlexBox>
	);
};

export default EducationCard;
