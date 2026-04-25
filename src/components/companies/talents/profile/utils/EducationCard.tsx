import { EducationProps } from '@/models/component/companies/talents/talents.interface';
import { FlexBox } from 'staak-ui';
import { GraduationCapIcon, CalendarFillIcon } from '@/assets/icons';
import styled from 'styled-components';
import { colors } from '@/assets/theme';

const SSpan = styled.span`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const STitle = styled.div`
	font-weight: 500;
	color: ${colors.BLACK_4};
`;
const EducationCard = ({ title, university, date }: EducationProps) => {
	return (
		<div>
			<STitle>{title}</STitle>
			<FlexBox justify="space-between" className="mt-10">
				<FlexBox gap={10}>
					<GraduationCapIcon color={colors.BLACK_8} />
					<SSpan>{university}</SSpan>
				</FlexBox>
				<FlexBox gap={10}>
					<CalendarFillIcon color={colors.BLACK_9} />
					<SSpan>{date}</SSpan>
				</FlexBox>
			</FlexBox>
		</div>
	);
};

export default EducationCard;
