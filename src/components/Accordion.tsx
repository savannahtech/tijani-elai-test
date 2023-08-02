import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

export default function CustomAccordion({ children, title }: any) {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton className='p-color font-bold'>
                <Box as='span' textAlign='left'>
                  {title || ''}
                </Box>
                {isExpanded ? (
                  <ChevronUpIcon fontSize='12px' />
                ) : (
                  <ChevronDownIcon fontSize='12px' />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{children}</AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}
