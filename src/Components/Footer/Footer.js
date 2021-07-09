import React from 'react';
import FooterCss from './Footer.module.css';

const Footer = () => {
     const Copyright = 
               <h2 variant="body2" align="center">
                    {'Copyright © '}

                    {' Drone Daily '}

                    {new Date().getFullYear()}
                    {'.'}
               </h2>

          return (
               <footer className={FooterCss.footer}>
                    <div>
                         {Copyright}
                    </div>
               </footer>
          )
     }

export default Footer;