import { Router } from "express";
import { countTasks, deleteTask, getTask, getTasks, saveTask, updateTask } from "../controllers/tasks";

const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/count', countTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', saveTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', updateTask);

export default router;