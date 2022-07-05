import Alert from '@/components/common/Alert';
import { jobDispatcher } from '@/modules/actions/developer/jobs.actions';
import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';
import { HEADER_HIEGHT } from '@/constants/app.constants';
import parse from 'html-react-parser';
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

	return (
		<ErrorContainer>
			{errors?.status && (
				<Alert
					className="mt-15"
					onCloseCallback={() => {
						jobDispatcher.setErrors({ status: false });
					}}
				>
					{Array.isArray(errors.content)
						? errors?.content?.map((elem: any, idx: number) => {
								return (
									<div key={idx}>
										{elem.key} : {parse(elem.value)}
									</div>
								);
						  })
						: Object.keys(errors?.content).map((key, idx) => {
								return <div key={idx}>{errors?.content[key]}</div>;
						  })}
				</Alert>
			)}
			{succesApplication?.status && (
				<Alert
					className="mt-15"
					color="green"
					onCloseCallback={() => {
						jobDispatcher.setSuccessApplication({ status: false, message: '' });
					}}
				>
					{succesApplication.message}
				</Alert>
			)}
		</ErrorContainer>
	);
};

export default ErrorHandler;
