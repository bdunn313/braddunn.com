[@bs.module] external githubIcon: string = "./assets/github.svg";
[@bs.module] external mediumIcon: string = "./assets/medium.svg";
[@bs.module] external twitterIcon: string = "./assets/twitter.svg";


type styleObject = { socialIconWrapper: string };
[@bs.module] external styles: styleObject = "./SocialIcons.module.css";

[@react.component]
let make = () =>
  <div className={styles.socialIconWrapper}>
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