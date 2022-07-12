import { EditIcon } from '@/assets/icons';
import DivisionElem from '@/components/companies/profile/common/DivisionElem';
import { colors } from '@/assets/theme';
import { SpanTitle, SButton } from '@/components/companies/profile/common/common.style';
import { profileAction } from '@/modules/actions/company/profile.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import { Button, FlexBox, PlusIcon, TagInput } from 'staak-ui';

const CompanyDivision = () => {
	const { company_division } = useAppSelector((state) => state.companyProfile.profile);
	const [localDivisions, setLocalDivisions] = useState<string[]>([]);
	const [show, setShow] = useState(false);
	const onShow = () => {
		setShow(true);
	};
	const onSave = () => {
		setShow(false);
		profileAction.setAttribute(localDivisions, 'company_division');
	};
	const handleInputTag = (event: any, value: string[], name?: string) => {
		setLocalDivisions(value);
	};
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Company divisions</SpanTitle>
				<SButton padding={company_division?.length! > 0 ? 5 : 0} onClick={onShow}>
					{company_division?.length! > 0 ? (
						<EditIcon width="15px" height="15px" color={colors.PURPLE_BASE} />
					) : (
						<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
					)}
				</SButton>
			</FlexBox>
			<DivisionElem />
			{show && (
				<div className="mt-15">
					<TagInput name="company_division" title="Education" values={company_division} onChange={handleInputTag} />
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
export default CompanyDivision;
