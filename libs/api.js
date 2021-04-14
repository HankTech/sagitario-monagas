export function getApiUrl (path = "") {
	return (
		`${process.env.API_URL || "http://localhost:1337"}${path}` 
	)
}


// Helper to make GET requests to API
export async function fetchApi (path) {
	const requestUrl = getApiUrl(path);
	const response = await fetch(requestUrl);
	const data = await response.json()

	return data;
}
