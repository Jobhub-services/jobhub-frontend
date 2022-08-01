import { InputField } from '@/components/common';
import { LoadingScreen } from '@/components/common/LoadingScreen';
import { settingsAction, settingsDispatcher } from '@/modules/actions/company/settings.actions';
import { useAppSelector } from '@/utils/appHooks';
import { pushNotification } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import { Button } from 'staak-ui';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	padding: 10px 20px;
`;
const SecurityElem = () => {
	const { isLoading, errors, isUpdated } = useAppSelector((state) => state.companySettings);
	const [localData, setLocalData] = useState<{ currentPassword?: string; newPassword?: string; confirmPassword?: string }>({});

	useEffect(() => {
		if (isUpdated) {
			pushNotification.success('Password updated successfully');
			settingsDispatcher.setIsUpdated(false);
		}
	}, [isUpdated]);

	useEffect(() => {
		if (errors?.status) {
			pushNotification.error(errors?.messages);
			settingsDispatcher.setErrors({ status: false, messages: '' });
		}
	}, [errors]);

	const handleChange = (event: any, value?: string, name?: string) => {
		let tmp = { ...localData };
		tmp[name as 'currentPassword' | 'newPassword' | 'confirmPassword'] = value;
		setLocalData(tmp);
	};
	const handleClick = () => {
		settingsAction.setSecuritySettings(localData);
	};
	return (
		<>
			<Container>
				<h3>Change password</h3>
				<div style={{ padding: '0 15px' }}>
					<InputField
						type="password"
						name="currentPassword"
						placeholder="Current password"
						onDataChange={handleChange}
						value={localData?.currentPassword}
					>
						Current password
					</InputField>
					<InputField
						type="password"
						name="newPassword"
						placeholder="New password"
						className="mt-10"
						onDataChange={handleChange}
						value={localData?.newPassword}
					>
						New password
					</InputField>
					<InputField
						type="password"
						name="confirmPassword"
						placeholder="Confirm password"
						className="mt-10"
						onDataChange={handleChange}
						value={localData?.confirmPassword}
					>
						Confirm password
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

export default SecurityElem;
