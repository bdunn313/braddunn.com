import React from 'react';
import SocialLink from '../components/SocialLink';
import RandomlyAnimated from '../components/RandomlyAnimated';

const IndexPage = () => (
  <div className="container">
    <h1>Hello there!</h1>
    <p>
      My name is Brad Dunn. I write code. Javascript mostly these days, but I
      have experience with all sorts of tech stuff.
    </p>
    <p>
      I'm currently the CTO of a startup working on a new app called{` `}
      <a href="https://epochlyapp.com/">Epochly</a>. You should check it out! :D
    </p>
    <p>
      I'm sorry if you were expecting a flashy webpage with all kinds of cool
      animations or a nice color palette, but I figured it would be better to
      just do something barebones. Bonus&mdash;It works on mobile
      out-of-the-box!
    </p>
    <p>Here's how you can find me online:</p>
    <hr />
    <RandomlyAnimated min={10} max={12}>
      <SocialLink name="github" />
    </RandomlyAnimated>
    <RandomlyAnimated min={7} max={20}>
      <SocialLink name="twitter" />
    </RandomlyAnimated>
    <RandomlyAnimated min={2} max={7}>
      <SocialLink name="medium" />
    </RandomlyAnimated>
  </div>
);

export default IndexPage;
