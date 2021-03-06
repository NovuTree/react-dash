import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { parseQuote } from '../../../utilities';

const Form = styled.form`
  input {
    width: 454px;
    margin-top: 20px;
    padding-bottom: 20px;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.grey};
    color: ${({ theme }) => theme.white};
    background: transparent;
    &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.white};
    }
  }
`;

const propTypes = {
  activeTab: PropTypes.string.isRequired
};

class NewQuote extends Component {
  componentDidMount() {
    this.newQuote.focus();
  }
  handleSubmit(event) {
    event.preventDefault();
    const { activeTab, onAddQuote } = this.props;
    const [text, source] = parseQuote(this.newQuote.value);
    
    if (text && source) {
      onAddQuote(activeTab, text, source);
      this.newQuote.value = '';
    }
    // TODO: Add user notification
  }

  render() {
    return (
      <Form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          ref={(input) => this.newQuote = input}
          type="text"
          placeholder="New quote - source"
        />
      </Form>
    );
  }
}

NewQuote.propTypes = propTypes;

export default NewQuote;
