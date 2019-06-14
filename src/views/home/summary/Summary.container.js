import { connect } from 'react-redux';
import { fetchSummary } from '../../../store/ducks/summary';
import { summaryData } from '../../../store/selectors/summary';
import Summary from './Summary';

const mapStateToProps = state => ({
    summaryData: summaryData(state)
});


export default connect(mapStateToProps, { fetchSummary })(Summary);
