import type { RenderOptions, Screen } from '@testing-library/react';
import type { ReactElement } from 'react';

import { render, queries, within, screen } from '@testing-library/react';

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
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { queries: allQueries, ...options });

export * from '@testing-library/react';
export {
  customScreen as screen,
  customWithin as within,
  customRender as render,
};
