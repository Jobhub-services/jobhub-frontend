import { colors } from '@/assets/theme';
import { Tag } from 'staak-ui';
import styled from 'styled-components';

const SMainContainer = styled.div`
	background: #fff;
	border-radius: 8px;
	//box-shadow: 0 5px 29px rgb(0 0 0 / 10%);
	min-height: 600px;
	padding: 25px 20px;
	width: 33%;
`;
const SH2 = styled.h2`
	font-size: 2rem;
	margin: 0;
	color: ${colors.BLACK_3};
`;
const SSpan = styled.span`
	font-size: 2rem;
	font-weight: bold;
	color: ${colors.BLACK_3};
`;
const SMonth = styled.div`
	align-self: end;
	color: ${colors.BLACK_5};
	font-size: 13px;
`;
const STag = styled(Tag)`
	color: ${colors.GREEN_DARK_3};
	background-color: ${colors.GREEN_CLEAR_4};
	padding: 3px 7px;
	font-size: 11px;
`;
const SDollar = styled.span`
	font-weight: bold;
`;
const SFeatures = styled.ul`
	line-height: 1.9rem;
	margin-top: 5px;
	//list-style: none;
	& li {
		color: ${colors.BLACK_3};
	}
`;

const FeatureTitle = styled.div`
	font-weight: bold;
	font-size: 16px;
	color: ${colors.BLACK_4};
`;
export { SMainContainer, SH2, SSpan, SMonth, STag, SDollar, SFeatures, FeatureTitle };
