import { EditIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { SpanTitle, SButton } from '@/components/companies/profile/common/common.style';
import KeywordsElem from '@/components/companies/profile/common/KeywordsElem';
import { profileDispatcher, profileAction } from '@/modules/actions/company/profile.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import { Button, FlexBox, PlusIcon, TagInput } from 'staak-ui';

const KeyWords = () => {
	const { keywords } = useAppSelector((state) => state.companyProfile.profile);
	const [localKeywords, setLocalKeywords] = useState<string[]>([]);
	const [show, setShow] = useState(false);
	const addKeywords = () => {
		setShow(true);
	};
	const handleInputTag = (event: any, value: string[], name?: string) => {
		setLocalKeywords(value);
	};
	const onSave = () => {
		setShow(false);
		profileAction.setAttribute(localKeywords, 'keywords');
	};
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Keywords</SpanTitle>
				<SButton padding={keywords?.length! > 0 ? 5 : 0} onClick={addKeywords}>
					{keywords?.length! > 0 ? (
						<EditIcon width="15px" height="15px" color={colors.PURPLE_BASE} />
					) : (
						<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
					)}
				</SButton>
			</FlexBox>
			{<KeywordsElem keywords={keywords} />}
			{show && (
				<div className="mt-20">
					<TagInput name="education" title="Education" values={keywords} onChange={handleInputTag} />
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

export default KeyWords;
