import { connect } from 'react-redux';
import Attorneys from '../components/Attorneys';

const mapStateToProps = (state) => {
  return {
    ourAttorneys: state.ourAttorneys
  }
};
export default connect(mapStateToProps)(Attorneys);
