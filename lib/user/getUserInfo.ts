import type { APIFn } from 'lib/types';
import { fetcher } from 'lib/utils/fetcher';

type ReturnData = {
	cookie_id: string;
	id: number;
	last_activity: string;
	name: string;
	profile?: any;
	profile_data: {
		avatar: string;
		created_at: string;
		email: string;
		first_name: string;
		id: number;
		last_name: string;
		personal_id_number: string;
		phone_number: string;
		updated_at: string;
		user_id: number;
	};
	state: Record<string, unknown>;
};

/**
 * @see https://api.idcloudhost.com/#get-user-info
 */
export const getUserInfo: APIFn<ReturnData> = async (apiKey: string) => {
	const { ok, status, statusText, headers, json } = await fetcher.get(
		apiKey,
		'user-resource/user',
	);

	const data = await json<ReturnData>();

	return {
		ok,
		status,
		statusText,
		headers,
		data,
	};
};
