import React from 'react'
import SocialLink from '../components/SocialLink'

const IndexPage = () => (
  <div className="container">
    <h1>Hello there!</h1>
    <p>
      My name is Brad Dunn. I write code. Javascript mostly these days, but I
      have experience with all sorts of tech stuff.
    </p>
    <p>
      I'm currently the CTO of a startup working on a new app called{' '}
      <a href="https://epochlyapp.com/">Epochly</a>. You should check it out! :D
    </p>
    <p>
      I'm sorry if you were expecting a flashy webpage with all kinds of cool
      animations or a nice color palette, but I figured it would be better to
      just do something a bit barebones. Bonus! It works on mobile
      out-of-the-box!
    </p>
    <p>Here's how you can find me online</p>
    <hr />
    <SocialLink name="github" />
    <SocialLink name="twitter" />
    <SocialLink name="medium" />
    <hr />
    <p>That's all folks!</p>
  </div>
)

export default IndexPage
