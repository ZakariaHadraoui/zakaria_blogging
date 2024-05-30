import React from 'react'
import Card from '../card/Card'
import styles from './cardlist.module.css'
import Pagination from '../pagination/Pagination'

const getData = async (page,cat) => {
	const res = await fetch(
	  `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
	  {
		cache: "no-store",
	  }
	);
  
	if (!res.ok) {
	  throw new Error("Failed");
	}
  
	return res.json();
  };
  
async function CardList({page,cat}) {
	const {posts,count} = await getData(page,cat);
	const POST_PER_PAGE = 2;


	const hasPrev = POST_PER_PAGE * (page - 1) > 0;
	const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
	
  return (
	

<div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
		{posts.map((ele)=>{
			return <Card key={ele._id} data={ele}/>
		})}
	 
       
	  </div>
       
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
</div>
  )
}

export default CardList
