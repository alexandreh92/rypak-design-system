import {
  queryHelpers,
  buildQueries,
  Matcher,
  MatcherOptions,
} from '@testing-library/react';

const queryAllById = (
  container: HTMLElement,
  id: Matcher,
  options?: MatcherOptions | undefined
) => queryHelpers.queryAllByAttribute('id', container, id, options);

const getMultipleError = (c: Element | null, idValue: Matcher) =>
  `Found multiple elements with the id: ${idValue}`;
const getMissingError = (c: Element | null, idValue: Matcher) =>
  `Unable to find an element with the id: ${idValue}`;

const [queryById, getAllById, getById, findAllById, findById] = buildQueries(
  queryAllById,
  getMultipleError,
  getMissingError
);

export { queryById, queryAllById, getById, getAllById, findAllById, findById };
