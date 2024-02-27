import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import Head from "components/layout/Head";
import Link from "next/link";
import PageWrapper from "components/layout/PageWrapper";
import SimplePinnedSection from "components/shared/pinnedSections/SimplePinnedSection";
import ContactFooter from "components/shared/footers/ContactFooter";
import { P, Ul, Li } from "components/shared/Dangerously";

export default function Privacy({ locale, setTitle, pt }) {
  const [t, setT] = useState(pt);
  let b = t.body;

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "privacy.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });
  }, [locale]);

  return (
    <PageWrapper>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio/privacidad"}
        en_canonical={"https://acueducto.studio/en/privacy"}
        noIndex
      />
      <SimplePinnedSection title={t.intro.title} heading={1}>
        <P>{t.intro.p}</P>
        <h2>{b.subtitle1}</h2>
        <p>{b.p1}</p>
        <h2>{b.subtitle2}</h2>
        <p>{b.p2}</p>
        <Ul>{b.list1}</Ul>
        <h2>{b.subtitle3}</h2>
        <p>{b.p3}</p>
        <ul>
          <Li>{b.listItem1}</Li>
          <li>{b.listItem2}</li>
          <li>
            {b.listItem3}
            <Link href={"/cookies"} locale={locale} legacyBehavior>
              <a>{b.listItem3Link}</a>
            </Link>
            )
          </li>
        </ul>
        <h2>{b.subtitle4}</h2>
        <P>{b.p4}</P>
        <h2>{b.subtitle5}</h2>
        <P>{b.p5}</P>
        <Ul>{b.list2}</Ul>
        <h2>{b.subtitle6}</h2>
        <P>{b.p6}</P>
        <h2>{b.subtitle7}</h2>
        <p>{b.p7}</p>
      </SimplePinnedSection>
      <ContactFooter />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "privacy.json" });
  return {
    props: {
      pt,
    },
  };
};
