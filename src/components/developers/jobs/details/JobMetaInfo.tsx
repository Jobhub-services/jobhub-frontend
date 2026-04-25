import { StarIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { FlexBox, HrDivider } from 'staak-ui';
import styled from 'styled-components';
import Role from '@/components/developers/jobs/details/Role';
import Location from '@/components/developers/jobs/details/Location';
import Skills from '@/components/developers/jobs/details/Skills';
import { PJobMetaInfo } from '@/models/component/developer/jobs.interface';

const LeftContainer = styled.div`
	width: 23%;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	padding: 10px 15px;
	height: 100%;
	overflow: auto;
`;

const SFeat = styled.span<any>`
	background-color: ${(props) => props.color};
	color: white;
	border-radius: 5px;
	padding: 1px 5px;
	font-size: 12px;
	font-weight: 500;
`;
const JobMetaInfo = ({ featured, newPost, roleIsEmpty, locationIsEmpty, skills, storeData }: PJobMetaInfo) => {
	return (
		<LeftContainer className="staak_scrollbar">
			<FlexBox justify="start" gap={15}>
				{featured && (
					<SFeat color={colors.RED_BASE}>
						<FlexBox justify="end" gap={5}>
							<StarIcon color={'white'} width="13px" height="13px" />
							<span>Featured</span>
						</FlexBox>
					</SFeat>
				)}
				{newPost! < 7 && <SFeat color={colors.YELLOW_BASE}>New</SFeat>}
			</FlexBox>
			{roleIsEmpty && (
				<>
					<Role data={storeData} />
					<HrDivider color={colors.BLACK_12} top={10} side={0} />
				</>
			)}
			{locationIsEmpty && (
				<>
					<Location data={storeData} />
					<HrDivider color={colors.BLACK_12} top={10} side={0} />
				</>
			)}
			{skills?.length! > 0 && <Skills skills={skills!} />}
		</LeftContainer>
	);
};

export default JobMetaInfo;
