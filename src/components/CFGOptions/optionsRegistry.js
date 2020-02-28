import React from 'react';

import UberBind from './UberBind';

const Tmp = ({ label }) => <span>{label}</span>;

const options = [
  { id: 'uberBind', label: 'Uber Bind' },
  { id: 'rocketJump', label: 'Rocket Jump Script' },
  { id: 'viewmodel', label: 'Viewmodel Switcher' },
];

const getOptionComponent = id => {
  switch (id) {
    case 'uberBind':
      return UberBind;
    case 'rocketJump':
      return Tmp;
    case 'viewmodel':
      return Tmp;
    default:
      return () => {
        return null;
      };
  }
};

export { getOptionComponent, options };
