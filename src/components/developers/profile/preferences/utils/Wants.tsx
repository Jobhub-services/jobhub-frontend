import { TextAreaField } from '@/components/common';
import { FlexBox, Button } from 'staak-ui';
import { WantsElem } from '@/components/developers/profile/common';
import { useState } from 'react';
import { useAppSelector } from '@/utils/appHooks';
import { profileAction, profileDispatcher } from '@/modules/actions/developer/profile.actions';

const Wants = () => {
	const { wants } = useAppSelector((state) => state.developerProfile.profile);
	const [show, setShow] = useState(false);
	const onSave = () => {
		setShow(false);
		profileAction.setAttribute(wants, 'wants');
	};
	const handleInput = (e: any, val?: string, name?: string) => {
		profileDispatcher.setAttribute(val, 'wants');
	};
	return (
		<FlexBox justify="start" align="start" gap={20}>
			<WantsElem width="45%" />
			<div style={{ width: '50%' }}>
				<TextAreaField
					value={wants}
					name="wants"
					height="200px"
					onChange={() => {
						if (!show) setShow(true);
					}}
					onDataChange={handleInput}
				>
					Wants
				</TextAreaField>
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

export default Wants;
