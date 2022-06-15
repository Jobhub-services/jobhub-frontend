import { InputField } from '@/components/common';
import { STitle } from '@/components/developers/jobs/details/common.style';
import { PQuestion } from '@/models/component/developer/jobs.interface';
import { jobDispatcher } from '@/modules/actions/developer/jobs.actions';
import { useAppSelector } from '@/utils/appHooks';

const Questions = ({ questions }: PQuestion) => {
	const { jobApplication } = useAppSelector((state) => state.developerJobs);
	const handleInput = (event: any, value?: string, name?: string) => {
		let tmp = { ...jobApplication };
		let arrTmp = tmp.questions?.filter((elem) => elem._id !== name);
		arrTmp?.push({ _id: name, response: value });
		tmp.questions = arrTmp;
		jobDispatcher.setJobApplication(tmp);
	};
	return (
		<div>
			<STitle>Questions</STitle>
			<div>
				{questions?.map((elem, idx) => {
					return (
						<InputField className="mt-10" name={elem._id!} key={idx} onDataChange={handleInput}>
							{elem.name}
						</InputField>
					);
				})}
			</div>
		</div>
	);
};

export default Questions;
