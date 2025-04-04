import HeadingWithAnchorLink from '@/components/HeadingWithAnchorLink';
import ImageBlock, { ImageBlockFragment } from '@/components/blocks/ImageBlock';
import ImageGalleryBlock, {
  ImageGalleryBlockFragment,
} from '@/components/blocks/ImageGalleryBlock';
import { VideoBlockFragment } from '@/components/blocks/VideoBlock';
import { TagFragment } from '@/lib/datocms/commonFragments';
import { executeQuery } from '@/lib/datocms/executeQuery';
import { generateMetadataFn } from '@/lib/datocms/generateMetadataFn';
import { graphql } from '@/lib/datocms/graphql';
import { isCode, isHeading } from 'datocms-structured-text-utils';
import dynamic from 'next/dynamic';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { StructuredText, renderNodeRule, toNextMetadata } from 'react-datocms';

export const metadata = {
  title: 'Spurningarleikur Benna',
};

const query = graphql(
  /* GraphQL */ `
    query Questioncategory {
      allQuestioncategories {
        title
        slug
      }
    }
  `,
  [],
);

/*

*/

export default async function CategoriesPage() {
  const result = (await executeQuery(query, {})) as {
    allQuestioncategories: {
      title: string;
      slug: string;
    }[];
  };

  const { allQuestioncategories } = result;

  if (!allQuestioncategories) {
    notFound();
  }

  return (
    <>
      <h2 className="gradient-text">Veldu flokk</h2>
      <p>Hér getur þú fundið spurningar flokkaðar eftir efni.</p>

      <div className="categories-grid">
        {allQuestioncategories.map((cat) => (
          <Link href={`/categories/${cat.slug}`} key={cat.slug}>
            <div className="card accent">
              <h3>{cat.title}</h3>
              <span className="badge primary">Sjá spurningar</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
