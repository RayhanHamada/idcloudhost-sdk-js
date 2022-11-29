import type { APIFn } from 'lib/types';
import { fetcher } from 'lib/utils/fetcher';

type ReturnData = {
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

type Payload = {
	/**
   * @description First name
   */
	first_name: string;

	/**
   * @description Last name
   */
	last_name: string;

	/**
   * @description Phone number in any format
   */
	phone_number: string;

	/**
   * @description Personal identity number, usually issued by the state
   */
	personal_id_number: string;
};

/**
 * @see https://api.idcloudhost.com/#modify-profile-info
 */
export const modifyUserInfo: APIFn<ReturnData, Payload> = async (
	apiKey: string,
	payload,
) => {
	const { ok, status, statusText, json, headers } = await fetcher.patch(
		apiKey,
		'user-resource/user',
		payload,
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
