import React from 'react'
import styles from './menuposts.module.css'
import Link from 'next/link'
import Image from 'next/image'

function MenuPosts({withImage}) {
  return (
	<div className={styles.items}>
		<Link href='/' className={styles.item}>
		{withImage && <div className={styles.imageContainer}>
			<Image src='/p1.jpeg' height={80}width={80} className={styles.image}/>

		</div>}
		<div className={styles.textContainer}>
			<span className={`${styles.category} ${styles.travel}`}>Travel</span>
			<h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur?</h3>
			<div className={styles.detail}>
				<span className={styles.username}>John doe</span>
				<span className={styles.date}> - 11.01.3</span>

			</div>


		</div>
		</Link>
		<Link href='/' className={styles.item}>
		{withImage && <div className={styles.imageContainer}>
			<Image src='/p1.jpeg' height={80}width={80} className={styles.image}/>

		</div>}
		<div className={styles.textContainer}>
			<span className={`${styles.category} ${styles.culture}`}>Culture</span>
			<h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur?</h3>
			<div className={styles.detail}>
				<span className={styles.username}>John doe</span>
				<span className={styles.date}> - 11.01.3</span>

			</div>


		</div>
		</Link>
		<Link href='/' className={styles.item}>
		{withImage && <div className={styles.imageContainer}>
			<Image src='/p1.jpeg' height={80}width={80} className={styles.image}/>

		</div>}
		<div className={styles.textContainer}>
			<span className={`${styles.category} ${styles.food}`}>food</span>
			<h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur?</h3>
			<div className={styles.detail}>
				<span className={styles.username}>John doe</span>
				<span className={styles.date}> - 11.01.3</span>

			</div>


		</div>
		</Link>
	  
	</div>
  )
}

export default MenuPosts
