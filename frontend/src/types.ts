export interface Task {
  id: number;
  title: string;
  description?: string;
  day_of_week: number;
  position: number;
}

export interface TaskCreate {
  title: string;
  description?: string;
  day_of_week: number;
  position: number;
}

export interface TaskUpdate {
  title?: string;
  description?: string;
  day_of_week?: number;
  position?: number;
}
