import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { SplitLayout } from 'components/layout/layouts/SplitLayout';
import { Title } from 'components/ui/Title';

interface Question {
  title: string;
  p: string;
}

const QuestionWrapper: React.FC<{ q: Question; i: number }> = React.memo(
  ({ q, i }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <li className="mb-12 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <Fade triggerOnce>
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-6">
              <span className="text-accent text-base tracking-[0.05rem] md:text-sm">{`0${i + 1}`}</span>
              <p className="text-foreground m-0 text-2xl leading-[120%] md:text-lg">
                {q.title}
              </p>
            </div>
            <div
              className={`before:bg-accent after:bg-accent relative h-[25px] w-[25px] transition-transform duration-250 ease-out before:absolute before:left-[12.5px] before:block before:h-[25px] before:w-[1px] before:rotate-90 before:rounded-[3px] before:transition-all before:duration-250 before:ease-out before:content-[''] after:absolute after:left-[12.5px] after:block after:h-[25px] after:w-[1px] after:rounded-[3px] after:transition-all after:duration-250 after:ease-out after:content-[''] ${isOpen ? 'rotate-90 before:opacity-0' : 'before:opacity-100'}`}
            />
          </div>
          <div
            className={`grid transition-all duration-250 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="overflow-hidden">
              <p className="text-over-black mt-4 ml-3 text-base sm:ml-0 md:ml-10">
                {q.p}
              </p>
            </div>
          </div>
        </Fade>
      </li>
    );
  },
);

export const FAQSection: React.FC<{
  t: { title: string; questions: Question[] };
}> = React.memo(({ t }) => {
  return (
    <SplitLayout className="bg-background border-foreground-lowest border-t">
      <SplitLayout.Header>
        <Title>{t.title}</Title>
      </SplitLayout.Header>
      <SplitLayout.Content>
        <ol>
          {t.questions.map((q, i) => (
            <QuestionWrapper key={`question${i}`} q={q} i={i} />
          ))}
        </ol>
      </SplitLayout.Content>
    </SplitLayout>
  );
});
