import { notFound } from 'next/navigation';
import Link from 'next/link';
import { graphql } from '@/lib/datocms/graphql';
import { executeQuery } from '@/lib/datocms/executeQuery';

const query = graphql(/* GraphQL */ `
  query AllQuestions {
    allQuestions {
      id
      questiontitle
      spurning
      flokkur {
        slug
      }
    }
  }
`);

export default async function QuestionsByCategory({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const data = (await executeQuery(query)) as {
    allQuestions: Array<{
      id: string;
      questiontitle: string;
      spurning: string;
      flokkur?: { slug?: string };
    }>;
  };

  const filtered = data.allQuestions.filter((q) => q.flokkur?.slug === slug);
  if (!filtered.length) {
    notFound();
  }

  return (
    <>
      <h2>Questions in category: {slug}</h2>
      <ul>
        {filtered.map((q) => (
          <li key={q.id}>
            <Link href={`/questions/${q.id}`}>{q.questiontitle}</Link>
          </li>
        ))}
      </ul>
      <Link href="/categories">Til baka</Link>
    </>
  );
}
