import { Machine } from 'xstate';

import options from './options';

const context = new Set([options.uberBind]);

const keybindingFormMachine = Machine({
  /* eslint-disable sort-keys */
  id: 'keybinding-form',
  context,
  initial: 'focused',
  state: {
    focused: {
      on: {},
    },
    changed: {},
    valid: {},
  },
  /* eslint-ensable sort-keys */
});
