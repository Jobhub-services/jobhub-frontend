import { InputField } from '@/components/common';
import { LoadingScreen } from '@/components/common/LoadingScreen';
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
	const [localData, setLocalData] = useState<{ username?: string; companyName?: string; email?: string }>({});

	useEffect(() => {
		const tmp = {
			username: userInfo?.username,
			companyName: userInfo?.companyName,
			email: userInfo?.email,
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
			pushNotification.error(errors?.messages);
			settingsDispatcher.setErrors({ status: false, messages: '' });
		}
	}, [errors]);

	const handleClick = () => {
		settingsAction.setAttribute(localData);
	};
	const handleData = (event: any, value?: string, name?: string) => {
		let tmp = { ...localData };
		tmp[name as 'companyName' | 'username' | 'email'] = value;
		setLocalData(tmp);
	};
	return (
		<>
			<Container>
				<h3>General information</h3>
				<div style={{ padding: '0 15px' }}>
					<InputField name="companyName" placeholder="Company name" value={localData?.companyName} onDataChange={handleData}>
						Company name
					</InputField>
					<InputField name="username" placeholder="Username" className="mt-10" value={localData?.username} onDataChange={handleData}>
						Username
					</InputField>
					<InputField name="email" placeholder="Business email" className="mt-10" value={localData?.email} onDataChange={handleData}>
						Business email
					</InputField>
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
