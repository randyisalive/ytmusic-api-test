import { useEffect, useState } from "react";
import { getUser } from "./async/async_function";

function useUserData(channelId) {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUser(channelId).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, []);

  return { user };
}

export default useUserData;
