import defaultActions from './defaultActions';

// const classes = {
//   all: 0,
//   demo: 4,
//   engineer: 6,
//   heavy: 5,
//   medic: 7,
//   pyro: 3,
//   scout: 1,
//   sniper: 8,
//   soldier: 2,
//   spy: 9,
// };

const tf2Classes = {
  all: 'all',
  demo: 'demo',
  engineer: 'engineer',
  heavy: 'heavy',
  medic: 'medic',
  pyro: 'pyro',
  scout: 'scout',
  sniper: 'sniper',
  soldier: 'soldier',
  spy: 'spy',
};

export const retry = {
  id: 'retry',
  keybinding: undefined,
  label: 'Retry/Reconnect',
  tf2Class: tf2Classes.all,
};

export const toggleViewmodels = {
  id: 'toggleViewmodels',
  keybinding: undefined,
  label: 'Toggle Viewmodels',
  tf2Class: tf2Classes.all,
};

export const uberBind = {
  id: 'uberBind',
  keybinding: undefined,
  label: 'Uber Bind',
  text: '',
  tf2Class: tf2Classes.medic,
};

export const rocketJumpScript = {
  id: 'rocketJumpScript',
  keybinding: undefined,
  label: 'Rocket Jump Script',
  tf2Class: tf2Classes.soldier,
};

export const uberBindInterpreter = ({ keybinding, text }) => ({
  actions: [
    defaultActions.attack2,
    {
      ...defaultActions.sayTeam,
      text,
    },
  ],
  keybinding,
});
