import React from 'react';
import GithubIcon from "./assets/github.svg";
import MediumIcon from "./assets/medium.svg";
import TwitterIcon from "./assets/twitter.svg";

const SocialLink = ({url, icon, size = 40, alt, children}) => 
    <a href={url} className="social-link" title={children}>
      <img src={icon} width={size} height={size} alt={alt} />
    </a>;
    
export default SocialLink;