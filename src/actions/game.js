/**
 * Created by rdantzer on 27/07/17.
 */

//@flow

type StartTurnAction = { type: 'START_TURN', cards: string[] };
type EndTurnAction = { type: 'END_TURN' };
type PreFlopAction = { type: 'PRE_FLOP' };
type FlopAction = { type: 'FLOP', cards: string[] };
type TurnAction = { type: 'TURN', card: string };
type RiverAction = { type: 'RIVER', card: string };

export type GameAction = StartTurnAction
  | PreFlopAction
  | FlopAction
  | TurnAction
  | RiverAction
  | EndTurnAction;

export function start(cards: string[]): StartTurnAction {
  return { type: 'START_TURN', cards }
}

export function end(): EndTurnAction {
  return { type: 'END_TURN' }
}

export function preFlop(): PreFlopAction {
  return { type: 'PRE_FLOP' }
}

export function flop(cards: string[]): FlopAction {
  return { type: 'FLOP', cards }
}

export function turn(card: string): TurnAction {
  return { type: 'TURN', card }
}

export function river(card: string): RiverAction {
  return { type: 'RIVER', card }
}