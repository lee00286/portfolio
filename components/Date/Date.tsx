import React from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

function Date({
  startDate,
  endDate
}: {
  startDate: string;
  endDate: string | undefined;
}) {
  const bgColor = useColorModeValue('yellow.100', 'gray.400');

  return (
    <Flex
      justify="flex-start"
      align="center"
      gap="1"
      mb={{ base: '2', md: '4' }}
      pt="1"
      pb="1"
      pl="2"
      pr="2"
      borderRadius="lg"
      backgroundColor={bgColor}
    >
      <Box width="4">
        <CalendarDaysIcon />
      </Box>
      <Text fontSize="xs">
        {startDate} {endDate && `~ ${endDate}`}
      </Text>
    </Flex>
  );
}

export default Date;