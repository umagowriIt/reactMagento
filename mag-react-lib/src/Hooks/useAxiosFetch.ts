import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import axiosInstance from "../axios/axiosInstance";

export function useAxiosFetch<T = unknown>(
  url: string,
  params?: Record<string, any>,
  token?: string
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    axiosInstance
      .get<T>(url, {
        params,
        headers: token
          ? { Authorization: `Bearer ${token}` }
          : undefined,
      })
      .then((response: AxiosResponse<T>) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url, JSON.stringify(params), token]);

  return { data, loading, error };
}