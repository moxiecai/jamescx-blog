import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostImageUrl } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | James Cai's Blog",
  description: "All blog posts"
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Blog
        </h1>
        <p className="mt-2 text-slate-600">
          Thoughts and updates from my writing journey.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.08)] sm:flex-row">
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-square sm:w-56">
                <Image
                  src={getPostImageUrl(post, 560, 350)}
                  alt=""
                  width={560}
                  height={350}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                <p className="text-xs font-medium text-slate-400">{post.publishedAt}</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-900 transition-colors group-hover:text-brand-blue">
                  {post.title}
                </h2>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {post.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-brand-blue">
                  Read more →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
