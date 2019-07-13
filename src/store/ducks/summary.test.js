import summaryReducer, { FETCH_SUMMARY_DATA } from './summary';

describe('summary reducer', () => {

  describe('when init', () => {
    const summaryData = { fields: { description: '', subtitle: '' } };

    it('should set summaryData to default state', () => {
      const actuaReducer = summaryReducer([], {});

      expect(actuaReducer).toEqual([]);
    });

    it('should set the summary data', () => {
      const actuaReducer = summaryReducer([], { type: FETCH_SUMMARY_DATA, payload: summaryData });

      expect(actuaReducer).toEqual(summaryData);
    });

  });
});
