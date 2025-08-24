import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

export async function getStaticProps({ params, preview = false }) {
  const pageUrlPath = '/' + (params?.page?.join('/') || '');
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: pageUrlPath,
      },
    })
    .toPromise();
  return {
    props: {
      page: page || null,
      preview: preview || false,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default function RenderPage({ page, preview }) {
  const isPreviewing = useIsPreviewing();
  if (!page) {
    return <div>Not found</div>;
  }
  return <BuilderComponent model="page" content={page} />;
}
