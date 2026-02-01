"use client";

import { Heading } from "@/src/app/[locale]/components/heading";
import { LinkButton } from "@/src/app/[locale]/components/link-button";
import { PageWrapper } from "@/src/app/[locale]/components/page-wrapper";
import PostComponent from "@/src/app/[locale]/components/post-component";
import { Post } from "@/src/app/utils/interface";
import { InlineError } from "@/src/app/[locale]/components/inline-error";
import Skeleton from "@/src/app/[locale]/components/skeleton";
import { useLocale, useTranslations } from "next-intl";

const PINNED_POSTS_QUERY = `*[
  _type == "post" &&
  language == $language &&
  pinned == true
] {
  title,
  slug,
  mainImage,
  categories[]->{
    _id,
    slug,
    "label": coalesce(title[$language], title.sl)
  }
}`;

export function TopBlogs() {
  const t = useTranslations("Blog");
  const locale = useLocale();

  // Replace with real hook later
  const pinnedPosts: Post[] = [];
  const isLoading = false;
  const error = null;

  return (
    <PageWrapper bgColor="bg-pink">
      <div className="flex flex-col gap-8 md:gap-16">
        {/* Header */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="max-w-sm md:max-w-2xl">
            <Heading size="lg">{t("top_blogs.title")}</Heading>
          </div>

          <LinkButton
            size="md"
            variant="secondary"
            href="/blog" // ✅ fixed
          >
            {t("top_blogs.cta")}
          </LinkButton>
        </div>

        {/* Content */}
        {error ? (
          <div className="w-full flex justify-center">
            <InlineError hasBox />
          </div>
        ) : isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} />
            ))}
          </div>
        ) : pinnedPosts.length === 0 ? (
          <p className="text-center opacity-70">
            {t("top_blogs.no_posts")}
          </p>
        ) : (
          <div className="flex flex-col md:flex-row gap-4">
            {pinnedPosts.map((post) => (
              <div key={post.slug.current} className="basis-1/3">
                <PostComponent post={post} />
              </div>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
