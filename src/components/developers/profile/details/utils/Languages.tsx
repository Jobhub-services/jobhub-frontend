import { EditIcon, TrashIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import { Button, FlexBox, InputPicker, PlusIcon } from 'staak-ui';
import styled from 'styled-components';
import { SpanTitle, SButton, LanguageElem } from '@/components/developers/profile/common';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { LanguagesType } from '@/types/developer/profile.type';
const LangElem = styled(FlexBox)`
	margin-top: 20px;
	height: 32px;
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

const FlexWrap = styled(FlexBox)`
	flex-wrap: wrap;
`;
const Languages = () => {
	const { langs } = useAppSelector((state) => state.metadata);
	const { languages } = useAppSelector((state) => state.developerProfile.profile);
	const [tmpLang, setTmpLang] = useState<LanguagesType>({});
	const [show, setShow] = useState(false);
	function addLanguage() {
		if (langs!.size === 0 && langs!.count === 0) metadataActions.getLanguages();
		setShow(true);
	}
	function handleInput(event: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) {
		let tmp = { ...tmpLang };
		if (name === 'level') tmp.level = label;
		else tmp.language = { _id: value, name: label };
		setTmpLang(tmp);
	}
	function onRemove(lang: string, level: string) {
		const new_Data = languages?.filter((elem) => elem.language?._id !== lang || elem.level !== level);
		profileAction.setAttribute(converter(new_Data!), 'languages');
	}
	const onSave = () => {
		if (tmpLang.language !== '' && tmpLang.level !== '') {
			const tmp = converter([...languages!, tmpLang]);
			profileAction.setAttribute(tmp, 'languages');
			setShow(false);
			setTmpLang({});
		}
	};

	const converter = (arr: LanguagesType[]) =>
		arr.map((elem) => {
			return { language: elem.language?._id, level: elem.level };
		});
	return (
		<div style={{ padding: '0 0 0 10px' }}>
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
							<LangElem justify="space-between" key={idx} gap={15}>
								<LanguageElem level={elem.level} language={elem.language} width="72%" />
								<FlexBox gap={20} className="btns">
									<SButton>
										<EditIcon width="15px" height="15px" color={colors.PURPLE_BASE} />
									</SButton>
									<SButton onClick={() => onRemove(elem.language?._id!, elem.level!)} color={colors.RED_CLEAR_4}>
										<TrashIcon width="15px" height="15px" color={colors.RED_CLEAR_1} />
									</SButton>
								</FlexBox>
							</LangElem>
						);
					})
				)}
			</div>
			{show && (
				<div className="mt-20">
					<FlexWrap gap={10}>
						<InputPicker width="100%" name="language" placeholder="Language" onChange={handleInput} value={tmpLang.language?.name}>
							{langs?.content?.map((elem) => {
								const str = elem.name + '(' + elem.code + ')';
								return <InputPicker.Option value={elem._id}>{str}</InputPicker.Option>;
							})}
						</InputPicker>
						<InputPicker width="100%" name="level" placeholder="Level" onChange={handleInput} value={tmpLang.level}>
							<InputPicker.Option value="Basic">Basic</InputPicker.Option>
							<InputPicker.Option value="Conversional">Conversional</InputPicker.Option>
							<InputPicker.Option value="Fluent">Fluent</InputPicker.Option>
							<InputPicker.Option value="Native or Bilingual">Native or Bilingual</InputPicker.Option>
						</InputPicker>
					</FlexWrap>
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
