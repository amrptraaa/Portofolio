import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, ClockIcon, TagIcon } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "Pemikiran saya tentang pengembangan perangkat lunak, kehidupan, dan banyak lagi.",
};

const BLUR_FADE_DELAY = 0.04;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("id-ID", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} menit baca`;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 tracking-tighter">Blog</h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Menjelajahi ide, berbagi pengetahuan, dan mendokumentasikan perjalanan saya di dunia teknologi
          </p>
        </div>
      </BlurFade>
      
      <div className="grid gap-6 sm:gap-8">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-card rounded-lg border overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg">
                  {post.metadata.image && (
                    <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden">
                      <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                        {post.metadata.title}
                      </h2>
                      <p className="text-muted-foreground text-sm sm:text-base line-clamp-2">
                        {post.metadata.summary}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="size-3 sm:size-4" />
                        <time dateTime={post.metadata.publishedAt}>
                          {formatDate(post.metadata.publishedAt)}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="size-3 sm:size-4" />
                        <span>{getReadingTime(post.metadata.summary)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TagIcon className="size-3 sm:size-4" />
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                          {post.metadata.title.includes("UI/UX") ? "Desain" : "Pengembangan"}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
