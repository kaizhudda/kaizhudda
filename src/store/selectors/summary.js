import { createSelector } from 'reselect';

const summary = (state) => state.summary;

export const summaryData = createSelector(
    summary,
    summary => summary[0] && summary[0]
);
