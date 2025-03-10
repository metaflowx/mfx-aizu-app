import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchLiveOrders = async () => {
  const response = await axios.get("http://154.61.76.113:5666/GetLiveOrders");
  return response.data;
};

const fetchOrders = async () => {
  const response = await axios.get("http://154.61.76.113:5666/GetOrders");
  return response.data;
};

export const useLiveOrders = () => {
  return useQuery({
    queryKey: ["liveOrders"],
    queryFn: fetchLiveOrders,
    staleTime: 1000 * 60, // 1 min cache
    refetchInterval: 5000, // Auto-refetch every 5 seconds
  });
};

export const useOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    staleTime: 1000 * 60, // 1 min cache
    refetchInterval: 10000, // Auto-refetch every 10 seconds
  });
};
