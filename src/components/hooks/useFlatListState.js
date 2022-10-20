import { useState, useEffect } from "react";

const useFlatListState = () => {
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [endReachCounter, setEndReachCounter] = useState(1);

  useEffect(() => {
    console.log("useFlatListState");
    if (isRefreshing) {
      setIsRefreshing(false);
      setEndReachCounter(1);
    }
  }, [isRefreshing]);

  return [isRefreshing, setIsRefreshing, endReachCounter, setEndReachCounter];
};

export default useFlatListState;
