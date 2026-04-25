import { InputField } from '@/components/common';
import PhoneInput from '@/components/common/input/PhoneInput';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import { settingsAction, settingsDispatcher } from '@/modules/actions/company/settings.actions';
import { userActions } from '@/modules/actions/user.actions';
import { useAppSelector } from '@/utils/appHooks';
import { pushNotification } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import { Button } from 'staak-ui';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	padding: 10px 20px;
`;

const AccountElem = () => {
	const { isLoading, isUpdated, errors } = useAppSelector((state) => state.companySettings);
	const { userInfo } = useAppSelector((state) => state.user);
	const [localData, setLocalData] = useState<{
		username?: string;
		companyName?: string;
		email?: string;
		phone?: { country_code: string; number: string };
	}>({});

	useEffect(() => {
		const tmp = {
			username: userInfo?.username,
			companyName: userInfo?.companyName,
			email: userInfo?.email,
			phone: userInfo.phone,
		};
		setLocalData(tmp);
	}, []);

	useEffect(() => {
		if (isUpdated) {
			pushNotification.success('Company informations updated successfully');
			settingsDispatcher.setIsUpdated(false);
			userActions.getUserInfo();
		}
	}, [isUpdated]);

	useEffect(() => {
		if (errors?.status) {
			if (typeof errors?.messages === 'string') {
				pushNotification.error(errors?.messages);
			} else {
				Object.values(errors?.messages).forEach((elem) => {
					pushNotification.error(`${elem}`);
				});
			}
			settingsDispatcher.setErrors({ status: false, messages: '' });
		}
	}, [errors]);

	const handleClick = () => {
		let tmp: any = { companyName: localData.companyName };
		if (localData.email !== userInfo.email) tmp.email = localData.email;
		if (localData.username !== userInfo.username) tmp.username = localData.username;
		if (localData?.phone?.country_code !== userInfo?.phone?.country_code || localData?.phone?.number !== userInfo?.phone?.number)
			tmp.phone = localData.phone;
		settingsAction.setAttribute(tmp);
	};
	const handleData = (event: any, value?: string, name?: string) => {
		let tmp = { ...localData };
		tmp[name as 'companyName' | 'username' | 'email'] = value;
		setLocalData(tmp);
	};
	const handleDataChange = (value: any, name: string) => {
		let tmp = { ...localData };
		tmp.phone = value;
		setLocalData(tmp);
	};
	return (
		<>
			<Container>
				<h3>General Information</h3>
				<div style={{ padding: '0 15px' }}>
					<InputField name="companyName" placeholder="Company Name" value={localData?.companyName} onDataChange={handleData}>
						Company Name
					</InputField>
					<InputField name="username" placeholder="Username" className="mt-10" value={localData?.username} onDataChange={handleData}>
						Username
					</InputField>
					<InputField name="email" placeholder="Business Email" className="mt-10" value={localData?.email} onDataChange={handleData}>
						Business Email
					</InputField>
					<PhoneInput name="phone" placeholder="Phone" className="mt-10" onDataChange={handleDataChange} value={localData?.phone} />
					<Button className="mt-20" onClick={handleClick}>
						Save changes
					</Button>
				</div>
				{isLoading && <LoadingScreen />}
			</Container>
		</>
	);
};

export default AccountElem;
