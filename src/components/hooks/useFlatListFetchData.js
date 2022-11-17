import { useContext, useEffect } from "react";

const useFlatListFetchData = (
    appServiceContext,
    getData,
    userEmail,
    isRefreshing
) => {
    const apiService = useContext(appServiceContext);

    useEffect(() => {
        if (isRefreshing) {
            getData(apiService)(userEmail);
        }
    }, [isRefreshing]);
};

export default useFlatListFetchData;
