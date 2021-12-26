import { useLoaderData } from 'remix';

export const loader = () => {
  return [
    {
      slug: 'my-first-post',
      title: 'My First Post',
    },
    {
      slug: '90s-mixtape',
      title: 'A Mixtape I Made Just For You',
    },
  ];
};

export const meta = () => {
  return {
    title: 'DevSpace Blog',
  };
};

export default function Index() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
