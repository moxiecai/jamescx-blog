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

export const posts: Post[] = [
  {
    slug: "welcome-to-my-blog",
    title: "Welcome to My Blog",
    description: "A quick intro to this new Next.js blog.",
    publishedAt: "2026-03-19",
    content:
      "This is the first post on my new blog. Next steps are adding markdown support, tags, and a proper CMS.",
    image: "https://picsum.photos/seed/welcome-blog/800/600"
  },
  {
    slug: "building-with-nextjs",
    title: "Building with Next.js",
    description: "Why I picked Next.js for this site.",
    publishedAt: "2026-03-18",
    content:
      "Next.js provides a great developer experience with App Router, server components, and easy deployment options.",
    image: "https://picsum.photos/seed/nextjs-build/800/600"
  }
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
