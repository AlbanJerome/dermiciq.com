import { useState, useEffect, useCallback } from "react";

const currentLocation = () => {
  return window.location.hash.replace(/^#/, "") || "/";
};

const navigate = (to: string) => {
  window.location.hash = to;
};

export const useHashLocation = (): [string, (to: string) => void] => {
  const [location, setLocation] = useState(currentLocation());

  useEffect(() => {
    const handler = () => setLocation(currentLocation());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const setHashLocation = useCallback((to: string) => {
    navigate(to);
  }, []);

  return [location, setHashLocation];
};
