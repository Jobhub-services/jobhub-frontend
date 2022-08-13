import { colors } from '@/assets/theme';
import { CProfileStatus } from '@/constants/developer/profile.constants';
import { ArrowDownIcon, DropDown, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import StatusItem from '@/components/developers/profile/preferences/utils/StatusItem';
import { StatusType } from '@/types';

const STitle = styled(FlexBox)`
	border: 1px solid ${colors.GRAY_BASE};
	border-radius: 8px;
	padding: 9px 15px;
	gap: 10px !important;
`;
const StatusDropDown = ({ onSelect, status }: { status: StatusType; onSelect: (e: any, value: string) => void }) => {
	return (
		<DropDown listPosition="left" onSelect={onSelect}>
			<DropDown.Title>
				<STitle>
					<FlexBox justify="start" gap={10}>
						{CProfileStatus[status!].icon}
						<span style={{ whiteSpace: 'nowrap' }}>{CProfileStatus[status!].value}</span>
					</FlexBox>
					<span>
						<ArrowDownIcon color={colors.BLACK_5} />
					</span>
				</STitle>
			</DropDown.Title>
			<DropDown.Item value="ready">
				<StatusItem status="ready" />
			</DropDown.Item>
			<DropDown.Item value="open">
				<StatusItem status="open" />
			</DropDown.Item>
			<DropDown.Item value="closed">
				<StatusItem status="closed" />
			</DropDown.Item>
		</DropDown>
	);
};

export default StatusDropDown;
