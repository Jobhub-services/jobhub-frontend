import { InputField, InputPickerField } from '@/components/common';
import { useAppSelector } from '@/utils/appHooks';
import { SSpan, SpanTitle } from '@/components/developers/profile/common';
import { FlexBox, Button } from 'staak-ui';
import { useEffect, useState } from 'react';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { profileAction, profileDispatcher } from '@/modules/actions/developer/profile.actions';
const Salary = () => {
	const { salary, currency } = useAppSelector((state) => state.developerProfile.profile);
	const { currencies } = useAppSelector((state) => state.metadata);
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (currencies?.size === 0) {
			metadataActions.getCurrency();
		}
	}, []);
	const onSave = () => {
		profileAction.setAttribute(currency?._id, 'currency');
		profileAction.setAttribute(salary, 'salary');
		setShow(false);
	};
	const handlePicker = (event: any, value: string, label: string, name: string) => {
		if (!show) setShow(true);
		let tmp: any = value;
		if (name === 'currency') tmp = { _id: value, name: label };
		profileDispatcher.setAttribute(tmp, name);
	};
	const displaySalary = salary && salary !== '' && currency;
	return (
		<FlexBox justify="flex-start" align="start" gap={20}>
			<div style={{ width: '45%' }}>
				<SpanTitle>Expected annual salary</SpanTitle>
				<div className="mt-15">
					{displaySalary ? (
						<FlexBox justify="start" gap={15}>
							<span>{salary}</span>
							<span>{currency.name}</span>
						</FlexBox>
					) : (
						<SSpan>What is your desired annual salary?</SSpan>
					)}
				</div>
			</div>
			<div style={{ width: '50%' }}>
				<FlexBox gap={15} className="mt-10" justify="flex-start">
					<InputField
						name="salary"
						placeholder="Salary"
						value={salary}
						onChange={() => {
							if (!show) setShow(true);
						}}
						onDataChange={(e: any, value?: string, name?: string) => handlePicker(e, value!, '', name!)}
					>
						salary
					</InputField>
					<InputPickerField placeholder="Currency" name="currency" title="Currency" value={currency?.name} onChange={handlePicker}>
						{currencies?.content?.map((elem, idx) => {
							const str = elem.name + ' (' + elem.code?.toUpperCase() + ')';
							return (
								<InputPickerField.Option key={idx} value={elem._id!}>
									{str}
								</InputPickerField.Option>
							);
						})}
					</InputPickerField>
				</FlexBox>
				{show && (
					<FlexBox className="mt-15" justify="end" gap={10}>
						<Button size="md" variant="text" onClick={() => setShow(false)}>
							Cancel
						</Button>
						<Button size="md" onClick={onSave}>
							Save
						</Button>
					</FlexBox>
				)}
			</div>
		</FlexBox>
	);
};

export default Salary;
