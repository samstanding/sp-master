import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Nav from '../components/Nav/Nav';
import { fetchUser } from '../redux/actions/userActions';

// const propTypes = {
//   fetchUser: PropTypes.func,
//   user: PropTypes.shape({ userName: PropTypes.string, isLoading: PropTypes.bool }),
//   history: PropTypes.shape({ push: PropTypes.func }),
// };

// const defaultProps = {
//   fetchUser: () => {},
//   user: { userName: null, isLoading: true },
//   history: { push: () => {} },
// };

// const mapStateToProps = state => ({
//   user: state.user,
// });

// const mapDispatchToProps = {
//   fetchUser,
// };

class LandingPage extends Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  // componentDidUpdate() {
  //   if (!this.props.user.isLoading && this.props.user.userName === null) {
  //     this.props.history.push('home');
  //   }
  // }

  render() {
    // let content = null;

    // if (this.props.user.userName) {
    //   content = (
    //     <div>
    //       <p>
    //         Info Page
    //       </p>
    //     </div>
    //   );
    // }

    return (
      <div>
        <h2>Welcome this our landing page</h2>
        <h3>We have cluster flies and I....</h3>
      </div>
    );
  }
}

// LandingPage.propTypes = propTypes;
// LandingPage.defaultProps = defaultProps;

// this allows us to use <App /> in index.js
export default LandingPage;
