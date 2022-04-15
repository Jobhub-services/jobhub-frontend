export const transformErrors = (errors: any) => {
	const transformedErrors: any = {};
	for (const error in errors) {
		transformedErrors[error] = errors[error].join('<br/>');
	}
	return transformedErrors;
};
