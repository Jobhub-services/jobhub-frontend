import { FlexBox, Button, Headline } from 'staak-ui';
import IconTitle from './IconTitle';
import Description from '@/__icons__/Description.svg';
import Responsability from '@/__icons__/Responsability.svg';
import { JobReviewProps } from '@/models/component';
import { Sh4, StyledGap } from './jobReview.styles';
import LocationReview from './LocationReview';
import CompensationReview from './CompensationReview';
import QualificationsReview from './QualificationReview';
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';

const JobReview = (props: JobReviewProps) => {
	function handleNext(event: React.SyntheticEvent) {
		if (props.onNext) props.onNext(event);
	}
	function handlePrevious(event: React.SyntheticEvent) {
		if (props.onPreviouse) props.onPreviouse(event);
	}
	return (
		<>
			<FlexBox justify="flex-start" align="flex-start">
				<div style={{ paddingRight: '15px', width: '250px' }}>
					<div style={{ marginTop: '20px' }}>
						<Headline variant="h2" size="sm">
							Job role
						</Headline>
						<div>
							<Sh4>Company division</Sh4>
							<div> Humain resources</div>
						</div>
						<div style={{ marginTop: '10px' }}>
							<Sh4>Job category</Sh4>
							<div> Humain resources administration</div>
						</div>
						<div style={{ marginTop: '10px' }}>
							<Sh4>Job type</Sh4>
							<span>Full-time</span>
						</div>
						<div style={{ marginTop: '10px' }}>
							<Sh4>Duration</Sh4>
							<span>Permanent</span>
						</div>
					</div>
					<LocationReview />
				</div>
				<div style={{ width: '800px', paddingLeft: '15px', borderLeft: `1px solid ${Colors.BLACK_12}` }}>
					<Headline variant="h2" size="lg">
						Frontend developer
					</Headline>
					<div>
						<IconTitle title="Description" icon={Description} />
						<p style={{ marginLeft: '20px', marginTop: '0' }}>
							Our Experience team is looking for a passionate Frontend Engineer to join us in creating amazing experiences for our users. Our team is
							one of the fastest growing within AgencyAnalytics! We work fast and iteratively to ensure our products are modern, easy to use and
							ultimately make our users happy. More importantly, we're looking for people to build a team of collaborative, supportive and
							high-skilled engineers that take our products to the next level
						</p>
					</div>
					<div>
						<IconTitle title="Responsabilities" icon={Responsability} />
						<p style={{ marginLeft: '20px', marginTop: '0' }}>
							1- Develop and iterate on new features to deliver amazing experiences <br />
							2- Continuously review, improve and adjust all aspects of the user experience
							<br />
							3- Promote a culture of collaboration, care and high quality
							<br />
							4- Regularly conduct peer reviews, code audits and promote good practices
							<br />
							5- Work with other teams to build a technical ecosystem that enables high velocity, low-waste development
							<br />
						</p>
					</div>
					<CompensationReview />
					<QualificationsReview />
				</div>
			</FlexBox>
			<StyledGap align="flex-start" justify="flex-start">
				<Button variant="outlined" onClick={handlePrevious}>
					Back
				</Button>
				<Button onClick={handleNext}>Create</Button>
			</StyledGap>
		</>
	);
};

export default JobReview;
