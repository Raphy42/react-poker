/**
 * Created by rdantzer on 27/07/17.
 */

//@flow

export type GameState = {
  hands: number,
  turn: number,
  cards: string[],
  bank: number,
  currentPlayer: number
}

export const initialGameState: GameState = {
  hands: 0,
  turn: 0,
  cards: ['5H', '3S', 'KD', 'JC', 'TD'],
  bank: 0,
  currentPlayer: 0
};

export const gameHandlers = {
  'PRE_FLOP': ({ turn, ...state }) => ({
    turn: turn + 1,
    ...state
  }),
  'FLOP': ({ turn, ...state }, { cards }) => ({
    ...state,
    turn: turn + 1,
    cards
  }),
  'TURN': ({ turn, cards, ...state }, { card }) => ({
    turn: turn + 1,
    cards: [ ...cards, card ],
    ...state
  }),
  'RIVER': ({ turn, cards, ...state }, { card }) => ({
    turn: turn + 1,
    cards: [ ...cards, card ],
    ...state
  })
};