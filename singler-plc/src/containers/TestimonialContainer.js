import { connect } from 'react-redux';
import Testimonial from '../components/Testimonial';

const mapStateToProps = (state) => {
  return {
    testimonials: state.testimonials
  }
};

export default connect(mapStateToProps)(Testimonial);
