import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Experiences } from "../components/sections/Experiences";
import { Hero } from "../components/sections/Hero";
import { Libraries, _repositories } from "../components/sections/Libraries";
import { getRepository } from "../lib/github";

function Index(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { repositories } = props;

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto space-y-32 lg:py-20 lg:px-0">
      <Head>
        <title>gino.dev</title>
        <meta
          name="description"
          content="gino.dev | Full-stack web developer, personal site"
        />
        <meta
          name="keywords"
          content="gino.dev, gino, portfolio, personal site, full stack, web developer, developer, react, typescript, next.js, ginodev, gino dev"
        />
        <meta name="author" content="Gino" />
      </Head>
      <Hero />

      <div className="space-y-2">
        <Experiences />
        <Libraries repositories={repositories} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const repositories = await Promise.all(
    _repositories.map(([name, description]) => getRepository(name, description))
  );

  return {
    props: {
      repositories: [...repositories].sort(() => Math.random() - 0.5),
    },
    revalidate: 1 * 3600, // 1 hour
  };
}

export default Index;
