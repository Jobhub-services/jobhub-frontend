import { LoadingIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { PopModel } from '@/components/common';
import { useState } from 'react';
import { Button, FlexBox, TextArea } from 'staak-ui';

type PContactUS = {
	open?: boolean;
	loading?: boolean;
	onClose: () => void;
	onSubmit: (text: string) => void;
};

const ContactUSModal = ({ open, loading, onClose, onSubmit }: PContactUS) => {
	const [text, setText] = useState('');
	const [error, setError] = useState(false);
	const handleData = (e: any, val: string, name: string) => {
		setText(val);
	};
	return (
		<PopModel closed={!open} width="35%" onClose={() => onClose()}>
			<PopModel.Header>
				<h3 style={{ margin: '0' }}>Contact Support</h3>
			</PopModel.Header>
			<PopModel.Body>
				<FlexBox flexDirection="column" align="start" gap={10}>
					<div>Get in contact with our support team</div>
					<TextArea height="180px" placeholder="Please let us know how can we help you" onDataChange={handleData} value={text} />
				</FlexBox>
			</PopModel.Body>
			<PopModel.Footer>
				<FlexBox gap={15} width="100%" justify="end">
					<Button size="md" onClick={() => onSubmit(text)}>
						{loading ? (
							<FlexBox width="60px">
								<LoadingIcon width="25px" height="25px" color={colors.WHITE} />
							</FlexBox>
						) : (
							'Submit'
						)}
					</Button>
				</FlexBox>
			</PopModel.Footer>
		</PopModel>
	);
};

export default ContactUSModal;
