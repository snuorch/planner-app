from sqlalchemy import Column, Integer, String
from database import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String, nullable=True)
    day_of_week = Column(Integer)  # 0 = lunedì, 6 = domenica
    position = Column(Integer, default=0)
