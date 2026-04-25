import Alert from '@/components/common/Alert';
import { jobDispatcher } from '@/modules/actions/developer/jobs.actions';
import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';
import { HEADER_HIEGHT } from '@/constants/app.constants';
import parse from 'html-react-parser';
import { pushNotification } from '@/utils/helpers';

const ErrorContainer = styled.div`
	position: fixed;
	display: flex;
	top: calc(${HEADER_HIEGHT}px + 10px);
	right: 10px;
	flex-direction: column;
	align-items: end;
	z-index: 100;
`;
const ErrorHandler = () => {
	const { errors, succesApplication } = useAppSelector((state) => state.developerJobs);
	if (errors?.status && errors?.content) {
		if (Array.isArray(errors?.content)) {
			errors.content.forEach((elem) => {
				const Tmp = <span style={{ color: `${'white'}` }}>{parse(elem.value)}</span>;
				pushNotification.error(Tmp);
			});
		} else {
			Object.keys(errors?.content).forEach((elem) => {
				pushNotification.error(elem);
			});
		}
		jobDispatcher.setErrors({ content: {}, status: false });
	}
	if (succesApplication?.status) {
		pushNotification.success(succesApplication.message);
		jobDispatcher.setSuccessApplication({ status: false, message: '' });
	}
	return (
		<ErrorContainer>
		</ErrorContainer>
	);
};

export default ErrorHandler;
