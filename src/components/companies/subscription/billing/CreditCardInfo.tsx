import { useEffect, useState } from 'react';
import { loadLMaps } from '@/services/LoadTapScripts';
import { LoadingIcon } from '@/assets/icons';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { FlexBox } from 'staak-ui';
import { PCreditCardInfo } from '@/models/component/companies/subscription/subscription.interface';
declare function Tapjsli(token: string): any;
// input labels/placeholders
const labels = {
	cardNumber: 'Card Number',
	expirationDate: 'MM/YY',
	cvv: 'CVV',
	cardHolder: 'Card Holder Name',
};
//payment options
const paymentOptions = {
	currencyCode: ['KWD', 'USD', 'SAR'],
	labels: labels,
	TextDirection: 'ltr',
};
const style = {
	base: {
		color: '#535353',
		lineHeight: '18px',
		fontFamily: 'sans-serif',
		fontSmoothing: 'antialiased',
		fontSize: '16px',
		'::placeholder': {
			color: 'rgba(0, 0, 0, 0.26)',
			fontSize: '15px',
		},
		background: 'inherit',
	},
	invalid: {
		color: 'red',
	},
};
const SForm = styled.form`
	width: 100%;
`;
const SContainer = styled.div`
	position: relative;
	width: 100%;
`;
const SLoading = styled(FlexBox)`
	background-color: ${colors.GRAY_2};
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 3;
`;

const CreditCardInfo = (props: PCreditCardInfo) => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		loadLMaps(callback);
	}, []);
	const callback = () => {
		var tap = Tapjsli('pk_test_2RUw7mNQvDjhzMryfH5JZkBa');
		var elements = tap.elements({});
		//create element, pass style and payment options
		var card = elements.create('card', { style: style }, paymentOptions);
		//mount element
		if (props.onTapChange) props.onTapChange(tap, card);
		var cardElem = document.getElementById(props.elementContainer);
		if (cardElem) {
			card.mount(`#${props.elementContainer}`);
			//card change event listener
			card.addEventListener('change', function (event: any) {
				if (event.loaded) {
					console.log('UI loaded :' + event.loaded);
					console.log('current currency is :' + card.getCurrency());
					setIsLoading(false);
				}
				var displayError = document.getElementById(props.errorHandler);
				if (displayError) {
					if (event.error) {
						displayError.textContent = event.error.message;
					} else {
						displayError.textContent = '';
					}
				}
			});
		}
	};
	return (
		<SContainer>
			{isLoading && (
				<SLoading>
					<LoadingIcon color={colors.PURPLE_2} width="50px" height="50px" />
				</SLoading>
			)}
			<SForm id={props.formContainer} method="post" action="/charge">
				<div id={props.elementContainer}></div>
				<div id={props.errorHandler} role="alert"></div>
				{/*<div id={props.success} style={{ display: 'none', position: 'relative', float: 'left' }}>
					Success! Your token is <span id={props.token}></span>
			</div>*/}
			</SForm>
		</SContainer>
	);
};

export default CreditCardInfo;
