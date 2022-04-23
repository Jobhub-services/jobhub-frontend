import styled from 'styled-components';
import Women from '@/assets/icons/women.jpg';
import Jerom from '@/assets/icons/jerome.jpg';
import { TalentCard, TalentsHeader, TalentsFilter, TalentProfile } from '@/components/companies/talents';

const MainContainer = styled.div`
	position: relative;
`;
const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	padding: 5px 40px 10px 40px;
	gap: 20px;
`;
const TalentsView = () => {
	return (
		<MainContainer>
			<TalentsHeader />
			<CardContainer>
				<TalentCard
					img={Women}
					role="Lead Android/IOS developer"
					name="Margurerite Burns"
					location="Los Angeles, CA"
					status="ready"
					description="I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018."
					skills={['ReactJs', 'PHP', 'Laravel']}
				/>
				<TalentCard
					img={Jerom}
					role="Senior frontend developer"
					name="Jerome Bell"
					location="San Fransisco, CA"
					status="open"
					description="I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018."
					skills={['ReactJs', 'PHP', 'Laravel']}
				/>
				<TalentCard
					img={Women}
					role="Lead Android/IOS developer"
					name="Margurerite Burns"
					location="Los Angeles, CA"
					status="closed"
					description="I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018."
					skills={['ReactJs', 'PHP', 'Laravel']}
				/>
				<TalentCard
					img={Jerom}
					role="Senior frontend developer"
					name="Jerome Bell"
					location="San Fransisco, CA"
					status="ready"
					description="I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018."
					skills={['ReactJs', 'PHP', 'Laravel']}
				/>
				<TalentCard
					img={Women}
					role="Lead Android/IOS developer"
					name="Margurerite Burns"
					location="Los Angeles, CA"
					status="open"
					description="I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018."
					skills={['ReactJs', 'PHP', 'Laravel']}
				/>
				<TalentCard
					img={Jerom}
					role="Senior frontend developer"
					name="Jerome Bell"
					location="San Fransisco, CA"
					status="closed"
					description="I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018."
					skills={['ReactJs', 'PHP', 'Laravel']}
				/>
				<TalentCard
					img={Women}
					role="Lead Android/IOS developer"
					name="Margurerite Burns"
					location="Los Angeles, CA"
					status="ready"
					description="I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018."
					skills={['ReactJs', 'PHP', 'Laravel']}
				/>
				<TalentCard
					img={Jerom}
					role="Senior frontend developer"
					name="Jerome Bell"
					location="San Fransisco, CA"
					status="open"
					description="I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018."
					skills={['ReactJs', 'PHP', 'Laravel']}
				/>
			</CardContainer>
			<TalentsFilter />
			<TalentProfile />
		</MainContainer>
	);
};

export default TalentsView;
