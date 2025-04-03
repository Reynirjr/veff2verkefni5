import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql } from '@/lib/datocms/graphql';
import { revalidateTag } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './question.module.scss';

export const metadata = {
  title: 'Spurningakerfi Benna',
};

const query = graphql(
  /* GraphQL */ `
  query Questions {
    allQuestions{
      questionTitle
      id
      authors{
        name
      }
    }
    
  }
  `,
[],
);

export default async function QuestionsPage() {
   const { allQuestions } = await executeQuery(query, {});

    revalidateTag('datocms');
   
    console.log(allQuestions);
  
    if (!allQuestions) {
      notFound();
    }
  return (
    <>
      <h3>Hér eru spurningar! Veldu eina of farðu að svara</h3>

      {!allQuestions || !Array.isArray(allQuestions) ? (
        <p>Engar spurningar fundust eða gögn eru á óvæntu formi.</p>
      ) : allQuestions.length === 0 ? (
        <p>Engar spurningar eru til staðar.</p>
      ) : (
        <ul className={styles.questionsList}>
          {allQuestions.map((question) => (
            <li key={question.id}>
              <Link href={`/questions/${question.id}`}>{question.questionTitle}</Link>
              {question.authors.length > 0 && (
                <div className={styles.authorNames}>
                  Höfundur: {question.authors.map((author) => author.name).join(', ')}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      <Link href="/">Til baka</Link>
    </>
  );
}
