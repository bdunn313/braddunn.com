[@bs.module] external githubIcon: string = "./assets/github.svg"
[@bs.module] external mediumIcon: string = "./assets/medium.svg"
[@bs.module] external twitterIcon: string = "./assets/twitter.svg"

[@react.component]
let make = () =>
  <div>
    <SocialLink 
      url="https://github.com/bdunn313" 
      icon={githubIcon}
      title="Github" 
    />
    <SocialLink 
      url="https://medium.com/@bdunn313" 
      icon={mediumIcon} 
      title="Medium"
    />
    <SocialLink 
      url="https://twitter.com/@bdunn313" 
      icon={twitterIcon} 
      title="Twitter"
    />
  </div>;