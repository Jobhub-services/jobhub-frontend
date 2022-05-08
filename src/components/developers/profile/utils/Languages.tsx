import { EditIcon, TrashIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import { Button, FlexBox, InputPicker, PlusIcon } from 'staak-ui';
import styled from 'styled-components';
import LanguageElem from './LanguageElem';
import { SpanTitle, SButton } from './shared.style';
const LangElem = styled(FlexBox)`
	margin-top: 20px;
	.btns {
		display: none;
	}
	&:first-child .btns,
	&:hover .btns {
		display: flex;
	}
`;
const SSpan = styled.span`
	display: inline-block;
	margin-top: 15px;
	color: ${colors.BLACK_9};
`;
const Languages = () => {
	const { languages } = useAppSelector((state) => state.developerProfile.profile);
	const [tmpLang, setTmpLang] = useState<{ idLanguage?: string; language?: string; level?: string }>({});
	function addLanguage() {
		setTmpLang({ idLanguage: '', language: '', level: '' });
	}
	function handleInput(event: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) {
		let tmp = { ...tmpLang };
		if (name === 'language') tmp.idLanguage = value;
		tmp[name as 'language' | 'level']! = label;
		setTmpLang(tmp);
	}
	function onRemove(id: string) {}
	function onSave() {
		if (tmpLang.language !== '' && tmpLang.level !== '') {
			profileAction.setAttribute([...languages!, tmpLang], 'languages');
			setTmpLang({});
		}
	}

	return (
		<div style={{ padding: '0 10px' }}>
			<FlexBox justify="space-between">
				<SpanTitle>Languages</SpanTitle>
				<SButton padding={0} onClick={addLanguage}>
					<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
				</SButton>
			</FlexBox>
			<div>
				{languages?.length === 0 ? (
					<SSpan>Add languages you know</SSpan>
				) : (
					languages?.map((elem, idx) => {
						return (
							<LangElem justify="space-between" key={idx}>
								<LanguageElem level={elem.level} language={elem.language} />
								<FlexBox gap={20} className="btns">
									<SButton>
										<EditIcon width="15px" height="15px" color={colors.PURPLE_BASE} />
									</SButton>
									<SButton onClick={() => onRemove(elem.idLanguage!)} color={colors.RED_CLEAR_4}>
										<TrashIcon width="15px" height="15px" color={colors.RED_CLEAR_1} />
									</SButton>
								</FlexBox>
							</LangElem>
						);
					})
				)}
			</div>
			{Object.keys(tmpLang).length !== 0 && (
				<div className="mt-20">
					<FlexBox gap={10}>
						<InputPicker name="language" placeholder="Language" onChange={handleInput} value={tmpLang.language}>
							<InputPicker.Option value="english">English</InputPicker.Option>
						</InputPicker>
						<InputPicker name="level" placeholder="Level" onChange={handleInput} value={tmpLang.level}>
							<InputPicker.Option value="Basic">Basic</InputPicker.Option>
						</InputPicker>
					</FlexBox>
					<FlexBox className="mt-15" justify="end" gap={10}>
						<Button
							size="md"
							variant="text"
							onClick={() => {
								setTmpLang({});
							}}
						>
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

export default Languages;
