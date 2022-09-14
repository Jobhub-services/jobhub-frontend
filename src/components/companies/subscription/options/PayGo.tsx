import { PayGoIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { InputField } from '@/components/common';
import { SPayGo, SH2, SDollar, SMonth, SSpan } from '@/components/companies/subscription/options/option.style';
import { POption } from '@/models/component/companies/subscription/subscription.interface';
import { useState } from 'react';
import { Button, FlexBox, Input } from 'staak-ui';
import styled from 'styled-components';
const Span = styled.span`
	color: ${colors.BLACK_7};
	font-size: 13px;
`;
const SLeftSide = styled.div`
	padding: 15px 15px;
	width: 70%;
`;
const SRightSide = styled(FlexBox)`
	padding: 0 10px;
	width: 30%;
	height: 100%;
	border-left: 1px solid ${colors.BLACK_12};
	padding: 15px 15px;
`;
const PayGo = ({ renewJob, onSubscribe }: POption) => {
	const [quantity, setQuantity] = useState('');
	const totalCharge = (renewJob ?? 0) * (isNaN(parseInt(quantity)) ? 1 : parseInt(quantity));
	const handleData = (e: any, value?: string, name?: string) => {
		if (Number.isInteger(parseInt(value ?? ''))) {
			setQuantity(value ?? '');
		}
	};
	const handleClick = () => {
		if (onSubscribe) onSubscribe(`${quantity}`);
	};
	return (
		<SPayGo justify="start">
			<SLeftSide>
				<FlexBox gap={10} justify="start" height="100%" className="mb-20">
					<span>
						<PayGoIcon width="60px" height="60px" />
					</span>
					<div>
						<SH2>PayGo</SH2>
						<Span>Use our Standard posting job feature and pay as you go</Span>
					</div>
				</FlexBox>
				<InputField name="quantity" placeholder="Number of Jobs" onDataChange={handleData} value={quantity}>
					Jobs to post
				</InputField>
			</SLeftSide>
			<SRightSide flexDirection="column">
				<FlexBox>
					<SDollar>$</SDollar>
					<SSpan>{renewJob ?? 0}</SSpan>
					<SMonth>/Job</SMonth>
				</FlexBox>
				<FlexBox className="mt-10" gap={5}>
					Total cost <strong>{` $${totalCharge}`}</strong>
				</FlexBox>
				<Button className="mt-10" onClick={handleClick}>
					Pay Now
				</Button>
			</SRightSide>
		</SPayGo>
	);
};

export default PayGo;
