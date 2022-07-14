import FilterContianer from '@/components/common/filter/FilterContainer';
import { DateRangePicker, Input, InputPicker, TagPicker } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { applicationsActions, applicationsDispatcher } from '@/modules/actions/company/applications.actions';
import { createSearchParams, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { metadataActions } from '@/modules/actions/metadata.actions';
import Skills from '@/components/companies/applicants/filter/Skills';
import OccupationType from '@/components/companies/applicants/filter/OccupationType';
import { ApplicationStatus } from '@/types/company/applications.type';

const SH3 = styled.h3`
	font-size: 14px;
	margin: 10px 0;
	font-weight: 600;
	color: ${colors.BLACK_3};
`;

const ApplicationsFilter = () => {
	const { filter } = useAppSelector((state) => state.applications);
	const { countries, roles } = useAppSelector((state) => state.metadata);
	const [clear, setClear] = useState(false);
	const navigate = useNavigate();
	const { status } = useParams();
	const { pathname } = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	let localFilters: typeof filter = { ...filter };

	useEffect(() => {
		if (countries?.count === 0) metadataActions.getCountries();
		if (roles?.count === 0) metadataActions.getRoles();
	}, []);

	const handleInput = (event: any, value?: string, name?: string) => {
		localFilters.jobTitle = value;
	};
	const handleDate = (date: [Date | null, Date | null]) => {
		localFilters.applicationDate = date;
		applicationsDispatcher.setFilter(localFilters);
	};
	const handleChange = (event: any, value: { value: string; label: string }[], name?: string) => {
		localFilters[name as 'country' | 'applicantRole'] = value;
	};

	const handleComponentChanges = (value: any, name?: string) => {
		localFilters[name as 'skills' | 'occupationType'] = value;
	};
	const onClear = () => {
		setClear(!clear);
		applicationsActions.setFilter({});
	};
	const onApply = () => {
		let tmpParams: any = {};
		if (localFilters?.jobTitle && localFilters?.jobTitle !== '') tmpParams['jobTitle'] = localFilters.jobTitle;
		if (Array.isArray(localFilters?.applicantRole)) tmpParams['applicantRole'] = localFilters.applicantRole.map((elem) => elem.value);
		if (Array.isArray(localFilters?.country)) tmpParams['country'] = localFilters.country.map((elem) => elem.value);
		if (Array.isArray(localFilters.skills)) tmpParams['skills'] = localFilters.skills.map((elem) => elem.value);
		if (Array.isArray(localFilters?.applicationDate)) {
			let tmpArr = [];
			if (localFilters?.applicationDate.length > 0) tmpArr.push(localFilters.applicationDate[0] ?? null);
			if (localFilters?.applicationDate.length > 1) tmpArr.push(localFilters.applicationDate[1] ?? null);
			tmpParams['applicationDate'] = tmpArr;
		}
		if (localFilters?.occupationType) tmpParams['jobType'] = localFilters.occupationType;

		applicationsDispatcher.setFilter(localFilters);
		if (searchParams.get('sort')) tmpParams['sort'] = searchParams.get('sort');
		const newParams = createSearchParams(tmpParams);

		if (pathname.startsWith('/applicants/search/')) {
			setSearchParams(newParams);
			applicationsActions.getShowApplicants(tmpParams, status as ApplicationStatus);
		} else {
			navigate(`/applicants/search/${status}?${newParams.toString()}`);
		}
	};

	return (
		<FilterContianer title="Applications Searcher" type="applications" onApply={onApply} onClear={onClear}>
			<FilterContianer.Body>
				<div>
					<div>
						<SH3>Job title</SH3>
						<Input placeholder="Title" name="jobTitle" value={localFilters.jobTitle ?? ''} onDataChange={handleInput} />
					</div>
					<div className="mt-20">
						<SH3>Applicants Role</SH3>
						<TagPicker placeholder="Choose applicants roles" name="applicantRole" values={localFilters.applicantRole ?? []} onChange={handleChange}>
							{roles?.content?.map((elem, idx) => {
								return (
									<InputPicker.Option key={idx} value={elem._id}>
										{elem.name}
									</InputPicker.Option>
								);
							})}
						</TagPicker>
					</div>
					<div className="mt-20">
						<SH3>Country</SH3>
						<TagPicker placeholder="Choose applicants countries" name="country" values={localFilters.country ?? []} onChange={handleChange}>
							{countries?.content?.map((elem, idx) => {
								const tmp = elem.name + '(' + elem.code + ')';
								return (
									<InputPicker.Option key={idx} value={elem._id}>
										{tmp}
									</InputPicker.Option>
								);
							})}
						</TagPicker>
					</div>
					<div className="mt-20">
						<SH3>Application date</SH3>
						<DateRangePicker
							placeholder="Start date - End date"
							startDate={filter.applicationDate && filter.applicationDate?.length > 0 ? filter.applicationDate![0] : null}
							endDate={filter.applicationDate && filter.applicationDate?.length > 0 ? filter.applicationDate![1] : null}
							onChange={handleDate}
						/>
					</div>
					<Skills onChange={handleComponentChanges} skills={localFilters.skills} clear={clear} />
					<OccupationType onChange={handleComponentChanges} jobType={localFilters.occupationType} clear={clear} />
				</div>
			</FilterContianer.Body>
		</FilterContianer>
	);
};
export default ApplicationsFilter;
