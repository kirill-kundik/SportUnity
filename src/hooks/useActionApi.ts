import useApi from './useApi'

export type UseActionApiProps<Req, Res> = {
	apiMethod: (props: Req) => Promise<any | void>,
	onSuccess?: (res: Res) => any,
	onError?: (err: any) => any,
}

export type UseActionApiReturn<Req> = [
	boolean,
	any,
	(props: Req) => any
]

export default function useActionApi<Req, Res>(
	props: UseActionApiProps<Req, Res>,
): UseActionApiReturn<Req> {

	const [res, loading, error, request] = useApi<Req, Res>({
		initialValue: undefined as any,
		...props,
	})
	return [loading, error, request]
}
