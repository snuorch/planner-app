from pydantic import BaseModel

class TaskBase(BaseModel):
    title: str
    description: str | None = None
    day_of_week: int
    position: int

class TaskCreate(TaskBase):
    pass

class TaskUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    day_of_week: int | None = None
    position: int | None = None

class Task(TaskBase):
    id: int

    class Config:
        orm_mode = True
