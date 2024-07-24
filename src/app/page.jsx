import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "../components/featured/Featured";
import CategoryList from "../components/category list/CategoryList";
import CardList from "../components/CardList/CardList";
import Menu from "../components/menu/Menu";



export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;


  return (
    <div className={styles.container}>
      <Featured/>
      {/* <CategoryList/> */}
      <div className={styles.content}>
      <CardList page={page} cat={cat}/>
      <Menu/>

      </div>
     
    </div>
  )
}
