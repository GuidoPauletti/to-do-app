import Constants from "expo-constants";

const { manifest } = Constants;


const url = `http://${manifest.debuggerHost.split(':').shift()}:3000/tasks`;

export const GetTasks = async () => {
    const res = await fetch(url)
    return await res.json();
}

export const getTask = async(id) => {
    const res = await fetch(`${url}/${id}`)
    return await res.json()
}

export const saveTask = async (newTask) => {
    const res = await fetch(url, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
    });
    return await res.json();
}

export const updateTask = async(id, Task) => {
    const res = await fetch(`${url}/${id}`,
    {
        method: "PUT",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(Task)
    });
    return res
}

export const deleteTask = async(id) => {
    await fetch(
        `${url}/${id}`,
        {
            method: "DELETE"
        }
    )
}