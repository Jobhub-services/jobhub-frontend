import { useEffect, useState } from 'react';
import { InputDateField, InputField, InputPickerField } from '@/components/common';
import { SpanTitle, SButton } from '@/components/companies/profile/common/common.style';
import GeneralInfoElem from '@/components/companies/profile/common/GeneralInfoElem';
import { EditIcon, PlusIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { Button, FlexBox } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { profileAction } from '@/modules/actions/company/profile.actions';
import { CCompanySizes, CCompanySizesArray } from '@/constants/company/profile.constants';
import { metadataActions } from '@/modules/actions/metadata.actions';

const GeneralInfo = () => {
	const { generalinfo } = useAppSelector((state) => state.companyProfile.profile);
	const { industries } = useAppSelector((state) => state.metadata);
	const [genInfo, setGenInfo] = useState<{ company_size?: string; founded?: string; industry?: { _id: string; name: string } }>(generalinfo!);
	const [show, setShow] = useState(false);
	const empty =
		(!generalinfo?.company_size || generalinfo?.company_size === '') &&
		(!generalinfo?.founded || generalinfo.founded === '') &&
		(!generalinfo?.industry?.name || generalinfo.industry.name === '');

	useEffect(() => {
		if (industries?.size === 0) metadataActions.getIndustries();
	}, []);
	const onSave = () => {
		setShow(false);
		const data = { ...genInfo, industry: genInfo?.industry?._id };
		profileAction.setAttribute(data, 'generalinfo');
	};
	const onShow = () => {
		setShow(true);
	};
	const handlePicker = (event: any, value: string, label: string, name: string) => {
		let tmp = { ...genInfo };
		if (name === 'industry') {
			tmp.industry = { _id: value, name: label };
		} else tmp[name as 'company_size'] = value;
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
				<SpanTitle>General Information</SpanTitle>
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
					<InputPickerField
						className="mt-10"
						name="company_size"
						placeholder="Company size"
						title="Company size"
						onChange={handlePicker}
						value={generalinfo?.company_size}
					>
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
						placeholder="Foundation date"
						className="mt-10"
						onChange={handleDate}
						date={genInfo?.founded && genInfo?.founded !== '' ? new Date(genInfo?.founded!) : null}
					/>
					<InputPickerField
						title="Industry"
						name="industry"
						className="mt-10"
						placeholder="Industry"
						onChange={handlePicker}
						value={generalinfo?.industry?.name}
					>
						{industries?.content?.map((elem, idx) => {
							return (
								<InputPickerField.Option key={idx} value={elem._id ?? ''}>
									{elem.name}
								</InputPickerField.Option>
							);
						})}
					</InputPickerField>

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
