import { InferGetStaticPropsType } from "next";
import { Experiences } from "../components/sections/Experiences";
import { Hero } from "../components/sections/Hero";
import { Libraries, _repositories } from "../components/sections/Libraries";

function Index({
  repositories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="max-w-4xl py-20 mx-auto space-y-32">
      <Hero />

      <div className="space-y-2">
        <Experiences />
        <Libraries repositories={repositories} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      repositories: [..._repositories].sort(() => Math.random() - 0.5),
    },
    revalidate: 1 * 3600, // 1 hour
  };
}

export default Index;
