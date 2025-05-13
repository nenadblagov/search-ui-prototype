import React from "react";
import {
  SearchProvider,
  SearchBox,
  Results,
  Paging,
  PagingInfo,
  ResultsPerPage,
  Sorting,
  Facet,
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import config from "./searchConfig";

function App() {
  return (
    <SearchProvider config={config}>
      <div>
        <Layout
          header={<SearchBox />}
          sideContent={<Facet field="version" label="Version" />}
          bodyContent={<Results titleField="name" urlField="url" />}
          bodyHeader={
            <>
              <PagingInfo />
              <ResultsPerPage />
              <Sorting
                label="Sort by"
                sortOptions={[
                  { name: "Relevance", value: "" },
                  { name: "Name", value: "name" }
                ]}
              />
            </>
          }
          bodyFooter={<Paging />}
        />
      </div>
    </SearchProvider>
  );
}

export default App;
