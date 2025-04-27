import type { RenderOptions, Screen } from '@testing-library/react';
import type { ReactElement } from 'react';

import { render, queries, within, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as customQueries from './customQueries';

const allQueries = {
  ...queries,
  ...customQueries,
};

const boundQueries = within<typeof allQueries>(document.body, allQueries);

const customScreen: Screen & typeof boundQueries = {
  ...screen,
  ...boundQueries,
};
const customWithin = (element: HTMLElement) => within(element, allQueries);
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { queries: allQueries, ...options });

const debug: (typeof screen)['debug'] = (
  element = undefined,
  maxLength = Infinity,
) => screen.debug(element, maxLength);

export * from '@testing-library/react';
export {
  customScreen as screen,
  customWithin as within,
  customRender as render,
  debug,
  userEvent,
};
