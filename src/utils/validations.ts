export const transformErrors = (errors: any) => {
	const transformedErrors: any = {};
	for (const error in errors) {
		transformedErrors[error] = errors[error].join('<br/>');
	}
	return transformedErrors;
};

export const transformErrorsToArray = (errors: any) => {
	const transformedErrors: { key: string; value: string }[] = [];
	for (const error in errors) {
		const tmp = { key: error, value: errors[error].join('<br/>') };
		transformedErrors.push(tmp);
	}
	return transformedErrors;
};
