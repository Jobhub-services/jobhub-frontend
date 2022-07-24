import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';
import Alert from '@/components/common/Alert';
import { jobDispatcher } from '@/modules/actions/company/job.actions';
import parse from 'html-react-parser';
import { FlexBox, HrDivider } from 'staak-ui';
import { colors } from '@/assets/theme';
import { ToastContainer } from 'react-toastify';
import { pushNotification } from '@/utils/helpers';

/* component style */
const ErrorContainer = styled.div`
	display: flex;
	position: absolute;
	top: 10px;
	right: 10px;
	flex-direction: column;
	align-items: end;
`;

const JobErrors = () => {
	const { errors } = useAppSelector((state) => state.job);
	if (errors?.job?.status && errors?.job?.content) {
		if (Array.isArray(errors?.job?.content)) {
			errors.job.content.forEach((elem) => {
				const Tmp = <span style={{ color: `${'white'}` }}>{parse(elem.value)}</span>;
				pushNotification.error(Tmp);
			});
		} else {
			Object.keys(errors?.job?.content).forEach((elem) => {
				pushNotification.error(elem);
			});
		}
		jobDispatcher.setJobErrors({ content: {}, status: false });
	}
	return (
		<ErrorContainer>
			<ToastContainer />
		</ErrorContainer>
	);
};

export default JobErrors;
