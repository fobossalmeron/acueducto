import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import ArticleProps from 'utils/types/ArticleProps';
import ssrLocale from 'utils/ssrLocale';
import { getAllPosts, getPostBySlug } from 'utils/blogApi';
import Head from 'components/layout/Head/Head';
import TitleSection from 'components/shared/TitleSection';
import { EntryPreview } from 'components/pages/blog/EntryPreview';
import PageWrapper from 'components/layout/PageWrapper';
import ContactFooter from 'components/layout/footers/ContactFooter';

export default function Articles({ locale, setTitle, posts, pt }) {
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
          {...post}
          featured={i === 0}
          reverse={i % 2}
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
      getPostBySlug(post.slug, [
        'title',
        'subtitle',
        'date',
        'slug',
        'author',
        'excerpt',
      ]),
    )
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  const pt = ssrLocale({ locale: context.locale, fileName: 'blog.json' });

  if (!pt) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: [...posts],
      pt,
    },
  };
};
