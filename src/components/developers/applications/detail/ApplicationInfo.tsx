import { CalendarIcon, QuestionIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import Status from '@/components/developers/applications/detail/appUtils/Status';
import { ContentStatus } from '@/constants/developer/application.constants';
import { useAppSelector } from '@/utils/appHooks';
import { dateWithMonthName } from '@/utils/helpers';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
const SH4 = styled.h3`
	margin: 0;
	color: ${colors.PURPLE_BASE};
`;
const SContainer = styled.div`
	padding: 0 10px;
`;
const SPre = styled.pre<any>`
	display: -webkit-box;
	color: ${colors.BLACK_3};
	margin: 0;
	font-family: inherit;
	-webkit-box-orient: vertical;
	white-space: pre-line;
	line-height: 1.8;
`;
const SQuestion = styled.div`
	font-weight: 500;
	color: ${colors.BLACK_3};
`;
const SResponse = styled.div`
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const ApplicationInfo = () => {
	const { applicationDetails } = useAppSelector((state) => state.talentApplications);
	return (
		<SContainer>
			<SH4>Motivation</SH4>
			<SPre>{applicationDetails?.motivation}</SPre>
			{(applicationDetails?.start_date || (applicationDetails?.notice_period && applicationDetails?.notice_period !== '')) && (
				<>
					<FlexBox className="mt-15" justify="start" gap={10}>
						<CalendarIcon width="18px" height="18px" color={colors.PURPLE_BASE} />
						<SH4>Start date & notice period</SH4>
					</FlexBox>
					<FlexBox gap={20} justify="start" className="mt-5">
						{applicationDetails?.start_date && (
							<FlexBox gap={10}>
								<SQuestion>Start date</SQuestion>
								<SResponse>{dateWithMonthName(applicationDetails?.start_date)}</SResponse>
							</FlexBox>
						)}
						{applicationDetails.notice_period && (
							<FlexBox gap={10}>
								<SQuestion>Notice period</SQuestion>
								<SResponse>{applicationDetails.notice_period}</SResponse>
							</FlexBox>
						)}
					</FlexBox>
				</>
			)}
			{applicationDetails?.responses?.length! > 0 && (
				<div className="mt-15">
					<FlexBox gap={10} justify="start">
						<QuestionIcon color={colors.PURPLE_BASE} />
						<SH4>Questions</SH4>
					</FlexBox>
					{applicationDetails?.responses?.map((elem, idx) => {
						return (
							<div className="mt-10" key={idx}>
								<SQuestion>{elem.question} ?</SQuestion>
								<SResponse className="mt-5">{elem.response}</SResponse>
							</div>
						);
					})}
				</div>
			)}
			<Status className="mt-15" status={applicationDetails?.status} content={ContentStatus[applicationDetails?.status!]} />
		</SContainer>
	);
};

export default ApplicationInfo;
