import { connect } from 'react-redux';
import CurrentQuote from './CurrentQuote';
import { toggleLike, setCurrentQuote } from '../../actions/QuotesActionCreators.js';

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLike: (feedName, id) => {
      dispatch(toggleLike(feedName, id));
    },
    setCurrentQuote: id => {
      dispatch(setCurrentQuote(id));
    }
  };
};

const CurrentQuoteContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(CurrentQuote);

export default CurrentQuoteContainer;
