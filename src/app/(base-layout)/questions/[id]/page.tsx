import { executeQuery } from '@/lib/datocms/executeQuery';
import { graphql } from '@/lib/datocms/graphql';
import { revalidateTag } from 'next/cache';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';

export const metadata = {
  title: 'Spurningakerfi Benna',
};

const query = graphql(
  /* GraphQL */ `
  query Question($id: ItemId) {
    question(filter: { id: { eq: $id } }) {
        questionTitle
        id
        authors {
            name
            uppahaldsspurningaflokkur{
                title
            }
        }
        spurning
    }
  }
  `,
[],
);




export default async function QuestionsPage( { params }: { params: { id: string } }) {

    revalidateTag('datocms');
    const { id } = await params;
    console.log(id);

    const { question } = await executeQuery(query, { variables: { id } });

    if (!question) {
      notFound();
    }


  return (
    <>
      <h3>{question.questionTitle}</h3>
        <div><Markdown>{question.spurning}</Markdown></div>
        <Link href="/questions">Til baka</Link>
    </>
  );
}
