import React from 'react'
import styles from './manucategs.module.css'
import Link from 'next/link'

function MenuCategories() {
  return (
	<div className={styles.categoryList}>
	<Link href='/blog?cat=html' className={`${styles.categoryItem} ${styles.style}`}>html</Link>
	<Link href='/blog?cat=css' className={`${styles.categoryItem} ${styles.food}`}>css</Link>
	<Link href='/blog?cat=react' className={`${styles.categoryItem} ${styles.culture}`}>react js</Link>
	<Link href='/blog?cat=laravel' className={`${styles.categoryItem} ${styles.fashion}`}>laravel</Link>

    </div>
  )
}

export default MenuCategories
