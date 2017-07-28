/**
 * Created by rdantzer on 27/07/17.
 */

//@flow

type FoldAction = { type: 'FOLD' }
type RaiseAction = { type: 'RAISE', bid: number }
type CheckAction = { type: 'CHECK' }
type AllInAction = { type: 'ALL_IN' }
type DistributeAction = { type: 'DISTRIBUTE', cards: string[] }

export type HandAction = FoldAction | RaiseAction | CheckAction | AllInAction | DistributeAction;

export function fold(): FoldAction {
  return { type: 'FOLD' }
}

export function raise(bid: number): RaiseAction {
  return { type: 'RAISE', bid }
}

export function check(): CheckAction {
  return { type: 'CHECK' }
}

export function allIn(): AllInAction {
  return { type: 'ALL_IN' }
}

export function distribute(cards: string[]): DistributeAction {
  return { type: 'DISTRIBUTE', cards }
}