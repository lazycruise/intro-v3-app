import styles from "./style.module.css";

const DocsIdPage = ({ params }) => {
  return (
    <div className={`${styles.title} ${styles.another}`}>
      <h1>{params.id} Docs page</h1>
    </div>
  );
};

export default DocsIdPage;
