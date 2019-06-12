import { client } from '../../utils/contentfulClient';
// Actions
export const FETCH_SUMMARY_DATA = 'data/FETCH_SUMMARY_DATA';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_SUMMARY_DATA:
      return action.payload;
    default: return state;
  }
}

// Action Creators
export const fetchSummary = () => async dispatch => {
  client.getEntries({ 'content_type': 'summary' })
    .then((response) => {
      console.log('RESPONSE', response);
      dispatch({
        type: FETCH_SUMMARY_DATA,
        payload: response.items
      });
    }) 
};