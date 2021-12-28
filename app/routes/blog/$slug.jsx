import { Link, useLoaderData, useCatch, useParams } from 'remix';
import { getPosts } from '../../lib/posts';

export const loader = async ({ params }) => {
  const posts = await getPosts();
  const postData = posts.filter((post) => post.slug === params.slug)[0];

  if (postData) {
    return postData;
  } else {
    throw new Error("Couldn't find post in the loader");
  }
};

export const meta = ({ data }) => {
  if (data) {
    return {
      title: data.frontmatter.title,
    };
  } else {
    return {
      title: 'DevSpace Blog',
    };
  }
};

export default function PostPage() {
  const {
    frontmatter: { title, category, date, cover_image, author, author_image },
    slug,
    content,
  } = useLoaderData();

  return (
    <div>
      <h1>hello</h1>
      <h1>{slug}</h1>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  switch (caught.status) {
    case 404: {
      return <div>Huh? What the heck is {params.slug}?</div>;
    }
    case 401: {
      return <div>Sorry, but {params.slug} is not a blog post.</div>;
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}

export function ErrorBoundary({ error }) {
  console.error(error);

  const { slug } = useParams();
  return (
    <>
      <h1>{error.message}</h1>
      <div>{`There was an error loading blog post by the slug ${slug}. Sorry!`}</div>
    </>
  );
}
