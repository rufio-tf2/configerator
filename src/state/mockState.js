import options from './options';

const defaultState = {
  availableOptions: options,
  user: {
    gamePath: undefined,
    options: {
      [options.uberBind.id]: {
        ...options.uberBind,
        keybinding: 'MOUSE4',
        text: 'Uber Popped!!!',
      },
    },
  },
};

export default defaultState;
