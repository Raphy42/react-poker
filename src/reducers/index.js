/**
 * Created by rdantzer on 27/07/17.
 */

import { combineReducers } from 'redux'

import { createReducer } from '../utils/reducers'
import { initialGameState, gameHandlers } from './game'
import { initialHandState, handHandlers } from './hand'

const rootReducer = combineReducers({
  game: createReducer(initialGameState, gameHandlers),
  hand: createReducer(initialHandState, handHandlers)
});

export default rootReducer;
