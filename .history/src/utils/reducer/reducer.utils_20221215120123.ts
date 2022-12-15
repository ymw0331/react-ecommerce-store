import { AnyAction } from 'redux';

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};


export const createAction = (type, payload) => ({ type, payload });
