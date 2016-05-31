import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';

class ReactScrolla extends Component {

  static propTypes = {
    isLoading: PropTypes.bool,
    percentage: PropTypes.number,
    onPercentage: PropTypes.func,
    children: PropTypes.node,
  };

  static defaultProps = {
    isLoading: false,
    percentage: 90,
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const { isLoading, percentage, onPercentage } = this.props;

    if (isLoading) return;

    const container = ReactDom.findDOMNode(this.refs.scrollContainer);

    const { scrollTop, scrollHeight, clientHeight } = container;

    if (percentage && onPercentage) {
      const percentNow = (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (percentNow > percentage) {
        onPercentage();
      }
    }
  }

  render() {
    return (
      <div
        onScroll={this.handleScroll}
        ref="scrollContainer"
        {...this.props}
      >
        {this.props.children}
      </div>
    );
  }
}


export default ReactScrolla;
