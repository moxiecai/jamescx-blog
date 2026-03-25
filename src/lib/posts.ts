export type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  content: string;
  image?: string;
};

/** Placeholder image URL for a post. Uses picsum.photos for consistent images per slug. */
export function getPostImageUrl(post: Post, width = 800, height = 600): string {
  if (post.image) return post.image;
  return `https://picsum.photos/seed/${post.slug}/${width}/${height}`;
}

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type PostFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  image?: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function readPostFromFile(filename: string): Post | null {
  if (!filename.endsWith(".md") && !filename.endsWith(".mdx")) return null;

  const slug = filename.replace(/\.(md|mdx)$/, "");
  const fullPath = path.join(POSTS_DIR, filename);
  const file = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(file);

  const data = parsed.data as Partial<PostFrontmatter>;
  if (!data.title || !data.description || !data.publishedAt) return null;

  return {
    slug,
    title: data.title,
    description: data.description,
    publishedAt: data.publishedAt,
    image: data.image,
    content: parsed.content.trim()
  };
}

export function getAllPosts(): Post[] {
  const files = fs.existsSync(POSTS_DIR) ? fs.readdirSync(POSTS_DIR) : [];
  const posts = files.map(readPostFromFile).filter(Boolean) as Post[];
  return posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string): Post | undefined {
  const mdPath = path.join(POSTS_DIR, `${slug}.md`);
  const mdxPath = path.join(POSTS_DIR, `${slug}.mdx`);

  const filename = fs.existsSync(mdPath)
    ? `${slug}.md`
    : fs.existsSync(mdxPath)
      ? `${slug}.mdx`
      : null;

  if (!filename) return undefined;
  return readPostFromFile(filename) ?? undefined;
}
