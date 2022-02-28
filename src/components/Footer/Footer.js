import React from 'react'
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.logo}>Movie App</div>
      <div className={style.text}>2022 @ All rights are reserved</div>
    </div>
  );
}

export default Footer;