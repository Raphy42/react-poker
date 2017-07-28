import { HandAction } from './hand'
import { GameAction } from './game'

export { start, end, preFlop, flop, turn, river } from './game'
export { check, raise, fold, allIn } from './hand'

export type Action = HandAction | GameAction
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Action[]) => any
export type GetState = () => Object
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any
export type PromiseAction = Promise<Action>
