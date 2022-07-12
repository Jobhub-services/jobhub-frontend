import { useState } from 'react';
import { InputDateField, InputField, InputPickerField } from '@/components/common';
import { SpanTitle, SButton } from '@/components/companies/profile/common/common.style';
import GeneralInfoElem from '@/components/companies/profile/common/GeneralInfoElem';
import { EditIcon, PlusIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { Button, FlexBox } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { profileAction } from '@/modules/actions/company/profile.actions';
import { CCompanySizes } from '@/constants/company/profile.constants';

const GeneralInfo = () => {
	const { generalinfo } = useAppSelector((state) => state.companyProfile.profile);
	const [genInfo, setGenInfo] = useState<{ company_size?: string; founded?: string; industry?: string }>(generalinfo!);
	const [show, setShow] = useState(false);
	const empty =
		(!generalinfo?.company_size || generalinfo?.company_size === '') &&
		(!generalinfo?.founded || generalinfo.founded === '') &&
		(!generalinfo?.industry || generalinfo.industry === '');

	const onSave = () => {
		setShow(false);
		profileAction.setAttribute(genInfo, 'generalinfo');
	};
	const onShow = () => {
		setShow(true);
	};
	const handleInput = (event: any, value?: string, name?: string) => {
		let tmp = { ...genInfo };
		tmp.industry = value;
		setGenInfo(tmp);
	};
	const handlePicker = (event: any, value: string, label: string, name: string) => {
		let tmp = { ...genInfo };
		tmp[name as 'company_size'] = value;
		setGenInfo(tmp);
	};
	const handleDate = (date: Date | null) => {
		let tmp = { ...genInfo };
		tmp.founded = date?.toDateString();
		setGenInfo(tmp);
	};
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>General info</SpanTitle>
				<SButton padding={empty ? 0 : 5} onClick={onShow}>
					{!empty ? (
						<EditIcon width="15px" height="15px" color={colors.PURPLE_BASE} />
					) : (
						<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
					)}
				</SButton>
			</FlexBox>
			<GeneralInfoElem generalinfo={generalinfo} />
			{show && (
				<div className="mt-20">
					<InputPickerField className="mt-10" name="company_size" title="Company size" onChange={handlePicker} value={generalinfo?.company_size}>
						<InputPickerField.Option value="Seed (1 - 10 employees)">{CCompanySizes.Seed}</InputPickerField.Option>
						<InputPickerField.Option value="Early (11 - 50 employees)">{CCompanySizes.Early}</InputPickerField.Option>
						<InputPickerField.Option value="Mid-size (51 - 200 employees)">{CCompanySizes['Mid-size']}</InputPickerField.Option>
						<InputPickerField.Option value="Large (201 - 500 employees)">{CCompanySizes.Large}</InputPickerField.Option>
						<InputPickerField.Option value="Very Large (501 - 1000 employees)">{CCompanySizes['Very Large']}</InputPickerField.Option>
						<InputPickerField.Option value="Massive (1001+ employees)">{CCompanySizes.Massive}</InputPickerField.Option>
					</InputPickerField>
					<InputDateField
						name="founded"
						title="Foundation date"
						className="mt-10"
						onChange={handleDate}
						date={genInfo?.founded && genInfo?.founded !== '' ? new Date(genInfo?.founded!) : null}
					/>
					<InputField name="industry" className="mt-10" onDataChange={handleInput} value={generalinfo?.industry}>
						Industry
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

export default GeneralInfo;
