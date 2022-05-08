import { colors } from '@/assets/theme';
import { useState } from 'react';
import { FlexBox, Input, InputPicker, PlusIcon } from 'staak-ui';
import { SpanTitle, SButton } from './shared.style';
const Location = () => {
	const [show, setShow] = useState(false);
	return (
		<div>
			<FlexBox justify="start" gap={20}>
				<SpanTitle>Location</SpanTitle>
				<SButton>
					<PlusIcon color={colors.PURPLE_BASE} width="25px" height="25px" />
				</SButton>
			</FlexBox>
			<FlexBox justify="start">
				<InputPicker name="country" placeholder="Country">
					<InputPicker.Option value="">Turkey</InputPicker.Option>
				</InputPicker>
				<Input name="city" placeholder="City" />
			</FlexBox>
		</div>
	);
};

export default Location;
