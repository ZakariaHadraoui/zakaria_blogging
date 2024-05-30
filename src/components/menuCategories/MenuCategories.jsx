import React from 'react'
import styles from './manucategs.module.css'
import Link from 'next/link'

function MenuCategories() {
  return (
	<div className={styles.categoryList}>
	<Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.style}`}>Style</Link>
	<Link href='/blog?cat=fashion' className={`${styles.categoryItem} ${styles.food}`}>fashion</Link>
	<Link href='/blog?cat=culture' className={`${styles.categoryItem} ${styles.culture}`}>culture</Link>
	<Link href='/blog?cat=fashion' className={`${styles.categoryItem} ${styles.fashion}`}>fashion</Link>

    </div>
  )
}

export default MenuCategories
