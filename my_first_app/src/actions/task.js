export const ADD_TASK = "ADD_TASK";
export const CHANGE_STATUS = "CHANGE_STATUS";

export const handleAddTask = task => ({
    type: ADD_TASK,
    payload: task
})

export const handleChangeStatus = taskData => ({
    type: CHANGE_STATUS,
    payload: taskData
})