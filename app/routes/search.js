import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function loader({ request }) {
  let posts;
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('q');

  const files = fs.readdirSync(path.join('posts'));

  posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category } }) =>
      title.toLowerCase().indexOf(searchTerm) != -1 ||
      excerpt.toLowerCase().indexOf(searchTerm) != -1 ||
      category.toLowerCase().indexOf(searchTerm) != -1
  );

  return results;
}
