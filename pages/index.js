import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";
function HomePage() {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>Collow Blog</h1>
      </main>
    </>
  );
}

export default HomePage;