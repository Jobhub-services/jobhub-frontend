import { STitle } from '@/components/developers/companies/detail/common.style';
import { FlexBox, Tag } from 'staak-ui';
import { TCompanyDetail } from '@/types/developer/comanies.type';
import styled from 'styled-components';
const SWrrap = styled(FlexBox)`
	flex-wrap: wrap-reverse;
	margin-top: 15px;
`;

const Keywords = ({ keywords }: TCompanyDetail) => {
	return (
		<div>
			<STitle>Specialties</STitle>
			{
				<SWrrap justify="start" gap={10} className="mt-10">
					{keywords?.map((elem, idx) => {
						return <Tag key={idx}>{elem}</Tag>;
					})}
					{keywords?.length === 0 && 'N/A'}
				</SWrrap>
			}
		</div>
	);
};

export default Keywords;
