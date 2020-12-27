import { ADD_TASK, REMOVE_TASK, CHANGE_FLAG } from '../constants'

const initialState = [
  {
    text: 'First Task',
    flag: true,
  },
  {
    text: 'Second Task',
    flag: false,
  },
  {
    text: 'Third Task',
    flag: true,
  },
]

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const text = action.text
      const flag = action.flag
      return state.concat([{ text, flag }])
    case REMOVE_TASK:
      return state.filter((item, index) => index !== action.index)
    case CHANGE_FLAG:
      return state.map((item, index) => {
        if (index === action.index) {
          item.flag = !item.flag
        }
        return item
      })
    default:
      return state
  }
}

export default tasks
