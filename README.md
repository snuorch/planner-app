# planner-app

# backend
from main folder
python3 -m venv .venv

activate the virtual environment
source .venv/bin/activate

with .venv active
cd backend
pip install "uvicorn[standard]" fastapi sqlalchemy

keep track of installed libraries
pip freeze > requirements.txt

uvicorn main:app --reload

# frontend
cd frontend
npm init vite@latest . -- --template react-ts
npm install axios react-beautiful-dnd
npm run dev

