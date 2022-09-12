import { Button, FlexBox, InputPicker, PlusIcon } from 'staak-ui';
import { SButton, SpanTitle, SData, SSpan } from '@/components/companies/profile/common/common.style';
import { EditIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { profileAction } from '@/modules/actions/company/profile.actions';

const TimeZone = () => {
	const { timezone } = useAppSelector((state) => state.companyProfile.profile);
	const { timezones } = useAppSelector((state) => state.metadata);
	const [tmz, setTmz] = useState<typeof timezone>();

	const notEmpty = timezone?._id && timezone._id !== '';
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (timezones?.size === 0) metadataActions.getTimeZone();
	}, []);

	const handlePicker = (event: any, value: string, label: string, name: string) => {
		const tmp = timezones?.content.find((elem) => elem._id === value);
		setTmz(tmp);
	};
	const onShow = () => {
		setShow(true);
	};
	const onSave = () => {
		let tmp = tmz?._id;
		setShow(false);
		profileAction.setAttribute(tmp, 'timezone');
	};
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Time zone</SpanTitle>
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
							<SData>{timezone?.name}</SData>
						</>
					) : (
						<SSpan>The main office or centre of control of your company or organization</SSpan>
					)}
				</FlexBox>
			}
			{show && (
				<div className="mt-15">
					<InputPicker placeholder="Time zone" name="timezone" value={timezone?.name ?? ''} onChange={handlePicker}>
						{timezones?.content?.map((elem, idx) => {
							return (
								<InputPicker.Option value={elem._id} key={idx}>
									{elem.name}
								</InputPicker.Option>
							);
						})}
					</InputPicker>
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

export default TimeZone;
