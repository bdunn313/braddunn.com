import React from 'react';

import './index.scss';
import medium from './medium.svg';
import github from './github.svg';
import twitter from './twitter.svg';

const getInfo = name => {
  switch (name) {
    case 'medium':
      return {
        url: 'https://medium.com/@bdunn313',
        handle: '@bdunn313',
        icon: medium,
      };
    case 'github':
      return {
        url: 'https://github.com/bdunn313',
        handle: 'bdunn313',
        icon: github,
      };
    case 'twitter':
      return {
        url: 'https://twitter.com/bdunn313',
        handle: '@bdunn313',
        icon: twitter,
      };
    default:
      return null;
  }
};

const SocialLink = ({ name }) => {
  const { url, icon } = getInfo(name);

  return (
    <a href={url} className="social-link">
      <img src={icon} width={40} height={40} />
      {name}
    </a>
  );
};

export default SocialLink;
