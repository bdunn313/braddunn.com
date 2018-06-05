import React, { Children } from 'react';
import random from 'lodash/random';

/**
 * Create and return the id of a randomly executing timeout.
 * I really didn't have to make this but i was having fun.
 *
 * @param {number} minSeconds
 * @param {number} maxSeconds
 * @param {Function} cb
 * @returns {number} ID of the timeout
 */
const createRandomTimeout = (minSeconds, maxSeconds, cb) =>
  setTimeout(cb, random(minSeconds * 1000, maxSeconds * 1000));

class RandomlyAnimated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
    };
    createRandomTimeout(props.min, props.max, this.toggleAnimation);
  }

  toggleAnimation = () => {
    this.setState({ animating: !this.state.animating }, () =>
      createRandomTimeout(this.props.min, this.props.max, this.toggleAnimation)
    );
  };

  render() {
    const animation = this.props.animation ? this.props.animation : 'shake';
    return (
      <div className={this.state.animating ? `animated ${animation}` : ''}>
        {this.props.children}
      </div>
    );
  }
}

export default RandomlyAnimated;
