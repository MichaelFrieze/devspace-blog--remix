import { useLoaderData, Link } from 'remix';
import { getPosts } from '../../lib/posts';
import Post from '../../components/post';
import CategoryList from '../../components/category-list';
import Pagination from '../../components/pagination';

export const loader = async ({ request }) => {
  const posts = await getPosts();

  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') ?? 1);

  const uniqueCategories = [
    ...new Set(posts.map((post) => post.frontmatter.category)),
  ];

  return {
    posts,
    page,
    uniqueCategories,
  };
};

export const meta = () => {
  return {
    title: 'DevSpace Blog | Index',
  };
};

export default function BlogIndex() {
  const { posts, page, uniqueCategories } = useLoaderData();

  return (
    <>
      <div className="flex justify-between">
        <div className="w-3/4 mr-10">
          <h1 className="text-5xl border-b-4 p-5 font-bold">Blog</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
          <Pagination page={page} />
        </div>

        <div className="w-1/4">
          <CategoryList categories={uniqueCategories} />
        </div>
      </div>
    </>
  );
}
