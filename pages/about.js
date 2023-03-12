import NavBar from "../components/NavBar";
import Head from "next/head";
function AboutPage() {
  console.log('[AboutPage] render');
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" value="This is about us section" />
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
}

export default AboutPage;