// import  { createStore } from 'redux'
import { createStore } from '@reduxjs/toolkit'
import combineStore from './store/combineStore'

const store = createStore(combineStore)

export default store