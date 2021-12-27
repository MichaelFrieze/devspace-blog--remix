import { Link, useLoaderData } from 'remix';
import { getPosts } from '../../lib/posts';

export const loader = async ({ params }) => {
  const posts = getPosts();
  // console.log(params);

  return posts;
};

export default function PostPage() {
  const posts = useLoaderData();
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
