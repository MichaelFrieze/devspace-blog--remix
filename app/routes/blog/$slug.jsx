import { Link, useLoaderData, useCatch, useParams } from 'remix';
import { getPosts } from '../../lib/posts';
import { marked } from 'marked';

import Layout from '~/components/layout';
import CategoryLabel from '../../components/category-label';

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
      title: `DevSpace Blog | ${data.frontmatter.title}`,
    };
  } else {
    return {
      title: 'DevSpace Blog',
    };
  }
};

export default function BlogPost() {
  const {
    frontmatter: { title, category, date, cover_image, author, author_image },
    slug,
    content,
  } = useLoaderData();

  return (
    <Layout>
      <Link to="/blog">Go Back</Link>
      <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-5xl mb-7">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt="" className="w-full rounded" />

        <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
          <div className="flex items-center">
            <img
              src={author_image}
              alt=""
              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            />
            <h4>{author}</h4>
          </div>
          <div className="mr-4">{date}</div>
        </div>

        <div className="blog-text mt-2">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
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
