import { SData, SSpan } from '@/components/companies/profile/common/common.style';
import { FlexBox } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';

const DivisionElem = () => {
	const { company_division } = useAppSelector((state) => state.companyProfile.profile);
	return (
		<FlexBox justify="start" className="mt-10" flexDirection="column" align="start" gap={10}>
			{company_division?.length! > 0 ? (
				company_division?.map((elem, idx) => {
					return (
						<SData className="mt-10" key={idx}>
							- {elem}
						</SData>
					);
				})
			) : (
				<SSpan>Let people know which department they can work in</SSpan>
			)}
		</FlexBox>
	);
};

export default DivisionElem;
