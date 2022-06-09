import { colors } from '@/assets/theme';
import { EditIcon } from '@/assets/icons';
import { useState } from 'react';
import { FlexBox, Input, InputPicker, PlusIcon, Button } from 'staak-ui';
import { SpanTitle, SButton, SSpan } from '@/components/developers/profile/common';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { useAppSelector } from '@/utils/appHooks';
import { metadataActions } from '@/modules/actions/metadata.actions';
import styled from 'styled-components';
import { AddressType } from '@/types/developer/profile.type';

const SCountry = styled.div`
	color: ${colors.BLACK_7};
`;
const Location = () => {
	const { address } = useAppSelector((state) => state.developerProfile.profile);
	const { countries } = useAppSelector((state) => state.metadata);
	const [tmpAddr, setTmpAddr] = useState<AddressType>({});
	const [show, setShow] = useState(false);
	const onSave = () => {
		if (tmpAddr?.country?._id !== '') {
			profileAction.setAttribute(tmpAddr, 'address');
			setShow(false);
		}
	};
	const addAddress = () => {
		if (!show) setShow(true);
		if (countries?.size === 0 && countries.count === 0) {
			metadataActions.getCountries();
		}
		if (address) setTmpAddr(address!);
	};
	const handleInputPicker = (event: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) => {
		let tmp = { ...tmpAddr };
		tmp.country = { _id: value, name: label };
		setTmpAddr(tmp);
	};
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		let tmp = { ...tmpAddr };
		tmp['city'] = value;
		setTmpAddr(tmp);
	};
	return (
		<div style={{ padding: '0 0 0 10px' }}>
			<FlexBox justify="space-between">
				<SpanTitle>Address</SpanTitle>
				<SButton padding={address?.country?._id ? 5 : 0} onClick={addAddress}>
					{address?.country?._id ? (
						<EditIcon width="15px" height="15px" color={colors.PURPLE_BASE} />
					) : (
						<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
					)}
				</SButton>
			</FlexBox>
			<div className="mt-15">
				{address?.country?.name && address?.country?.name !== '' ? (
					<SCountry>
						{address?.country?.name}. {address?.city}
					</SCountry>
				) : (
					<SSpan>Where are you based?</SSpan>
				)}
			</div>
			{show && (
				<div className="mt-15">
					<FlexBox justify="start" gap={15}>
						<InputPicker name="country" placeholder="Country" width="45%" onChange={handleInputPicker} value={tmpAddr.country?.name}>
							{countries?.content?.map((elem, idx) => {
								const str = elem.name + ' (' + elem.code?.toUpperCase() + ')';
								return (
									<InputPicker.Option key={idx} value={elem._id!}>
										{str}
									</InputPicker.Option>
								);
							})}
						</InputPicker>
						<Input name="city" placeholder="City" width="55%" onChange={handleInput} value={tmpAddr.city} />
					</FlexBox>
					<FlexBox className="mt-15" justify="end" gap={10}>
						<Button size="md" variant="text" onClick={() => setShow(false)}>
							Cancel
						</Button>
						<Button onClick={onSave} size="md">
							Save
						</Button>
					</FlexBox>
				</div>
			)}
		</div>
	);
};

export default Location;
