import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import ThemeToggle from '../themeToggle/ThemeToggle'
import Link from 'next/link'
import AuthLinks from '../AuthLinks/AuthLinks'
function Navbar() {
  return (
	<div className={styles.container}>
	{/* <div className={styles.social}>
		<Image src='/facebook.png' width={24} height={24} alt='facebookLogo'/>
		<Image src='/tiktok.png' width={24} height={24} alt='tiktokLogo'/>
		<Image src='/instagram.png' width={24} height={24} alt='instagramLogo'/>
		<Image src='/youtube.png' width={24} height={24} alt='youtubeLogo'/>
	</div> */}
	<div className={styles.logo}>ZakBlogs </div>
	<div className={styles.links}>
		<ThemeToggle/>
		
		
		<AuthLinks/>




	</div>
	<div className={styles.dashboard}></div>
	  
	</div>
  )
}

export default Navbar
