/**
 * Created by rdantzer on 27/07/17.
 */

//@flow

export type HandState = {
  cards: string[],
  balance: number,
  isFolded: boolean
};

export const initialHandState: HandState = {
  cards: [],
  balance: 0,
  isFolded: false
};

export const handHandlers = {
  'CHECK': state => state,
  'RAISE': ({ balance, ...state }, { bid }) => ({ ...state, balance: balance - bid }),
  'FOLD': state => ({ ...state, isFolded: true }),
  'ALL_IN': state => ({ ...state, balance: 0 }),
  'DISTRIBUTE': (state, { cards }) => ({ ...state, cards })
};