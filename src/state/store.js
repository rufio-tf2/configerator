// import defaultState from './defaultState';
import mockState from './mockState';

const createAction = (type, payloadCreator) => {
  if (typeof payloadCreator === 'undefined') {
    return () => ({ type });
  }

  return (...args) => ({ payload: payloadCreator(...args), type });
};

export const clearStore = createAction('store/clear');

export const setUserOption = createAction('setOption', ({ id, ...rest }) => ({
  id,
  ...rest,
}));

export const getUserOptions = (state = {}) => state.options;

export const getAvailableOptions = (state = {}) => state.availableOptions;

let TMP_STATE = mockState; // TODO: Remove

const reducer = (state = TMP_STATE, action) => {
  switch (action.type) {
    case 'setOption':
      return {
        ...state,
        options: {
          ...state.options,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
