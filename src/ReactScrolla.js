import React, { Component, PropTypes } from 'react';


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

  handleScroll() {
    const { isLoading, percentage, onPercentage } = this.props;

    if (isLoading) return;

    const container = React.findDOMNode(this.refs.scrollContainer);

    const { scrollTop, scrollHeight, clientHeight } = container;

    if (percentage && onPercentage) {
      const percentNow = (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (percentNow > percentage) {
        onPercentage();
      }
    }
  }
}


export default ReactScrolla;

