import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import useSWR, { useSWRConfig, MutatorOptions } from "swr";

export const getUser = async () => {
	const user = await getSession();
	return user;
};

const useUser = () => {
	const { mutate } = useSWRConfig();
	const { data, isValidating, error } = useSWR("getUser", getUser);

	const logout = () => {
		const options: MutatorOptions<Session> = {
			optimisticData: null,
			rollbackOnError: true,
			populateCache: false,
			revalidate: false,
		};
		mutate("getUser", signOut({ redirect: false }), options);
	};

	return { user: data, isLoading: isValidating, error, logout };
};

export default useUser;
