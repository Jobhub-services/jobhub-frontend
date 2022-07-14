import { interviewActions, interviewDispatcher } from '@/modules/actions/company/interview.action';
import { useAppSelector } from '@/utils/appHooks';
import InterviewForm from './InterviewForm';
import { Button } from 'staak-ui';

const InterviewSchedule = () => {
	const { createInterview } = useAppSelector((state) => state.interview);
	const { _id } = useAppSelector((state) => state.applications.applicantDetails);
	function handleInput(name: string, value: string) {
		let tmp: any = { ...createInterview };
		tmp[name] = value;
		interviewDispatcher.setCreateInterview(tmp);
	}
	function handleDate(name: string, date: Date | null) {
		let tmp: any = { ...createInterview };
		tmp[name] = date;
		interviewDispatcher.setCreateInterview(tmp);
	}
	function handlePicker(name: string, label: string) {
		let tmp: any = { ...createInterview };
		tmp[name] = label;
		interviewDispatcher.setCreateInterview(tmp);
	}
	function onSubmit() {
		const tmp: any = { ...createInterview };
		tmp._id = _id;
		interviewActions.create(tmp);
	}
	return (
		<div style={{ padding: '0 5px' }}>
			<InterviewForm
				title={createInterview.title}
				note={createInterview.note}
				endDate={createInterview.endDate}
				startDate={createInterview.startDate}
				location={createInterview.location}
				link={createInterview.link}
				onInputChange={handleInput}
				onDateChange={handleDate}
				onPickerChange={handlePicker}
			/>
			<Button onClick={onSubmit} className="mt-15">
				Save
			</Button>
		</div>
	);
};

export default InterviewSchedule;
