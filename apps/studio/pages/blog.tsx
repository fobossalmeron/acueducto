import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import ArticleProps from '@acueducto/shared/types/ArticleProps';
import ssrLocale from '../utils/ssrLocale';
import { getAllPosts, getPostBySlug } from '../utils/blogApi';
import Head, { type HeadProps } from '@acueducto/shared/components/layout/Head/Head';
import TitleSection, { type TitleProps } from '@acueducto/shared/components/shared/TitleSection';
import { EntryPreview } from '../components/pages/blog/EntryPreview';
import PageWrapper from '@acueducto/shared/components/layout/PageWrapper';
import ContactFooter from '@acueducto/shared/components/layout/footers/ContactFooter';

export default function Articles({
  locale,
  setTitle,
  posts,
  pt,
}: {
  locale: string;
  setTitle: (title: string) => void;
  posts: ArticleProps[];
  pt: { intro: TitleProps; head: HeadProps };
}) {
  const { intro, head } = pt;

  useEffect(() => {
    setTitle('Blog');
  }, [locale]);

  return (
    <PageWrapper>
      <Head {...head} es_canonical={`https://acueducto.studio/blog`}></Head>
      <TitleSection {...intro} heading={1} />
      {posts.map((post, i) => (
        <EntryPreview
          title={post.title ?? ''}
          subtitle={post.subtitle ?? ''}
          excerpt={post.excerpt ?? ''}
          slug={post.slug ?? ''}
          featured={i === 0}
          reverse={i % 2 === 1}
          key={`article${i}`}
        />
      ))}
      <ContactFooter />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const articles = getAllPosts(['slug']);
  const posts = articles
    .map((post: ArticleProps) =>
      getPostBySlug(post.slug!, [
        'title',
        'subtitle',
        'date',
        'slug',
        'author',
        'excerpt',
      ]),
    )
    .sort((a, b) => new Date(b.date ?? 0).valueOf() - new Date(a.date ?? 0).valueOf());

  const locale = context.locale || 'es'; // Default to 'es' if locale is undefined
  const pt = ssrLocale({ locale, fileName: 'blog.json' });

  if (!pt) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: [...posts],
      pt,
      locale,
    },
  };
};
