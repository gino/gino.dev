export interface Repository {
  id: string;
  name: string;
  url: string;
  stars: number;
  description: string;
}

const api = "https://api.github.com";

export async function getRepository(
  fullName: string,
  description: string
): Promise<Repository> {
  const [owner, name] = fullName.split("/");
  const response = await fetch(`${api}/repos/${owner}/${name}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  });
  const json = await response.json();

  return {
    id: json.id,
    name: json.full_name,
    url: json.html_url,
    stars: json.stargazers_count,
    description: json.description,
  };
}
