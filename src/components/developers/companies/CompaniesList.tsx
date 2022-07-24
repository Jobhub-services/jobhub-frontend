import styled from 'styled-components';
import CompanyCard from '@/components/developers/companies/CompanyCard';
import { useAppSelector } from '@/utils/appHooks';
import DataEmpty from '@/components/common/DataEmpty';

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
	if (companies?.content?.length === 0) return <DataEmpty title="No Company found" description="There is no company that matches your criteria" />;
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
