import styled from 'styled-components';
import CompanyCard from '@/components/developers/companies/CompanyCard';
import { useAppSelector } from '@/utils/appHooks';

const SWrapper = styled.div<any>`
	display: grid;
	padding: 15px 0;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	@media only screen and (max-width: 1600px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const CompaniesList = () => {
	const { companies } = useAppSelector((state) => state.companies);

	console.log(companies);

	return (
		<SWrapper>
			{companies?.content?.map((elem, idx) => {
				return (
					<CompanyCard
						key={idx}
						_id={elem._id}
						avatar={elem.avatar}
						description={elem.description}
						companyName={elem.companyName}
						generalinfo={elem.generalinfo}
						headquarter={elem.headquarter}
						number_job={elem.number_job}
					/>
				);
			})}
		</SWrapper>
	);
};

export default CompaniesList;
