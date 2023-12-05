import { Box, Heading, Text } from '@chakra-ui/react';
import { renderContentfulRichText } from '@/contentful/utils';
import { Document } from '@contentful/rich-text-types';
import { usePageContext } from '@/context/pageState';
import Section from '@/components/Section/Section';

function Profile() {
  const { pageData } = usePageContext();

  const pageTitle = pageData?.title && pageData.title;
  const pageText =
    pageData?.text && renderContentfulRichText(pageData.text as Document);
  const pageSections = pageData?.sections && pageData.sections;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      w="full"
      fontFamily="sans-serif"
    >
      {pageTitle && (
        <Heading as="h1" size="2xl" mb="4">
          {pageTitle}
        </Heading>
      )}
      <Box>{pageText}</Box>
      {pageSections &&
        pageSections.length > 0 &&
        pageSections.map((section, index: number) => (
          <Section
            key={`profile-section-${index}`}
            sectionData={section.fields}
          />
        ))}
    </Box>
  );
}

export default Profile;
