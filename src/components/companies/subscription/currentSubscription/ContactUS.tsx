import { colors } from '@/assets/theme';
import { useEffect, useState } from 'react';
import { Button } from 'staak-ui';
import ContactUSModal from '@/components/companies/subscription/Modal/ContactUSModal';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { settingsAction, settingsDispatcher } from '@/modules/actions/company/settings.actions';
import { TBooleanAttr } from '@/types/company/settings.type';
import { pushNotification } from '@/utils/helpers';

const SContainer = styled.div<any>`
	background-color: white;
	border-radius: 8px;
	padding: 15px 20px;
	width: ${(props) => props.width};
`;
const SDiv = styled.div`
	color: ${colors.BLACK_5};
`;
const CSpan = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_3};
`;
const ContactUS = () => {
	const [openContactUS, setOpenContactUS] = useState(false);
	const { userInfo } = useAppSelector((state) => state.user);
	const { contactFailed, contactSended } = useAppSelector((state) => state.companySettings);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (contactSended) {
			setLoading(false);
			setOpenContactUS(false);
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.CONTACT_SENDED);
			pushNotification.success('Your message has been sent to our support team, and you will be contacted as soon as possible');
		}
	}, [contactSended]);
	useEffect(() => {
		if (contactFailed) {
			setLoading(false);
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.CONTACT_FAILED);
			pushNotification.error('Something went wrong, please try later');
		}
	}, [contactFailed]);

	const handleSubmit = (text: string) => {
		if (text && text !== '') {
			const tmp = {
				name: userInfo.username,
				email: userInfo.email,
				companyName: userInfo.companyName,
				message: text,
			};
			setLoading(true);
			settingsAction.contactUs(tmp);
		}
	};
	return (
		<>
			{openContactUS && <ContactUSModal onClose={() => setOpenContactUS(false)} onSubmit={handleSubmit} open={openContactUS} loading={loading} />}
			<SContainer width="30%">
				<CSpan>Questions about subscription options or you need assistance?</CSpan>
				<SDiv className="mt-10">Get in contact with our sales team</SDiv>
				<Button width="100%" variant="light" size="md" className="mt-20" onClick={() => setOpenContactUS(true)}>
					Contact US
				</Button>
			</SContainer>
		</>
	);
};
export default ContactUS;
