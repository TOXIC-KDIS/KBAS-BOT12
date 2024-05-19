import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const TiktokDownloadRapidApiServer = "https://tiktok-video-no-watermark2.p.rapidapi.com";
const errorHandling { error: boolean; message: string;};
const TiktokDownloadResult = {
	unique_id: string;
	nickname: string;
	download_count: number;
	duration: number;
	description: string;
	play: string;
	wmplay: string;
	hdplay: string;
	music: string;
};
function RapidApiInit(url: string): {
	headers: {
		"x-rapidapi-key": string;
	};
	params: {
		url: string;
		hd: number;
	};
} {
	const _key =
		"JTJGMCUyRmIlMkY4JTJGMyUyRjglMkY4JTJGYiUyRjclMkY3JTJGNSUyRm0lMkZzJTJGaCUyRjQlMkYwJTJGOCUyRjQlMkY5JTJGOCUyRjYlMkYxJTJGMyUyRjAlMkY4JTJGYiUyRmUlMkY3JTJGMCUyRnAlMkYxJTJGNyUyRmMlMkYwJTJGMyUyRjMlMkZqJTJGcyUyRm4lMkYzJTJGZSUyRjAlMkY4JTJGNSUyRmElMkZkJTJGYyUyRjglMkZlJTJGZiUyRjElMkY=";
	const key = decodeURIComponent(
		Buffer.from(_key, "base64").toString("ascii")
	).replace(/\//g, "");
	return {
		headers: {
			"x-rapidapi-key": key,
		},
		params: {
			url,
			hd: 1,
		},
	};
}
async function v1(url: string): Promise<TiktokDownloadResult | errorHandling> {
	try {
		const { data } = await Axios.get(TiktokDownloadRapidApiServer + "/", {
			...RapidApiInit(url),
		}).catch((e: any) => e?.response);
		if (data && typeof data === "object") {
			if (data.code === 0) {
				return {
					nickname: data?.data?.author?.nickname,
					unique_id: data?.data?.author?.unique_id,
					download_count: data?.data?.download_count,
					duration: data?.data?.duration,
					description: data?.data?.title,
					play: data?.data?.play,
					wmplay: data?.data?.wmplay,
					hdplay: data?.data?.hdplay,
					music: data?.data?.music,
				};
			} else {
				throw new Error(
					data.message || `Failed to get data from ${TiktokDownloadRapidApiServer}`
				);
			}
		} else {
			throw new Error(
				data.message || `Failed to get data from ${TiktokDownloadRapidApiServer}`
			);
		}
	} catch (e: any) {
		return {
			error: true,
			message: String(e),
		};
	}
}
export const tiktok = async (url: string) => v1(url);
