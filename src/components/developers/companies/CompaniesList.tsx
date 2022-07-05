import styled from 'styled-components';
import CompanyCard from '@/components/developers/companies/CompanyCard';
import Google from '@/assets/icons/google.jpg';
import Amazon from '@/assets/icons/a.png';
import Cmp from '@/assets/icons/cmp.jpg';

const SWrapper = styled.div<any>`
	display: grid;
	padding: 15px 0;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
`;

const CompaniesList = () => {
	return (
		<SWrapper>
			<CompanyCard
				_id="1"
				avatar={Amazon}
				about="At air up it is our mission to support the well-being of consumers and enable a more sustainable lifestyle by offering a globally unique, refillable drinking system. We have harnessed the physiological science behind taste perception to add flavor to water using just scent."
				name="Amazon Inc."
				industry="Health, wellness & fitness"
				founded="2019-01-08"
				headquarters={{ country: 'USA', city: 'California', street: '1600 old street of cpmanaies' }}
				number_job={1}
			/>
			<CompanyCard
				_id="2"
				avatar={Google}
				about="At air up it is our mission to support the well-being of consumers and enable a more sustainable lifestyle by offering a globally unique, refillable drinking system. We have harnessed the physiological science behind taste perception to add flavor to water using just scent."
				name="Google Inc."
				industry="Staffing & Recruiting"
				founded="2021-02-03T23:23:00"
				headquarters={{ country: 'USA', city: 'California', street: '1600 old street of cpmanaies' }}
				number_job={20}
			/>
			<CompanyCard
				_id="3"
				about="At air up it is our mission to support the well-being of consumers and enable a more sustainable lifestyle by offering a globally unique, refillable drinking system. We have harnessed the physiological science behind taste perception to add flavor to water using just scent."
				avatar={Cmp}
				name="Amazon Inc."
				industry="Information Technology"
				founded="2017-03-05"
				headquarters={{ country: 'USA', city: 'California', street: '1600 old street of cpmanaies' }}
				number_job={5}
			/>
			<CompanyCard
				_id="4"
				avatar={Google}
				about="At air up it is our mission to support the well-being of consumers and enable a more sustainable lifestyle by offering a globally unique, refillable drinking system. We have harnessed the physiological science behind taste perception to add flavor to water using just scent."
				name="Google Inc."
				industry="Market research"
				founded="2015-03-05"
				headquarters={{ country: 'USA', city: 'California', street: '1600 old street of cpmanaies' }}
				number_job={12}
			/>
		</SWrapper>
	);
};

export default CompaniesList;
