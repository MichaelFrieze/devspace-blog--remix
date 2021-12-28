import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '../utils';

const postsPath = path.join('posts');

export async function getPosts() {
  const dir = await fs.readdir(postsPath);

  const posts = await Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename), 'utf-8');

      const { data: frontmatter, content } = matter(file);

      return {
        slug: filename.replace('.md', ''),
        frontmatter,
        content,
      };
    })
  );

  return posts.sort(sortByDate);
}
