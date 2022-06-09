import { PdfIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { SpanTitle, SSpan } from '@/components/developers/profile/common';
import { useAppSelector } from '@/utils/appHooks';
import React, { useState } from 'react';
import { profileAction, profileDispatcher } from '@/modules/actions/developer/profile.actions';
const FileContainer = styled.div`
	border: 1px dashed ${colors.BLACK_10};
	border-radius: 7px;
	padding: 10px 10px;
`;
const FInput = styled.input`
	width: 0;
	height: 0;
`;
const SLabel = styled.label`
	display: inline-block;
	margin: 5px 0;
`;
const Resume = () => {
	const { resume } = useAppSelector((state) => state.developerProfile.profile);
	const [show, setShow] = useState(false);
	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!show) setShow(true);
		const { files } = event.target;
		profileDispatcher.setAttribute(files![0], 'resume');
		console.log(files![0]);
	};
	const onSave = () => {
		let data = new FormData();
		data.append('resume', resume!);
		profileAction.setAttribute(data, 'resume');
	};
	return (
		<div>
			<FlexBox justify="start" align="start" gap={20}>
				<div style={{ width: '45%' }}>
					<SpanTitle>Upload your recent Resume or CV</SpanTitle>
					{
						<div>
							<SSpan className="mt-10" style={{ display: 'block' }}>
								Upload your most up-to-date resume
							</SSpan>
						</div>
					}
				</div>
				<div style={{ width: '50%' }}>
					<SLabel>Upload your resume</SLabel>
					<FileContainer>
						<FlexBox flexDirection="column">
							<FlexBox>
								<label htmlFor="resume">
									<PdfIcon />
								</label>
								<FInput onChange={handleInput} type={'file'} name="resume" id="resume" />
							</FlexBox>
							<SSpan>File types: PDF, DOCX, PPTX</SSpan>
						</FlexBox>
					</FileContainer>
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
		</div>
	);
};

export default Resume;
