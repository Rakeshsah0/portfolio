import React from 'react';
import {BsInstagram,BsLinkedin,BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/Rakeshsah0" target='_blank'>
      <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/rakesh-sah-b71b7a17b/" target='_blank'>
      <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/rakesh.sah.188478/" target='_blank'>
      <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/r_a_k_e_s_h_s_a_h/" target='_blank'>
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;