import CardList from "@/components/CardList/CardList";
import styles from "./blog.module.css";
import Menu from "@/components/menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

 

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blogs</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
      </div>
    </div>
  );
};

export default BlogPage;