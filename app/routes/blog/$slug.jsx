import { Link, useLoaderData } from 'remix';
import { getPosts } from '../../lib/posts';

export const loader = async ({ params }) => {
  const posts = await getPosts();
  const postData = posts.filter((post) => post.slug === params.slug);

  return postData;
};

export default function PostPage() {
  const posts = useLoaderData();
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
