import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AddUserForm from '../my-todo/containers/AddUser'
import VisibleList from '../my-todo/containers/VisibleList'

import index from '../my-todo/reducers/index'



let store = createStore(index);

const appTarget = document.createElement('div');
document.body.appendChild(appTarget);
render(
    <Provider store={store}>
     <AddUserForm />
     <VisibleList />
</Provider>, appTarget);
