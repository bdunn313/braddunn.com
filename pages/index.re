module Head {
  [@bs.module "next/head"][@react.component]
  external make: (~children: React.element) => React.element = "default";
};

type styleObject = {
  container: string,
  main: string,
  title: string,
  description: string,
};

[@bs.module] external styles: styleObject = "../styles/Home.module.css";

[@react.component]
let make = () => 
  <div className={styles.container}>
    <Head>
      <title>{"Create Next App" |> React.string}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>
        {"Brad Dunn" |> React.string}
      </h1>
      <p className={styles.description}>
        {"Software Engineer. Writer. Occasionally has good ideas." |> React.string}
      </p>
      <SocialIcons />
    </main>
  </div>;
