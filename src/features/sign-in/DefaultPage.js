import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class DefaultPage extends Component {
  static propTypes = {
    signIn: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: ''
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(email) {
    this.setState({
      email: email.target.value
    });
  }

  handlePasswordChange(password) {
    this.setState({
      password: password.target.value
    });
  }

  render() {
    const { password, email } = this.state;

    return (
      <div className='sign-in-default-page'>
        This is the sign in page
        <input className='sign-in-default-page__input' onChange={ this.handleEmailChange } placeholder='email' />
        <input className='sign-in-default-page__input' onChange={ this.handlePasswordChange } placeholder='password' type='password' />
        <button className='sign-in-default-page__button' onClick={() => { this.props.actions.setEmail(email); this.props.actions.setPassword(password); }}>Sign In</button>
        typed email: { this.props.signIn.email }
        <br />
        typed password: { this.props.signIn.password }
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    signIn: state.signIn,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
