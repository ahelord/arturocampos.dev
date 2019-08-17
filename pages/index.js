import React from "react";
import Head from "next/head";
import Global from "../components/global";

const Home = () => (
  <>
    <Global />
    <Head>
      <title>Arturo Campos - Web Developer</title>
    </Head>

    <main>
      <h1>Arturo Campos</h1>
      <h2>Web Developer</h2>
      <p>Pronto</p>
    </main>

    <style jsx>{`
      :global(body) {
        align-items: center;
        background: #212121;
        background: linear-gradient(to right top, #212121 50%, #1de9b6 50%);
        color: #fff;
        display: flex;
        justify-content: center;
      }
      main {
        background: rgba(0, 0, 0, 0.7);
        border: 1px solid #000;
        border-radius: 5px;
        padding: 2rem;
        text-align: right;
      }
      h1 {
        font-size: 1.8rem;
        font-weight: 100;
      }
      h1::before {
        background: url("/static/ac.svg") no-repeat center;
        content: " ";
        display: block;
        height: 4rem;
        margin-bottom: 1rem;
      }
      h2 {
        font-size: 1.1rem;
        font-weight: 200;
        margin-bottom: 0.5rem;
      }
    `}</style>
  </>
);

export default Home;
