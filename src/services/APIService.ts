import axios from "axios";
import type { FeedBack } from "../context/feedbackModel";

export const API_URL = import.meta.env.VITE_API_URL;

export async function postFeedback(): Promise<FeedBack[]> {
  const response = await axios.post<FeedBack[]>(`${API_URL}/feedback`);
  return response.data;
}
