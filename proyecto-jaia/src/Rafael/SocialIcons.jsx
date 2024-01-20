import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// import {
//   faGithubAlt,
//   faGoogle,
//   faFacebook,
//   faTwitter
// } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = ({ Icons, link, rsocial }) => {
  
  return (
    
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
        >
          
          {/* <FontAwesomeIcon icon={icon.rsocial}/> */}
          
          <FontAwesomeIcon icon={faFacebook} />
          {/* <ion-icon name={icon.name}></ion-icon>
          */}
         {/* <p>{icon.rsocial}</p>  */}
           
        </span>
      ))}
    </div>
  );
};


export default SocialIcons;
