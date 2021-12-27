import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '../utils';

const postsPath = path.join('posts');

export async function getPosts() {
  const files = await fs.readdir(postsPath);
  return Promise.all(
    files.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename), 'utf8');

      const { data: frontmatter } = matter(file);

      return {
        slug: filename.replace('.md', ''),
        frontmatter,
      };
    })
  );
}

/* 

export async function getPosts() {
  const files = fs.readdirSync(postsPath);
  console.log(files);

  const posts = files.map((filename) => {
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

  return posts.sort(sortByDate);
}


*/
