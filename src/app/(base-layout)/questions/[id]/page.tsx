import { notFound } from 'next/navigation';
import Link from 'next/link';
import { graphql } from '@/lib/datocms/graphql';
import { executeQuery } from '@/lib/datocms/executeQuery';

export const dynamic = 'force-dynamic';

const query = graphql(/* GraphQL */ `
  query SingleQuestion($id: ItemId) {
    question(filter: { id: { eq: $id } }) {
      id
      questiontitle
      spurning
      authors {
        name
      }
      svar {
        svarid
      }
      flokkur {
        slug
        title
      }
    }
  }
`);

interface SingleQuestionResult {
  question: {
    id: string;
    questiontitle: string;
    spurning: string;
    authors: { name: string }[];
    svar?: { svarid: string } | null;
    flokkur?: {
      slug?: string;
      title?: string;
    };
  } | null;
}

export default async function QuestionByIdPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const result = (await executeQuery(query, {
    variables: { id },
  })) as SingleQuestionResult;

  if (!result.question) {
    notFound();
  }

  const { question } = result;

  return (
    <>
      <h2>{question.questiontitle}</h2>
      <p>{question.spurning}</p>
      {question.authors?.length > 0 && (
        <p>Höfundur: {question.authors.map(a => a.name).join(', ')}</p>
      )}
      {question.svar && <p>Svar: {question.svar.svarid}</p>}
      {question.flokkur && <p>Flokkur: {question.flokkur.title}</p>}

      <Link href="/categories">Til baka</Link>
    </>
  );
}
