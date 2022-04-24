import { Tag, FlexBox } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';

const SSpan = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const SubTitle = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_5};
`;
const STitle = styled.h2`
	margin: 10px 0;
	font-size: 18px;
	color: ${colors.BLUE_DARK_4};
`;
const Preferences = () => {
	return (
		<div className="staak_scrollbar" style={{ padding: '0 15px' }}>
			<div>
				<STitle>Languages</STitle>
				<FlexBox justify="start" gap={10}>
					<FlexBox justify="start" gap={2}>
						<SubTitle>English </SubTitle>
						<span style={{ display: 'inline-block', width: '6px', height: '3px', background: `${colors.BLUE_DARK_4}` }}></span>
						<SSpan> Conversational</SSpan>
					</FlexBox>
					<FlexBox justify="start" gap={2}>
						<SubTitle>Germany</SubTitle>
						<span style={{ display: 'inline-block', width: '6px', height: '3px', background: `${colors.BLUE_DARK_4}` }}></span>
						<SSpan>Fluent</SSpan>
					</FlexBox>
				</FlexBox>
			</div>
			<div className="mt-20">
				<STitle>Open to the following</STitle>
				<FlexBox justify="start" gap={10}>
					<SubTitle>Job Roles</SubTitle>
					<FlexBox justify="start" gap={10}>
						<Tag>Backend developer</Tag>
						<Tag>Project Manager</Tag>
						<Tag>Frontend Lead</Tag>
						<Tag>CTO & Co-Founder</Tag>
					</FlexBox>
				</FlexBox>

				<FlexBox justify="start" gap={10} className="mt-15">
					<SubTitle>Job Types</SubTitle>
					<FlexBox justify="start" gap={10}>
						<Tag color={colors.GREEN_CLEAR_4}>Part-time</Tag>
						<Tag color={colors.BLUE_CLEAR_4}>Full-time</Tag>
						<Tag color={colors.YELLOW_CLEAR_4}>Temprorary</Tag>
						<Tag color={colors.PINK_CLEAR_4}>Seasoneal</Tag>
					</FlexBox>
				</FlexBox>
			</div>

			<div className="mt-20">
				<STitle>Remote Work</STitle>
				<FlexBox justify="start" gap={10}>
					<Tag>Remote or Onsite</Tag>
					<SSpan>Accepts offers for remote and onsite roles</SSpan>
				</FlexBox>
			</div>
			<div className="mt-20">
				<STitle>Desired Location</STitle>
				<FlexBox justify="start" gap={10}>
					<Tag>Russia</Tag>
					<Tag>Norway</Tag>
					<Tag>USA</Tag>
					<Tag>Singapor</Tag>
					<Tag>Austria</Tag>
				</FlexBox>
			</div>
			<div className="mt-20">
				<STitle>Wants</STitle>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', rowGap: '10px' }}>
					<div>- Having a say in team/company direction</div>
					<div>- Opportunities to progress</div>
					<div>- A flexible remote work policy</div>
					<div>- Quiet office</div>
					<div>- Company with clear roles</div>
				</div>
			</div>
		</div>
	);
};

export default Preferences;
