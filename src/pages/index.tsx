import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <header>
        <h1>Hey there</h1>
        <h2>My name is Brad Dunn and I design and develop software.</h2>
        <h3>Mostly for the web, and mostly applications.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus eum, saepe quis est ea, non mollitia eius iure rerum,
          delectus modi facilis? Impedit harum facilis voluptatem veritatis.
          Consequuntur, delectus repellat.
        </p>
      </header>
    </Layout>
  );
}

export default IndexPage;
