import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostImageUrl } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found | James Cai's Blog"
    };
  }

  return {
    title: `${post.title} | James Cai's Blog`,
    description: post.description
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm font-medium text-slate-500 transition-colors hover:text-brand-blue"
      >
        ← Back to Blog
      </Link>
      <article className="overflow-hidden rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.05)]">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src={getPostImageUrl(post, 1200, 514)}
            alt=""
            width={1200}
            height={514}
            className="object-cover"
            priority
          />
        </div>
        <div className="p-8 sm:p-10">
          <p className="text-xs font-medium text-slate-400">{post.publishedAt}</p>
          <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-2xl">
            {post.title}
          </h1>
          <p className="mt-4 text-slate-600">{post.description}</p>
          <div className="prose prose-slate mt-10 max-w-none text-slate-700 prose-p:leading-relaxed prose-p:first:mt-0">
            <p>{post.content}</p>
          </div>
        </div>
      </article>
    </>
  );
}
