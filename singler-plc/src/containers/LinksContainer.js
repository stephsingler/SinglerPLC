import { connect } from 'react-redux';
import Links from '../components/Links';

const mapStateToProps = (state) => {
  return {
    franchises: state.franchises,
    governments: state.governments,
    legal: state.legal,
    records: state.records
  }
};

export default connect(mapStateToProps)(Links);
