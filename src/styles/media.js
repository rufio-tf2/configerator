import { isNumber } from '../util';
import theme from './theme';

const ascBreakpointPairs = Object.entries(theme.breakpoints).sort(
  ([, valueA], [, valueB]) => valueA - valueB
);

const breakpointBounds = {};

for (let index = 0; index < ascBreakpointPairs.length; index += 1) {
  const [curBreakpoint, minWidth] = ascBreakpointPairs[index];
  const maxWidth =
    index === ascBreakpointPairs.length - 1
      ? Number.POSITIVE_INFINITY
      : ascBreakpointPairs[index + 1][1] - 1; // One less than the value of the next

  breakpointBounds[curBreakpoint] = [minWidth, maxWidth];
}

const only = breakpointName => {
  const [minWidth, maxWidth] = breakpointBounds[breakpointName];

  return `@media (min-width: ${minWidth / 16}em) and (max-width: ${maxWidth /
    16}em)`;
};

const atLeast = minWidth => `@media (min-width: ${minWidth / 16}em)`;

const media = {
  atLeast(breakpoint) {
    return atLeast(
      isNumber(breakpoint) ? breakpoint : theme.breakpoints[breakpoint]
    );
  },
  only,
};

export default media;
