import { FlexBox } from 'staak-ui';
import { CProfileStatus } from '@/constants/developer/profile.constants';
import { StatusType } from '@/types';
import { StandardProps } from '@/models/component';
import { SSpan } from '@/components/developers/profile/common';

const StatusItem = ({ status, className }: { status: StatusType } & StandardProps) => {
	return (
		<div className={className}>
			<FlexBox justify="start" gap={10}>
				{CProfileStatus[status!].icon}
				<span>{CProfileStatus[status].value}</span>
			</FlexBox>
			<SSpan className="mt-10">{CProfileStatus[status].descr}</SSpan>
		</div>
	);
};

export default StatusItem;
