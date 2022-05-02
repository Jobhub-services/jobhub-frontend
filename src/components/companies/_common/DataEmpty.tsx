import NoData from '@/assets/icons/nodata.png';
import { FlexBox, Headline } from 'staak-ui';
import styled from 'styled-components';

const SImg = styled.img`
	width: 40%;
`;
const Sp = styled.p`
	font-size: 16px;
	margin: 10px 0;
`;
const DataEmpty = ({ description, title, top, className, style }: any) => {
	return (
		<FlexBox className={className} style={{ ...style }} height={`calc(100% - ${top}px)`}>
			<FlexBox flexDirection="column">
				<SImg src={NoData} alt="NoData" />
				<Headline variant="h2" size="sm" className="mt-20">
					{title}
				</Headline>
				<Sp>{description}</Sp>
			</FlexBox>
		</FlexBox>
	);
};
DataEmpty.defaultProps = {
	top: 55,
};
export default DataEmpty;
