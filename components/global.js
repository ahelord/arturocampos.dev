import Head from "next/head";
import Favicon from "../components/favicon";

export default () => (
  <>
    <Head>
      <Favicon />
      <link
        href="https://fonts.googleapis.com/css?family=Gothic+A1:100,200,400,600&display=swap"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
      }
      html,
      body {
        font-family: "Gothic A1", sans-serif;
        height: 100%;
      }
    `}</style>
  </>
);
