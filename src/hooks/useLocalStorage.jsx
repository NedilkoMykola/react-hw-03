import { useEffect, useState } from "react";



 export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => JSON.parse(localStorage.getItem(key)) ?? defaultValue);

    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
    }, [state, key])

  return [state, setState]
}