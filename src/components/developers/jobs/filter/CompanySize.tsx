import { STitle } from '@/components/developers/jobs/filter/common.style';
import { CCompanySizes } from '@/constants/company/profile.constants';
import { PCompanySize } from '@/models/component/developer/jobs.interface';
import { useEffect, useState } from 'react';
import { FlexBox, CheckBox } from 'staak-ui';

const CompanySize = ({ onChange, companySize, clear }: PCompanySize) => {
	const [localComSize, setLocalCompSize] = useState<string[]>([]);
	useEffect(() => {
		setLocalCompSize(companySize ?? []);
	}, [clear]);
	const handleBox = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = event.target;
		let tmp = [...localComSize];
		if (checked) tmp.push(value);
		else tmp = tmp.filter((elem) => elem !== value);
		setLocalCompSize(tmp);
		if (onChange) onChange(tmp, 'company_size');
	};
	return (
		<div className="mt-15">
			<STitle>Company size</STitle>
			<FlexBox justify="start" gap={50}>
				<div>
					<CheckBox
						className="mb-10"
						value={CCompanySizes.Seed}
						checked={localComSize.some((elem) => elem === CCompanySizes.Seed)}
						onChange={handleBox}
					>
						{CCompanySizes.Seed}
					</CheckBox>
					<CheckBox
						className="mb-10"
						value={CCompanySizes.Early}
						checked={localComSize.some((elem) => elem === CCompanySizes.Early)}
						onChange={handleBox}
					>
						{CCompanySizes.Early}
					</CheckBox>
					<CheckBox
						className="mb-10"
						value={CCompanySizes['Mid-size']}
						checked={localComSize.some((elem) => elem === CCompanySizes['Mid-size'])}
						onChange={handleBox}
					>
						{CCompanySizes['Mid-size']}
					</CheckBox>
				</div>
				<div>
					<CheckBox
						className="mb-10"
						value={CCompanySizes.Large}
						checked={localComSize.some((elem) => elem === CCompanySizes.Large)}
						onChange={handleBox}
					>
						{CCompanySizes.Large}
					</CheckBox>
					<CheckBox
						className="mb-10"
						value={CCompanySizes['Very Large']}
						checked={localComSize.some((elem) => elem === CCompanySizes['Very Large'])}
						onChange={handleBox}
					>
						{CCompanySizes['Very Large']}
					</CheckBox>
					<CheckBox
						className="mb-10"
						value={CCompanySizes.Massive}
						checked={localComSize.some((elem) => elem === CCompanySizes.Massive)}
						onChange={handleBox}
					>
						{CCompanySizes.Massive}
					</CheckBox>
				</div>
			</FlexBox>
		</div>
	);
};

export default CompanySize;
