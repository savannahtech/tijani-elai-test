import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export default function Index() {
  return (
    <Tabs>
      <TabList paddingX={120} paddingBottom={2}>
        <Tab borderBottomWidth={1}>All Products</Tab>
        <Tab borderBottomWidth={1}>Featured</Tab>
        <Tab borderBottomWidth={1}>Previous Orders</Tab>
        <Tab borderBottomWidth={1}>Favorite Products</Tab>
      </TabList>

      <TabPanels paddingX={120}>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
        <TabPanel>
          <p>four!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
