import { useEffect } from "react";
import { GetStaticProps } from "next";
import ArticleProps from "utils/types/ArticleProps";
import markdownToHtml from "utils/markdownToHtml";
import { getAllPosts, getPostBySlug } from "utils/blogApi";
import Head from "components/layout/Head";
import ArticlePage from "components/articles/ArticlePage";
import PageWrapper from "components/layout/PageWrapper";
import ResourceFooter from "components/shared/footers/ResourceFooter";

export default function Article({ locale, setTitle, article }) {
  useEffect(() => {
    setTitle("Blog");
  }, [locale]);

  return (
    <PageWrapper unPadded>
      <Head
        title={article.seo_title ? article.seo_title : article.title}
        description={article.excerpt}
        headerTitle="Blog"
        es_canonical={`https://acueducto.studio/blog/${article.slug}`}
        image={{ fileName: `${article.slug}.png`, alt: article.title }}
        noIndex={!article.index}
      ></Head>
      <ArticlePage {...article} slug={article.slug} />
      <ResourceFooter identify={article.slug} />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const article: ArticleProps = getPostBySlug(context.params.slug, [
    "title",
    "seo_h1",
    "seo_title",
    "excerpt",
    "subtitle",
    "date",
    "slug",
    "author",
    "content",
    "index",
  ]);
  const content = await markdownToHtml(article.content || "");

  if (!article) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  };
};

export async function getStaticPaths() {
  const articles = getAllPosts(["slug"]);
  return {
    paths: articles.map((article: ArticleProps) => {
      return {
        params: {
          slug: article.slug,
        },
      };
    }),
    fallback: false,
  };
}
