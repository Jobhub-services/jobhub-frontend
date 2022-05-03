import { Tag, FlexBox } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { TalentAllInfo } from '@/types/talent.type';
const Type: { [x: string]: string } = {
	'Part-time': colors.GREEN_CLEAR_4,
	'Full-time': colors.BLUE_CLEAR_4,
	Permanent: colors.YELLOW_CLEAR_4,
	Temporary: colors.PINK_CLEAR_4,
};

const Dash = styled.span`
	display: inline-block;
	width: 6px;
	height: 3px;
	background-color: ${colors.BLUE_DARK_4};
`;
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
const Preferences = (props: TalentAllInfo) => {
	return (
		<div className="staak_scrollbar" style={{ padding: '0 15px' }}>
			<div>
				<STitle>Languages</STitle>
				<FlexBox justify="start" gap={10}>
					{props.languages?.map((elem, idx) => {
						return (
							<FlexBox key={idx} justify="start" gap={2}>
								<SubTitle>{elem.language} </SubTitle>
								<Dash></Dash>
								<SSpan> {elem.level}</SSpan>
							</FlexBox>
						);
					})}
				</FlexBox>
			</div>
			<div className="mt-20">
				<STitle>Open to the following</STitle>
				<FlexBox justify="start" gap={10}>
					<SubTitle>Job Roles</SubTitle>
					<FlexBox justify="start" gap={10}>
						{props.roles?.map((elem, idx) => {
							return <Tag key={idx}>{elem}</Tag>;
						})}
					</FlexBox>
				</FlexBox>

				<FlexBox justify="start" gap={10} className="mt-15">
					<SubTitle>Job Types</SubTitle>
					<FlexBox justify="start" gap={10}>
						{props.other_types?.map((elem: any, idx) => {
							return (
								<Tag key={idx} color={Type[elem]}>
									{elem}
								</Tag>
							);
						})}
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
					{props.desired_location?.map((elem, idx) => {
						return <Tag key={idx}>{elem}</Tag>;
					})}
				</FlexBox>
			</div>
			<div className="mt-20">
				<STitle>Wants</STitle>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', rowGap: '10px' }}>
					{props.preferences?.map((elem, idx) => {
						return <div key={idx}>- {elem}</div>;
					})}
				</div>
			</div>
		</div>
	);
};

export default Preferences;
