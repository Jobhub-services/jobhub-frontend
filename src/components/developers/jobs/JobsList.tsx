import styled from 'styled-components';
import JobCard from '@/components/developers/jobs/JobCard';
import Google from '@/assets/icons/google.jpg';
import Facebook from '@/assets/icons/facebook.png';

const SWrapper = styled.div<any>`
	display: grid;
	padding: 15px 0;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`;
const JobsList = () => {
	return (
		<SWrapper>
			<JobCard
				id="1"
				title="Remote Platform Database Administrator"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Google}
				createdAt="2022-06-12T20:20:00"
				company_name="Google"
				work_location={{ country: 'Antigua and Barbuda', city: 'Antigua and' }}
				hire_location={[
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'France', city: 'Paris' },
				]}
				start_salary="130000"
				end_salary="200000"
				currency={{ code: 'USD' }}
				salary_type="Annually"
				featured
				saved
			/>
			<JobCard
				id="1"
				title="Remote Senior Fullstack Rails Engineer (Rails 7/Hotwire/Tailwind/ViewComponents)"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Facebook}
				createdAt="2022-06-10"
				company_name="Facebook"
				work_location={{ country: 'Germany', city: 'Berlin' }}
				hire_remotly
				applied
			/>
			<JobCard
				id="1"
				title="Remote Platform Database Administrator"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Google}
				createdAt="2022-06-03"
				company_name="IBM"
				work_location={{ country: 'Germany', city: 'Berlin' }}
				hire_location={[
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
				]}
				start_salary="20"
				end_salary="50"
				currency={{ code: 'USD' }}
				salary_type="Hourly"
			/>
			<JobCard
				id="1"
				title="Remote Senior Fullstack Rails Engineer (Rails 7/Hotwire/Tailwind/ViewComponents)"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Facebook}
				createdAt="2022-06-11"
				company_name="Facebook"
				work_location={{ country: 'Germany', city: 'Berlin' }}
				hire_location={[
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
				]}
			/>
			<JobCard
				id="1"
				title="Remote Platform Database Administrator"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Google}
				createdAt="2022-06-12T20:20:00"
				company_name="Google"
				work_location={{ country: 'Antigua and Barbuda', city: 'Antigua and' }}
				hire_location={[
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'France', city: 'Paris' },
				]}
				start_salary="130000"
				end_salary="200000"
				currency={{ code: 'USD' }}
				salary_type="Annually"
				featured
				saved
			/>
			<JobCard
				id="1"
				title="Remote Senior Fullstack Rails Engineer (Rails 7/Hotwire/Tailwind/ViewComponents)"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Facebook}
				createdAt="2022-06-10"
				company_name="Facebook"
				work_location={{ country: 'Germany', city: 'Berlin' }}
				hire_remotly
				applied
			/>
			<JobCard
				id="1"
				title="Remote Platform Database Administrator"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Google}
				createdAt="2022-06-03"
				company_name="IBM"
				work_location={{ country: 'Germany', city: 'Berlin' }}
				hire_location={[
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
				]}
				start_salary="20"
				end_salary="50"
				currency={{ code: 'USD' }}
				salary_type="Hourly"
			/>
			<JobCard
				id="1"
				title="Remote Senior Fullstack Rails Engineer (Rails 7/Hotwire/Tailwind/ViewComponents)"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Facebook}
				createdAt="2022-06-11"
				company_name="Facebook"
				work_location={{ country: 'Germany', city: 'Berlin' }}
				hire_location={[
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
				]}
			/>
			<JobCard
				id="1"
				title="Remote Platform Database Administrator"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Google}
				createdAt="2022-06-12T20:20:00"
				company_name="Google"
				work_location={{ country: 'Antigua and Barbuda', city: 'Antigua and' }}
				hire_location={[
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'France', city: 'Paris' },
				]}
				start_salary="130000"
				end_salary="200000"
				currency={{ code: 'USD' }}
				salary_type="Annually"
				featured
				saved
			/>
			<JobCard
				id="1"
				title="Remote Senior Fullstack Rails Engineer (Rails 7/Hotwire/Tailwind/ViewComponents)"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Facebook}
				createdAt="2022-06-10"
				company_name="Facebook"
				work_location={{ country: 'Germany', city: 'Berlin' }}
				hire_remotly
				applied
			/>
			<JobCard
				id="1"
				title="Remote Platform Database Administrator"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Google}
				createdAt="2022-06-03"
				company_name="IBM"
				work_location={{ country: 'Germany', city: 'Berlin' }}
				hire_location={[
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
				]}
				start_salary="20"
				end_salary="50"
				currency={{ code: 'USD' }}
				salary_type="Hourly"
			/>
			<JobCard
				id="1"
				title="Remote Senior Fullstack Rails Engineer (Rails 7/Hotwire/Tailwind/ViewComponents)"
				category="Software Engineering"
				job_type="Full time"
				duration="Permanent"
				avatar={Facebook}
				createdAt="2022-06-11"
				company_name="Facebook"
				work_location={{ country: 'Germany', city: 'Berlin' }}
				hire_location={[
					{ country: 'Germany', city: 'Berlin' },
					{ country: 'Germany', city: 'Berlin' },
				]}
			/>
		</SWrapper>
	);
};

export default JobsList;
