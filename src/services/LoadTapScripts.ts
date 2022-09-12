export const loadLMaps = (callback: Function) => {
	const scriptId = 'tapapi_id';
	const existingScript = document.getElementById(scriptId);
	if (!existingScript) {
		const script = document.createElement('script');
		script.src = 'https://secure.gosell.io/js/sdk/tap.min.js';
		script.id = scriptId;
		document.body.appendChild(script);
		script.onload = () => {
			if (callback) callback();
		};
	}
	if (existingScript && callback) callback();
};
