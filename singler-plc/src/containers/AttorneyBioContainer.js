import { connect } from 'react-redux';
import AttorneyBio from '../components/AttorneyBio';

const mapStateToProps = (state) => {
    return {
        ourAttorneys: state.ourAttorneys
    }
};
export default connect(mapStateToProps)(AttorneyBio);
