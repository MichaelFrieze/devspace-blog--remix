import { useLoaderData, Link, useParams } from 'remix';
import { getPosts } from '../../../lib/posts';
import Post from '../../../components/post';
import CategoryList from '../../../components/category-list';

export const loader = async ({ params }) => {
  const posts = await getPosts();
  const categoryName = await params.category_name;

  const uniqueCategories = [
    ...new Set(posts.map((post) => post.frontmatter.category)),
  ];

  const categoryPosts = posts.filter(
    (post) =>
      post.frontmatter.category.toLowerCase() === categoryName.toLowerCase()
  );

  return {
    posts: categoryPosts,
    categoryName,
    categories: uniqueCategories,
  };
};

export const meta = () => {
  return {
    title: 'DevSpace Blog | Categories',
  };
};

export default function CategoryPage() {
  const { posts, categories, categoryName } = useLoaderData();

  return (
    <>
      <div className="flex justify-between">
        <div className="w-3/4 mr-10">
          <h1 className="text-5xl border-b-4 p-5 font-bold">
            Posts in {categoryName}
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>

        <div className="w-1/4">
          <CategoryList categories={categories} />
        </div>
      </div>
    </>
  );
}
