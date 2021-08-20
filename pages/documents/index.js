import Link from "next/link";
import Layout from "../../components/Layout";
import { getDocuments } from "../../service/DocumentService";
import styles from "../../styles/Home.module.css";

const Home = ({ documents }) => {
  return (
    <Layout>
      <div className={styles.main}>
        <div className="grid-content">
          {documents.map((document) => (
            <div key={document.id}>
              <h1>{document.title}</h1>
              <p>{document.body}</p>
              <Link href={`/documents/${document.id}`}>
                <a>See more</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
// lấy dữ liệu
export const getStaticProps = async () => {
  const documents = await getDocuments();
  return {
    props: {
      documents,
    },
  };
};

export default Home;
