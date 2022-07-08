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
				description="At air up it is our mission to support the well-being of consumers and enable a more sustainable lifestyle by offering a globally unique, refillable drinking system. We have harnessed the physiological science behind taste perception to add flavor to water using just scent."
				companyName="Amazon Inc."
				generalinfo={{ industry: 'Health, wellness & fitness', founded: '2019-01-08' }}
				headquarter={{ country: 'USA', city: 'California', street: '1600 old street of cpmanaies' }}
				number_job={1}
			/>
			<CompanyCard
				_id="2"
				avatar={Google}
				description="At air up it is our mission to support the well-being of consumers and enable a more sustainable lifestyle by offering a globally unique, refillable drinking system. We have harnessed the physiological science behind taste perception to add flavor to water using just scent."
				companyName="Google Inc."
				generalinfo={{ industry: 'Health, wellness & fitness', founded: '2019-01-08' }}
				headquarter={{ country: 'USA', city: 'California', street: '1600 old street of cpmanaies' }}
				number_job={20}
			/>
			<CompanyCard
				_id="3"
				description="At air up it is our mission to support the well-being of consumers and enable a more sustainable lifestyle by offering a globally unique, refillable drinking system. We have harnessed the physiological science behind taste perception to add flavor to water using just scent."
				avatar={Cmp}
				companyName="Amazon Inc."
				generalinfo={{ industry: 'Health, wellness & fitness', founded: '2019-01-08' }}
				headquarter={{ country: 'USA', city: 'California', street: '1600 old street of cpmanaies' }}
				number_job={5}
			/>
			<CompanyCard
				_id="4"
				avatar={Google}
				description="At air up it is our mission to support the well-being of consumers and enable a more sustainable lifestyle by offering a globally unique, refillable drinking system. We have harnessed the physiological science behind taste perception to add flavor to water using just scent."
				companyName="Google Inc."
				generalinfo={{ industry: 'Health, wellness & fitness', founded: '2019-01-08' }}
				headquarter={{ country: 'USA', city: 'California', street: '1600 old street of cpmanaies' }}
				number_job={12}
			/>
		</SWrapper>
	);
};

export default CompaniesList;
