export function toString(value: any): string {
	if (typeof value === 'object') {
		return value.join(',');
	}
	return value;
}
