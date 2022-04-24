import { SSpan, STitle, SSubTitle } from './shared.styles';
import { FlexBox, Tag } from 'staak-ui';
import { colors } from '@/assets/theme';

const Role = () => {
	return (
		<div>
			<STitle>Job Role</STitle>
			<div>
				<div>
					<SSubTitle>Comapny Division</SSubTitle>
					<SSpan>Humain Resources</SSpan>
				</div>
				<div className="mt-20">
					<SSubTitle>Job Category</SSubTitle>
					<SSpan>Humain Resources Administration</SSpan>
				</div>
				<div className="mt-20">
					<SSubTitle>Job Type & Duration</SSubTitle>
					<FlexBox className="mt-10" justify="start" gap={10}>
						<Tag color={colors.PURPLE_3}>Full-time</Tag>
						<Tag color={colors.PURPLE_3}>Parmanent</Tag>
					</FlexBox>
				</div>
			</div>
		</div>
	);
};

export default Role;
