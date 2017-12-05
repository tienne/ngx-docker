import { Action } from '@app/core';

export const initialState = {
  swaggerInit: false,
  api: {}
};

export const CONTAINERS_KEY = 'CONTAINERS';
export const CONTAINERS_INIT = 'CONTAINERS_INIT';

export const actionContainersInit = (swagger: string) => ({
  type: CONTAINERS_INIT,
  payload: swagger
});


export const selectorContainers = state => state.containers;

export function containersReducer(state = initialState, action: Action) {
  switch (action.type) {

    default:
      return state;
  }
}
