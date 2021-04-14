import { getApiUrl } from './api';

export function getApiMedia (media) {
	const imageUrl = media.url.startsWith("/") ? getApiUrl(media.url) : media.url;
	return imageUrl;
}
