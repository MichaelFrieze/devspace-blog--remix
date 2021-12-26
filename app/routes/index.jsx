import { useLoaderData, Link } from 'remix';

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

  return (
    <>
      <h1>Hello World</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
