import { createApi } from 'unsplash-js';
import * as dotenv from 'dotenv';
dotenv.config();

export const fetchImages = async (count) => {
	const accessKey = process.env.UNSPLASH_ACCESS_KEY;
	const collectionId = process.env.UNSPLASH_COLLECTION_ID;
	const unsplash = createApi({ accessKey });

	try {
		const res = await unsplash.photos.getRandom({
			collectionIds: [collectionId],
			count
		});

		const images = await res.response;

		if (images && images instanceof Array) {
			return images.map(({ urls }) => ({ urls }));
		}
	} catch (error) {
		console.log(`Failed fetching images: ${error.message}`);
	}
};
