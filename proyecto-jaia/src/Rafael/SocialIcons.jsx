import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons'
// import {
//   faGithubAlt,
//   faGoogle,
//   faFacebook,
//   faTwitter
// } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = ({ Icons }) => {
  
  return (
    <div className="text-teal-500">
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
        >
          <a href="http://www.google.com.pe" target="_blanc">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
        ><a href="http://www.google.com.pe" target="_blanc">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
        ><a href="http://www.google.com.pe" target="_blanc">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
        ><a href="http://www.google.com.pe" target="_blanc">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
        </span>
    </div>
   
  );
};


export default SocialIcons;


 // <div className="text-teal-500">
    //   {Icons.map((icon) => (
    //     <span
    //       key={icon.name}
    //       className="p-2 cursor-pointer inline-flex items-center
    //     rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
    //     duration-300"
    //     >
          
    //       {/* <FontAwesomeIcon icon={icon.rsocial} /> */}
    //       <img src="./rafael/imagen/icons8-facebook.svg" alt="" />
    //       {/* <FontAwesomeIcon icon={faFacebook} /> */}
          
         
    //      {/* <p>{icon.rsocial}</p>  */}
           
    //     </span>
    //   ))}
    // </div>