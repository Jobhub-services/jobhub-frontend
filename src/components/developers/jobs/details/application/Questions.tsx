import { InputField } from '@/components/common';
import { STitle } from '@/components/developers/jobs/details/common.style';
import { PQuestion } from '@/models/component/developer/jobs.interface';
import { jobDispatcher } from '@/modules/actions/developer/jobs.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect } from 'react';

const Questions = ({ questions }: PQuestion) => {
	const { jobApplication } = useAppSelector((state) => state.developerJobs);
	useEffect(() => {
		let tmp = { ...jobApplication };
		const data = questions?.map((elem) => {
			return { question: elem._id, response: '', qcontent: elem.question };
		});
		tmp.responses = data;
		jobDispatcher.setJobApplication(tmp);
	}, []);
	const handleInput = (event: any, value?: string, name?: string, qcontent?: string) => {
		let tmp = { ...jobApplication };
		const elemIdx = tmp.responses?.findIndex((elem) => elem.question === name);
		let arrTmp = [...tmp.responses!];
		if (elemIdx !== undefined && elemIdx > -1) {
			arrTmp[elemIdx] = { question: name, response: value, qcontent: qcontent };
			tmp.responses = arrTmp;
			jobDispatcher.setJobApplication(tmp);
		}
	};
	console.log(questions);
	return (
		<>
			{questions?.length! > 0 && (
				<div className="mt-10">
					<STitle>Questions</STitle>
					<div>
						{questions?.map((elem, idx) => {
							return (
								<InputField className="mt-10" name={elem._id!} key={idx} onDataChange={handleInput}>
									{elem.question!}
								</InputField>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default Questions;
