import { connect } from 'react-redux';
import OurFirm from '../components/OurFirm';

const mapStateToProps = (state) => {
  return {
    ourFirm: state.ourFirm
  }
};


export default connect(mapStateToProps)(OurFirm);
