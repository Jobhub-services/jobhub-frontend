import { HrDivider } from 'staak-ui';
import { ProfileStatus, Resume, WorkLocation, Salary, DesiredJob, Wants } from '@/components/developers/profile/preferences/utils';
import styled from 'styled-components';
const Container = styled.div`
	padding: 20px 20px;
`;
const ProfilePreferences = () => {
	return (
		<div>
			<Container>
				<Resume />
				<HrDivider top={15} />
				<ProfileStatus />
				<HrDivider top={15} />
				<WorkLocation />
				<HrDivider top={15} />
				<Salary />
				<HrDivider top={15} />
				<DesiredJob />
				<HrDivider top={15} />
				<Wants />
			</Container>
		</div>
	);
};

export default ProfilePreferences;
