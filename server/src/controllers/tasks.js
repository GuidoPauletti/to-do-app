import { connect } from "../database";

/**
 * @swagger
 * /tasks:
 * get:
 * summary: select all tasks
 */
export const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks_table")
    res.json(rows)
};

export const countTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) FROM tasks_table")
    res.json(rows[0]["COUNT(*)"])
};

export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks_table WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
};



export const saveTask = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query("INSERT INTO tasks_table (title, descript) VALUES (?, ?)", [
        req.body.title,
        req.body.descript
    ])
    res.json({
        id: results.insertId,
        ...req.body
    })
};

export const deleteTask = async (req, res) => {
    const connection = await connect();
    await connection.query("DELETE FROM tasks_table WHERE id = ?",[
        req.params.id
    ])
    res.sendStatus(204)
};



export const updateTask = async (req, res) => {
    const connection = await connect();
    await connection.query("UPDATE tasks_table SET ? WHERE id = ?", [
        req.body,
        req.params.id
    ])
    res.sendStatus(204)
};

