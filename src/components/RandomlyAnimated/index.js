import React, { Children } from 'react';
import random from 'lodash/random';
import sample from 'lodash/sample';

import './index.scss';
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

const animations = [
  'bounce',
  'flash',
  'pulse',
  'shake',
  'headShake',
  'swing',
  'tada',
  'wobble',
  'jello',
];

const getRandomAnimation = () => sample(animations);

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
    const animation = this.props.animation
      ? this.props.animation
      : getRandomAnimation();
    const animationClasses = this.state.animating
      ? `animated ${animation}`
      : '';
    return (
      <div
        className={animationClasses}
        style={{ display: this.props.inline ? 'inline-block' : 'block' }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default RandomlyAnimated;
