import axios from "axios";
import type { Task, TaskCreate, TaskUpdate } from "./types";

const API_URL = "http://localhost:8000";

export async function getTasks(): Promise<Task[]> {
  const res = await axios.get(`${API_URL}/tasks`);
  return res.data;
}

export async function createTask(task: TaskCreate): Promise<Task> {
  const res = await axios.post(`${API_URL}/tasks`, task);
  return res.data;
}

export async function updateTask(id: number, updates: TaskUpdate): Promise<Task> {
  const res = await axios.put(`${API_URL}/tasks/${id}`, updates);
  return res.data;
}
