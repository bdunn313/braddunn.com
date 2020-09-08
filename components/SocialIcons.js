import React from 'react';
import SocialLink from "./SocialLink";

import GithubIcon from "./assets/github.svg";
import MediumIcon from "./assets/medium.svg";
import TwitterIcon from "./assets/twitter.svg";
import styles from "../styles/SocialIcons.module.css";

const SocialIcons = () => 
  <div className={styles.socialIconsWrapper}>
    <SocialLink url="https://github.com/bdunn313" icon={GithubIcon} alt="Github Icon">Github</SocialLink>
    <SocialLink url="https://medium.com/@bdunn313" icon={MediumIcon} alt="Medium Icon">Medium</SocialLink>
    <SocialLink url="https://twitter.com/@bdunn313" icon={TwitterIcon} alt="Twitter Icon">Twitter</SocialLink>
  </div>;

export default SocialIcons;