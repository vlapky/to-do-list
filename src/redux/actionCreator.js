import { ADD_TASK, REMOVE_TASK, CHANGE_FLAG } from './constants'

export const AddTask = (text) => ({
  type: ADD_TASK,
  text,
  flag: false,
})

export const RemoveTask = (index) => ({
  type: REMOVE_TASK,
  index,
})

export const ChangeFlag = (index) => ({
  type: CHANGE_FLAG,
  index,
})
