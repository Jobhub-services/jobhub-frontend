import { EditIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { InputField, InputPickerField } from '@/components/common';
import { SpanTitle, SButton, SSpan, SData } from '@/components/companies/profile/common/common.style';
import { profileAction } from '@/modules/actions/company/profile.actions';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { Button, FlexBox, PlusIcon } from 'staak-ui';

const Headquarters = () => {
	const { headquarter } = useAppSelector((state) => state.companyProfile.profile);
	const { countries } = useAppSelector((state) => state.metadata);
	const [localHeadquarter, setLocalHeadquarter] = useState<{ city?: string; street?: string; country?: { _id?: string; name?: string } }>(
		headquarter!
	);
	const [show, setShow] = useState(false);
	const notEmpty =
		(headquarter?.city && headquarter?.city !== '') ||
		(headquarter?.street && headquarter?.street !== '') ||
		(headquarter?.country && headquarter?.country.name !== '');

	useEffect(() => {
		if (countries?.size === 0) metadataActions.getCountries();
	}, []);

	const handleInput = (event: any, value?: string, name?: string) => {
		let tmp = { ...localHeadquarter };
		tmp[name as 'street' | 'city'] = value;
		setLocalHeadquarter(tmp!);
	};
	const handlePicker = (event: any, value: string, label: string, name: string) => {
		let tmp = { ...localHeadquarter };
		tmp.country = { _id: value, name: label };
		setLocalHeadquarter(tmp!);
	};
	const onShow = () => {
		setShow(true);
	};
	const onSave = () => {
		let tmp = { country: localHeadquarter?.country?._id, city: localHeadquarter?.city, street: localHeadquarter?.street };
		setShow(false);
		profileAction.setAttribute(tmp, 'headquarter');
	};
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Headquarters</SpanTitle>
				<SButton padding={notEmpty ? 5 : 0} onClick={onShow}>
					{notEmpty ? (
						<EditIcon width="15px" height="15px" color={colors.PURPLE_BASE} />
					) : (
						<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
					)}
				</SButton>
			</FlexBox>
			{
				<FlexBox flexDirection="column" align="start" className="mt-10" gap={10}>
					{notEmpty ? (
						<>
							{headquarter?.street !== '' && <SData>{headquarter?.street}</SData>}
							<SData>
								{headquarter?.city ? `${headquarter?.city},` : ''} {headquarter?.country ? `${headquarter?.country?.name}.` : ''}
							</SData>
						</>
					) : (
						<SSpan>The main office or centre of control of your company or organization</SSpan>
					)}
				</FlexBox>
			}
			{show && (
				<div className="mt-15">
					<FlexBox justify="start" gap={10}>
						<InputPickerField name="country" title="Country" value={headquarter?.country?.name} onChange={handlePicker}>
							{countries?.content?.map((elem, idx) => {
								const str = elem.name + '(' + elem.code + ')';
								return (
									<InputPickerField.Option key={idx} value={elem._id!}>
										{str}
									</InputPickerField.Option>
								);
							})}
						</InputPickerField>
						<InputField name="city" value={headquarter?.city} onDataChange={handleInput}>
							City
						</InputField>
					</FlexBox>
					<InputField className="mt-10" name="street" value={headquarter?.street} onDataChange={handleInput}>
						Street
					</InputField>
					<FlexBox className="mt-15" justify="end" gap={10}>
						<Button
							size="md"
							variant="text"
							onClick={() => {
								setShow(false);
							}}
						>
							Cancel
						</Button>
						<Button size="md" onClick={onSave}>
							Save
						</Button>
					</FlexBox>
				</div>
			)}
		</div>
	);
};

export default Headquarters;
