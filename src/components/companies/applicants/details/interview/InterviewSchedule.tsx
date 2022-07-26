import { interviewActions, interviewDispatcher } from '@/modules/actions/company/interview.action';
import { useAppSelector } from '@/utils/appHooks';
import InterviewForm from './InterviewForm';
import { Button } from 'staak-ui';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import styled from 'styled-components';
import { useEffect } from 'react';
import { pushNotification } from '@/utils/helpers';
import { ToastContainer } from 'react-toastify';
import { applicationsActions } from '@/modules/actions/company/applications.actions';

const Container = styled.div`
	padding: 0 5px;
	position: relative;
	height: 100%;
`;

const InterviewSchedule = () => {
	const { createInterview, isLoading, isCreated } = useAppSelector((state) => state.interview);
	const { _id } = useAppSelector((state) => state.applications.applicantDetails);

	useEffect(() => {
		if (isCreated) {
			interviewDispatcher.setIsCreated(false);
			applicationsActions.getApplicantDetails('NEW', _id, false);
			pushNotification.success('Interview created successfully');
		}
	}, [isCreated]);
	const handleInput = (name: string, value: string) => {
		let tmp: any = { ...createInterview };
		tmp[name] = value;
		interviewDispatcher.setCreateInterview(tmp);
	};
	const handleDate = (name: string, date: Date | null) => {
		let tmp: any = { ...createInterview };
		tmp[name] = date;
		interviewDispatcher.setCreateInterview(tmp);
	};
	const handlePicker = (name: string, label: string) => {
		let tmp: any = { ...createInterview };
		tmp[name] = label;
		interviewDispatcher.setCreateInterview(tmp);
	};
	const onSubmit = () => {
		const tmp: any = { ...createInterview };
		interviewActions.create(_id, tmp);
	};
	return (
		<>
			<ToastContainer />
			<Container>
				{isLoading ? (
					<LoadingScreen />
				) : (
					<>
						<InterviewForm
							_id={createInterview._id}
							title={createInterview.title}
							note={createInterview.note}
							endDate={createInterview.endDate}
							startDate={createInterview.startDate}
							location={createInterview.location}
							link={createInterview.link}
							status={createInterview.status}
							onInputChange={handleInput}
							onDateChange={handleDate}
							onPickerChange={handlePicker}
						/>
						<Button onClick={onSubmit} className="mt-15">
							Save
						</Button>
					</>
				)}
			</Container>
		</>
	);
};

export default InterviewSchedule;
