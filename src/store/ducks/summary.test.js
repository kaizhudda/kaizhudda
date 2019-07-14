import summaryReducer, { FETCH_SUMMARY_DATA } from './summary';

describe('summary reducer', () => {
  const summaryData = { fields: { description: '', subtitle: '' } };

  describe('when init', () => {

    it('should set summaryData to default state', () => {
      const actuaReducer = summaryReducer([], {});

      expect(actuaReducer).toEqual([]);
    });


  });

  it('should set the summary data', () => {
    const actuaReducer = summaryReducer([], { type: FETCH_SUMMARY_DATA, payload: summaryData });

    expect(actuaReducer).toEqual(summaryData);
  });
});
