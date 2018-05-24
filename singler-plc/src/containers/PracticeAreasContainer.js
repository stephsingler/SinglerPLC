import { connect } from 'react-redux';
import PracticeAreas from '../components/PracticeAreas';

const mapStateToProps = (state) => {
  return {
    practiceAreas: state.practiceAreas
  }
};

export default connect(mapStateToProps)(PracticeAreas);
