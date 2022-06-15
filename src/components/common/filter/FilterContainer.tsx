import React from 'react';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import { FlexBox, Headline, IconButton, Button } from 'staak-ui';
import { CloseIcon } from 'staak-ui';
import { StandardProps } from '@/models/component';
import { FilterContianerProps } from '@/models/component/common/common.interface';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { jobActions } from '@/modules/actions/company/job.actions';
import { jobActions as developerJobActions } from '@/modules/actions/developer/jobs.actions';
import { talentsActions } from '@/modules/actions/company/talents.actions';
import { useAppSelector } from '@/utils/appHooks';

const actionsMap = { job: jobActions, applications: applicationsActions, talent: talentsActions, developerJobs: developerJobActions };

const FContainer = styled.div<any>`
	position: fixed;
	top: ${HEADER_HIEGHT}px;
	left: ${ASIDE_WIDTH}px;
	background: white;
	width: ${(props) => (props.closed ? '0' : props.width)};
	overflow-x: hidden;
	height: calc(100% - ${HEADER_HIEGHT}px);
	box-shadow: 2px -5px 20px -15px ${colors.BLACK_7};
	transition: width 0.2s, visibility 50ms;
`;

const SubContainer = styled.div<any>`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;
const SHeader = styled(FlexBox)`
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 5px 15px !important;
`;
const SFooter = styled(FlexBox)`
	border-top: 1px solid ${colors.BLACK_12};
	padding: 15px 15px !important;
	gap: 10px !important;
`;
const SBody = styled.div`
	padding: 5px 15px 15px 15px;
	overflow-y: auto;
	flex-grow: 1;
`;
const FilterContianer = (props: FilterContianerProps) => {
	const { filterClosed } = useAppSelector((state) => state[props.type]);
	const body = React.Children.map(props.children, (child) => (child?.type.displayName === 'Body' ? child : null));
	return (
		<FContainer closed={filterClosed} width={props.width}>
			<SubContainer>
				<SHeader justify="space-between">
					<Headline variant="h2" size="sm">
						{props.title}
					</Headline>
					<IconButton
						onClick={(event: React.SyntheticEvent) => {
							actionsMap[props.type].setClosedFilter(!filterClosed);
						}}
						width="30px"
						height="30px"
						circle
					>
						<CloseIcon color={colors.BLACK_8} />
					</IconButton>
				</SHeader>
				<SBody className="staak_scrollbar">{body}</SBody>
				<SFooter>
					<Button variant="outlined" width="100%" onClick={props.onClear}>
						Clean All
					</Button>
					<Button width="100%" onClick={props.onApply}>
						Apply
					</Button>
				</SFooter>
			</SubContainer>
		</FContainer>
	);
};

const FilterBody = ({ children }: StandardProps) => <>{children}</>;

FilterBody.displayName = 'Body';
FilterContianer.Body = FilterBody;

FilterContianer.defaultProps = {
	width: '350px',
};
export default FilterContianer;
