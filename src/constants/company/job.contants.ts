import { JobInfo } from '@/models/store/company/job.interface';
import { StatusType } from '@/types/common.type';

export const StatusTitle: { [key in StatusType]: string } = {
	ready: 'Active',
	open: 'Suspended',
	closed: 'Closed',
};

export const JobInstance: JobInfo = {
	title: '',
	description: '',
	responsabilities: '',
	company_division: { id: '', name: '' },
	category: { id: '', name: '' },
	job_type: '',
	duration: '',
	duration_range: [null, null],
	salary_type: '',
	start_salary: '',
	end_salary: '',
	currency: { id: '', name: '' },
	benefits: '',
	work_remotly: false,
	hire_remotly: false,
	visa_sponsorship: false,
	work_location: [{ country: { id: '', name: '' }, city: '' }],
	hire_location: [{ country: { id: '', name: '' }, city: '' }],
	education: [],
	certification: [],
	skills: [],
	requirements: '',
	questions: [''],
};
