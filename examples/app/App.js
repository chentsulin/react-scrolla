import React, { Component } from 'react';
import _ from 'lodash';
import ReactScrolla from 'react-scrolla';
import Item from './Item';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: _.range(100),
    };
    this.handleScrollToPercentage = this.handleScrollToPercentage.bind(this);
  }

  render() {
    return (
      <div>
        <ReactScrolla
          style={styles.scroll}
          percentage={85}
          onPercentage={this.handleScrollToPercentage}
        >
          {this.state.data.map((d, i) => {
            return (<Item key={i} data={d} />);
          })}
        </ReactScrolla>
      </div>
    );
  }

  handleScrollToPercentage() {
    this.setState({
      data: this.state.data.concat(_.range(100)),
    });
  }

}


const styles = {
  scroll: {
    textAlign: 'center',
    height: screen.height,
    overflow: 'auto',
  },
};


export default App;
