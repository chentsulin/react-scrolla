'use strict'

import React from 'react'


export default class ReactScrolla extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.handleScroll = this.handleScroll.bind(this)
  }


  handleScroll() {
    var { isLoading, percentage, onPercentage } = this.props

    if (isLoading) return

    var container = React.findDOMNode(this.refs.scrollContainer)

    var { scrollTop, scrollHeight, clientHeight } = container

    if (percentage && onPercentage) {
      var percentNow = (scrollTop / (scrollHeight - clientHeight)) * 100

      if (percentNow > percentage) {
        onPercentage()
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
    )
  }
}

ReactScrolla.propTypes = {
  isLoading: React.PropTypes.bool,
  percentage: React.PropTypes.number,
  onPercentage: React.PropTypes.func
}

ReactScrolla.defaultProps = {
  isLoading: false,
  percentage: 90
}

