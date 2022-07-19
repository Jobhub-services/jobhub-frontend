import { TagPickerField } from '@/components/common';
import { useAppSelector } from '@/utils/appHooks';
import { SSpan, SpanTitle } from '@/components/developers/profile/common';
import { FlexBox, Button, Tag } from 'staak-ui';
import { useEffect, useState } from 'react';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { profileAction, profileDispatcher } from '@/modules/actions/developer/profile.actions';
import styled from 'styled-components';

const TagWrapper = styled(FlexBox)`
	gap: 15px !important;
	flex-wrap: wrap;
	justify-content: flex-start !important;
`;
const WorkLocation = () => {
	const { desired_location } = useAppSelector((state) => state.developerProfile.profile);
	const { countries } = useAppSelector((state) => state.metadata);
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (countries?.size === 0) {
			metadataActions.getCountries();
		}
	}, []);
	const handleInput = (event: any, value: { value: string; label: string }[], name?: string) => {
		if (!show) setShow(true);
		const tmp = value.map((elem) => {
			return {
				_id: elem.value,
				name: elem.label,
			};
		});
		profileDispatcher.setAttribute(tmp, 'desired_location');
	};
	const onSave = () => {
		const tmp = desired_location?.map((elem) => elem._id);
		profileAction.setAttribute(tmp, 'desired_location');
		setShow(false);
	};
	return (
		<FlexBox align="start" justify="start" gap={20}>
			<div style={{ width: '45%' }}>
				<SpanTitle>Work location</SpanTitle>
				<TagWrapper className="mt-15">
					{!desired_location || (desired_location && desired_location?.length === 0) ? (
						<SSpan style={{ display: 'block' }}>What locations do you want to in?</SSpan>
					) : (
						desired_location.map((elem, idx) => {
							return (
								<Tag key={idx} closable value={elem._id}>
									{elem.name}
								</Tag>
							);
						})
					)}
				</TagWrapper>
			</div>
			<div style={{ width: '50%' }}>
				<TagPickerField
					placeholder="Select countries"
					name="desired_location"
					title="Open to the work in"
					values={
						Array.isArray(desired_location)
							? desired_location.map((elem) => {
									return {
										value: elem._id,
										label: elem.name,
									};
							  })
							: []
					}
					onChange={handleInput}
				>
					{countries?.content?.map((elem, idx) => {
						const str = elem.name + '(' + elem.code + ')';
						return (
							<TagPickerField.Option key={idx} value={elem._id!}>
								{str}
							</TagPickerField.Option>
						);
					})}
				</TagPickerField>
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

export default WorkLocation;
