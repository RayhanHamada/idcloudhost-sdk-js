import type { KyResponse } from 'ky';

type FilteredKyResponse = Pick<
    KyResponse,
    'ok' | 'status' | 'statusText' | 'headers'
>;
type APIFnReturnData<ReturnData extends Record<string, unknown>> =
    FilteredKyResponse & {
        data?: ReturnData;
    };

export type APIFn<
    ReturnData extends Record<string, unknown>,
    Payload extends
        | string
        | number
        | boolean
        | Record<string, unknown>
        | undefined = undefined
> = Payload extends undefined
    ? (apiKey: string) => Promise<APIFnReturnData<ReturnData>>
    : (
          apiKey: string,
          payload: Payload
      ) => Promise<APIFnReturnData<ReturnData>>;

export type PayloadOf<Fn extends APIFn<any, any>> = Parameters<Fn>[1];
