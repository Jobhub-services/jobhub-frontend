import { EditIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { InputDateField, InputField, PopModel, TextAreaField } from '@/components/common';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { CertificationType } from '@/types/developer/profile.type';
import { useAppSelector } from '@/utils/appHooks';
import React, { Fragment, useState } from 'react';
import { Button, FlexBox, HrDivider, PlusIcon, TrashIcon } from 'staak-ui';
import styled from 'styled-components';
import { SButton, SpanTitle, CertificationCard, SSpan } from '@/components/developers/profile/common';

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
	function handleInput(event: any, value?: string, name?: string) {
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
	const onSave = () => {
		let tmp = [...certifications!];
		if (certif._id) {
			tmp = tmp.filter((elem) => elem._id !== certif._id);
		}
		tmp.push(certif);
		setShow(false);
		setCertif({});
		profileAction.setAttribute(tmp, 'certifications');
	};
	const handleEdit = (_id: string) => {
		const tmp = certifications?.find((elem) => elem._id === _id);
		if (tmp) {
			setCertif(tmp);
			setShow(true);
		}
	};
	const handleRemove = (_id: string) => {
		const tmp = certifications?.filter((elem) => elem._id !== _id);
		profileAction.setAttribute(tmp, 'certifications');
	};
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
						<Fragment key={idx}>
							<WElem justify="space-between" gap={20}>
								<CertificationCard {...elem} width="85%" />
								<FlexBox gap={20} className="btns">
									<SButton onClick={() => handleEdit(elem._id!)}>
										<EditIcon width="18px" height="18px" color={colors.PURPLE_BASE} />
									</SButton>
									<SButton onClick={() => handleRemove(elem._id!)}>
										<TrashIcon width="18px" height="18px" color={colors.RED_CLEAR_1} />
									</SButton>
								</FlexBox>
							</WElem>
							<HrDivider top={15} side={15} />
						</Fragment>
					);
				})}
				{certifications?.length === 0 && <SSpan className="mt-15">Sharing your certifications will help you stand out more.</SSpan>}
			</div>
			{show && (
				<PopModel closed={!show} onClose={() => setShow(false)}>
					<PopModel.Header>
						<SpanTitle>Add certification</SpanTitle>
					</PopModel.Header>
					<PopModel.Body>
						<div>
							<InputField name="title" placeholder="Title" value={certif.title} onDataChange={handleInput}>
								Title
							</InputField>
							<FlexBox className="mt-10" gap={10}>
								<InputField name="provider" placeholder="Provider" value={certif.provider} onDataChange={handleInput}>
									Provider
								</InputField>
							</FlexBox>
							<FlexBox className="mt-10" gap={10}>
								<InputDateField
									placeholder="Issue date"
									name="issuedDate"
									title="Issue date"
									onChange={(date: Date | null) => handleDate(date, 'issuedDate')}
									date={certif.issuedDate && new Date(certif.issuedDate)}
								/>
								<InputDateField
									placeholder="Expiration date"
									name="expirationDate"
									title="Expiration date"
									onChange={(date: Date | null) => handleDate(date, 'expirationDate')}
									date={certif.expirationDate && new Date(certif.expirationDate)}
								/>
							</FlexBox>
							<FlexBox className="mt-10" gap={10}>
								<InputField name="certificationId" placeholder="Certification ID" value={certif.certificationId} onDataChange={handleInput}>
									Certification ID
								</InputField>
								<InputField name="link" placeholder="Certification URL" value={certif.link} onDataChange={handleInput}>
									Certification URL
								</InputField>
							</FlexBox>
							<TextAreaField
								className="mt-10"
								name="description"
								placeholder="Description"
								height="150px"
								value={certif.description}
								onDataChange={handleInput}
							>
								Description
							</TextAreaField>
						</div>
					</PopModel.Body>
					<PopModel.Footer>
						<FlexBox className="mt-15" justify="end" gap={10} width="100%">
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
					</PopModel.Footer>
				</PopModel>
			)}
		</div>
	);
};

export default Certification;
