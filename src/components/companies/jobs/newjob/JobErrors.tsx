import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';
import Alert from '@/components/common/Alert';
import { jobDispatcher } from '@/modules/actions/company/job.actions';
import parse from 'html-react-parser';
import { HrDivider } from 'staak-ui';
import { colors } from '@/assets/theme';

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
	const { errors, jobCreated } = useAppSelector((state) => state.job);
	return (
		<ErrorContainer>
			{errors?.job?.status && (
				<Alert
					className="mt-15"
					onCloseCallback={() => {
						jobDispatcher.setJobErrors({ status: false });
					}}
				>
					{Array.isArray(errors?.job?.content)
						? errors?.job?.content?.map((elem: any, idx: number) => {
								return (
									<>
										<div key={idx} className="mt-10">
											<span style={{ color: `${colors.BLACK_4}` }}>{parse(elem.value)}</span>
										</div>
										<HrDivider top={10} side={40} />
									</>
								);
						  })
						: Object.keys(errors?.job?.content).map((key, idx) => {
								return (
									<div key={idx} className="mt-10">
										{errors?.job?.content[key]}
									</div>
								);
						  })}
				</Alert>
			)}
			{jobCreated && (
				<Alert
					className="mt-15"
					color="green"
					onCloseCallback={() => {
						jobDispatcher.setJobCreated(false);
					}}
				>
					Job created succefully
				</Alert>
			)}
		</ErrorContainer>
	);
};

export default JobErrors;
