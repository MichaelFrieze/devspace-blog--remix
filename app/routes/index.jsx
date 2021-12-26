import { useLoaderData, Link } from 'remix';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const loader = () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  console.log(posts);
  return posts;
};

export const meta = () => {
  return {
    title: 'DevSpace Blog',
  };
};

export default function Index() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
