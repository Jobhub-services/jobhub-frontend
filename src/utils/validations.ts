export const transformErrors = (errors) => {
	const transformedErrors = {};
	for (const error in errors) {
		transformedErrors[error] = errors[error].join('<br/>');
	}
	return transformedErrors;
};
