import React from "react";
import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '@/assets/icons/logo.svg'

const Logo = () => {
 return (
  <div className={styles.wrapper}>
   <Image className={styles.logo} src={logo.src} width={50} height={50} alt="Logo" />
   <div>
    <p className={styles.title}>Phone Status Bot</p>
    <p className={styles.subtitle}>by <a href="https://headmade.pro/" target="_blank">HeadMade</a></p>
   </div>
  </div>
 )
}

export default Logo;
