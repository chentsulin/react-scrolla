import React from 'react'

var styles = {
  item: {
    fontSize: 30,
    height: 40
  }
}

export default class App extends React.Component {

  render() {
    return (
      <div style={styles.item}>
        {this.props.data}
      </div>
    )
  }
}
