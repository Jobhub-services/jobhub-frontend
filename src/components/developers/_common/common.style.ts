import { colors } from '@/assets/theme';
import styled, { css } from 'styled-components';

const SContainer = styled.div<any>`
	background: white;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 8px;
	border: 1px solid #0000003b;
	${(props) =>
		props.hover &&
		css`
			transition: box-shadow 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
			&:hover {
				box-shadow: 0 0 13px -10px #6d3bfd;
			}
		`}
`;

export { SContainer };
