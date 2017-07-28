/**
 * Created by rdantzer on 27/07/17.
 */

import { propOr, identity } from 'ramda'

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    return propOr(identity, action.type, handlers)(state, action)
  }
}

export function createAction(type, elements) {

}