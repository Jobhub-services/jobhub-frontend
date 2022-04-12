export function twoFirstLetter(text: string): string {
	if (text === undefined) return '';
	const val = text.split(' ');
	if (val.length > 1) return val[0].substring(0, 1).toUpperCase() + val[1].substring(0, 1).toUpperCase();
	return val[0].substring(0, 2).toUpperCase();
}
