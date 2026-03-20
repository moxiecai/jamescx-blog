import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostImageUrl } from "@/lib/posts";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-20">
      <section>
        <h1 className="text-[2.75rem] font-bold tracking-tight text-slate-900 sm:text-[3.5rem] md:text-[4rem]">
          James Cai
        </h1>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className="text-base font-semibold text-slate-800">
            Writer · Builder
          </p>
          <p className="text-base font-semibold text-slate-800">
            Web3 & AI
          </p>
        </div>
        <div className="mt-8 max-w-2xl space-y-5">
          <p className="text-[1.0625rem] leading-[1.75] text-slate-600">
            This is James Cai's blog space, which shares ideas on code, product
            and writing in web3 and AI.
          </p>
          <p className="text-[1.0625rem] leading-[1.75] text-slate-600">
            I write about building products, exploring new technologies, and the
            intersection of web3 and artificial intelligence.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Latest Posts
          </h2>
          <Link
            href="/blog"
            className="text-sm text-slate-500 transition-colors hover:text-slate-800"
          >
            View all
          </Link>
        </div>
        <div className="border-t border-slate-200 pt-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => {
              const year = post.publishedAt.slice(0, 4);
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={getPostImageUrl(post, 600, 450)}
                      alt=""
                      width={600}
                      height={450}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-white/40 text-6xl font-bold text-slate-700/80 sm:text-7xl backdrop-blur-[2px]">
                      {year}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-brand-blue">
                    {post.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
