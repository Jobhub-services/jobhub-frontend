import { EditIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { InputDateField, InputField, TextAreaField } from '@/components/common';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { CertificationType } from '@/types/developer/profile.type';
import { useAppSelector } from '@/utils/appHooks';
import React, { useState } from 'react';
import { Button, FlexBox, HrDivider, PlusIcon, TrashIcon } from 'staak-ui';
import styled from 'styled-components';
import { SButton, SpanTitle } from '../shared.style';
import CertificationCard from './CertificationCard';

const WElem = styled(FlexBox)`
	margin-top: 10px;
	.btns {
		display: none;
	}
	&:first-child .btns,
	&:hover .btns {
		display: flex;
	}
`;
const Certification = () => {
	const { certifications } = useAppSelector((state) => state.developerProfile.profile);
	const [show, setShow] = useState(false);
	const [certif, setCertif] = useState<CertificationType>({});
	function handleInput(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { name, value } = event.target;
		let tmp = { ...certif };
		tmp[name as 'title' | 'provider' | 'certificationId' | 'link' | 'description'] = value;
		setCertif(tmp);
	}
	function handleDate(date: Date | null, name: string) {
		let tmp = { ...certif };
		tmp[name as 'expirationDate' | 'issuedDate'] = date!;
		setCertif(tmp);
	}
	function addCertif() {
		setShow(true);
	}
	function onSave() {
		const tmp = [...certifications!, certif];
		profileAction.setAttribute(tmp, 'certifications');
		setCertif({});
		setShow(false);
	}
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Certifications</SpanTitle>
				<SButton padding={0} onClick={addCertif}>
					<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
				</SButton>
			</FlexBox>
			<div>
				{certifications?.map((elem, idx) => {
					return (
						<>
							<WElem justify="space-between" key={idx} gap={20}>
								<CertificationCard {...elem} />
								<FlexBox gap={20} className="btns">
									<SButton>
										<EditIcon width="18px" height="18px" color={colors.PURPLE_BASE} />
									</SButton>
									<SButton>
										<TrashIcon width="18px" height="18px" color={colors.RED_CLEAR_1} />
									</SButton>
								</FlexBox>
							</WElem>
							<HrDivider top={15} side={15} />
						</>
					);
				})}
			</div>
			{show && (
				<div>
					<InputField name="title" placeholder="Title" onChange={handleInput}>
						Title
					</InputField>
					<FlexBox className="mt-10" gap={10}>
						<InputField name="provider" placeholder="Provider" onChange={handleInput}>
							Provider
						</InputField>
					</FlexBox>
					<FlexBox className="mt-10" gap={10}>
						<InputDateField
							placeholder="Issue date"
							name="issuedDate"
							title="Issue date"
							onChange={(date: Date | null) => handleDate(date, 'issuedDate')}
							date={certif.issuedDate}
						/>
						<InputDateField
							placeholder="Expiration date"
							name="expirationDate"
							title="Expiration date"
							onChange={(date: Date | null) => handleDate(date, 'expirationDate')}
							date={certif.expirationDate}
						/>
					</FlexBox>
					<FlexBox className="mt-10" gap={10}>
						<InputField name="certificationId" placeholder="Certification ID" onChange={handleInput}>
							Certification ID
						</InputField>
						<InputField name="link" placeholder="Certification URL" onChange={handleInput}>
							Certification URL
						</InputField>
					</FlexBox>
					<TextAreaField className="mt-10" name="description" placeholder="Description" onChange={handleInput}>
						Description
					</TextAreaField>
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

export default Certification;
