import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql } from '@/lib/datocms/graphql';
import { revalidateTag } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Spurningakerfi Benna',
};

interface Author {
  name: string;
}

interface Question {
  questiontitle: string;
  id: string;
  authors: Author[];
}

interface QuestionsQueryResult {
  allQuestions: Question[] | null;
}

const query = graphql(
  /* GraphQL */ `
    query GetQuestions {
      allQuestions {
        id
        questiontitle
        spurning
        flokkur {
          slug
          title
        }
        authors {
          name
        }
        svar {
          svarid
        }
      }
    }
  `,
  [],
);

export default async function QuestionsPage() {
  const { allQuestions } = (await executeQuery(query, {})) as QuestionsQueryResult;

  revalidateTag('datocms');

  console.log(allQuestions);

  if (!allQuestions) {
    notFound();
  }
  return (
    <>
      <h3>Hér eru spurningar!</h3>

      {!allQuestions || !Array.isArray(allQuestions) ? (
        <p>Engar spurningar fundust eða gögn eru á óvæntu formi.</p>
      ) : allQuestions.length === 0 ? (
        <p>Engar spurningar eru til staðar.</p>
      ) : (
        <ul>
          {allQuestions.map((question) => (
            <li key={question.id}>
              <Link href={`/questions/${question.id}`}>{question.questiontitle}</Link>
            </li>
          ))}
        </ul>
      )}
      <Link href="/">Til baka</Link>
    </>
  );
}
