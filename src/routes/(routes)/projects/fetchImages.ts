import { createApi } from 'unsplash-js';
import { colors } from './colors';

export const fetchImages = async (count: number) => {
	const accessKey = '2jacHDYybwpIjozi70jBxq_FdkhUhap37l99qairwI0';
	const unsplash = createApi({ accessKey });
	let images = colors.map((background) => ({ path: '', background }));

	try {
		const res = await unsplash.photos.getRandom({
			collectionIds: ['7P0uGtLS0rY'],
			count
		});

		images = await res.response;
		if (images && images instanceof Array) {
			images = images.map((image) => ({ path: image.urls.small, background: '' }));
		}
	} catch (error) {
		console.log('Failed fetching images');
	}

	return images;
};
