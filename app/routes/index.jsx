import { useLoaderData, Link } from 'remix';
import { getPosts } from '../lib/posts';

export const loader = () => {
  return getPosts();
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
