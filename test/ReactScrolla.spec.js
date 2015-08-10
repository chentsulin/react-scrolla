import React, { addons } from 'react/addons';
import { expect } from 'chai';
import { spy } from 'sinon';
import ReactScrolla from '../';
import jsdom from 'mocha-jsdom';


const { TestUtils } = addons;

describe('ReactScrolla', function() {
  this.timeout(60000);

  jsdom();

  it('onPercentage should be called ', () => {
    const callback = spy();
    const rootNode = TestUtils.renderIntoDocument(
      <ReactScrolla onPercentage={callback}>
        <div>test</div>
      </ReactScrolla>
    );

    const rootDomNode = React.findDOMNode(rootNode);
    rootDomNode.scrollHeight = 4400;
    rootDomNode.clientHeight = 400;
    rootDomNode.scrollTop = 3601;

    TestUtils.Simulate.scroll(rootDomNode, {
      target: rootDomNode,
    });

    expect(callback.called).to.be.true;
  });


  xit('should throw when percentage >= 100', () => {

  });

});

