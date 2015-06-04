'use strict'

import React from 'react'


export default class ReactScrolla extends React.Component {

	constructor(props) {
    super(props)
    this.state = {}
  }


	handleScroll() {
		var { isLoading, percentage, onPercentage } = this.props

		if (isLoading) return

		var container = React.findDOMNode(this.refs.scrollContainer)

		var { scrollTop, scrollHeight, clientHeight } = container

		var percentNow = (scrollTop / (scrollHeight - clientHeight) * 100

		if (onPercentage && (percentNow > percentage)) {
			onPercentage()
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

}

ReactScrolla.defaultProps = {

}

