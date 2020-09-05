import { combineReducers } from 'redux'
import updateUserList from './updateUserList'
import setButtonName from './setButtonName'
const todoApp = combineReducers({
    updateUserList,
    setButtonName
});

export default todoApp
