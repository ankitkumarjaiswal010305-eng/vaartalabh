"use client";

import { Footer } from "@/src/app/[locale]/components/footer";
import { Paragraph } from "@/src/app/[locale]/components/paragraph";
import imageLoader from "@/src/app/utils/image-loader";
import Image from "next/image";
import { Heading } from "@/src/app/[locale]/components/heading";
import { PageWrapper } from "@/src/app/[locale]/components/page-wrapper";
import { Post } from "@/src/app/utils/interface";
// import { PortableText, PortableTextComponents } from "next-sanity";
import React, { useMemo } from "react";
import { formatDate } from "@/src/app/utils/date";
import { useParams } from "next/navigation";
// import { useSanityData } from "@/src/app/utils/use-sanity-data";
import { LoadingAnimation } from "@/src/app/[locale]/components/loading-animation";
import { InlineError } from "@/src/app/[locale]/components/inline-error";
import { useLocale } from "next-intl";

const GET_BLOG_POST = `*[_type == "post" && slug.current == $slug][0] {
  title,
  slug,
  publishedAt,
  mainImage,
  _id,
  body,
  categories[]-> {
    _id,
    slug,
    'label': coalesce(title[$language], title.sl)
  }
}`;

// Blog Article Component
const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const locale = useLocale();
  const params = useMemo(() => ({ slug, language: locale }), [slug, locale]);
  // const { data, error, isLoading } = useSanityData({
  //   query: GET_BLOG_POST,
  //   params,
  // });

  const isLoading = false;
const error: Error | null = null;

const data: Post | null = null;


  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center">
        <LoadingAnimation />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full p-6 justify-center">
        <InlineError />
      </div>
    );
  }

  const post = data as Post | null;
  
  // Blog post data is not available after Sanity removal
  if (!post) {
    return (
      <PageWrapper hasNoTopPadding>
        <div className="max-w-3xl mx-auto md:p-6 gap-10 pt-8 md:pt-16">
          <Paragraph>Blog post not available</Paragraph>
        </div>
      </PageWrapper>
    );
  }

  return (
    <>
      <PageWrapper hasNoTopPadding>
        <div className="max-w-3xl mx-auto md:p-6 gap-10 pt-8 md:pt-16">
          <Paragraph>Blog post content unavailable - Sanity CMS removed</Paragraph>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default BlogArticle;
