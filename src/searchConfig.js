import ElasticsearchConnector from "@elastic/search-ui-elasticsearch-connector";

const connector = new ElasticsearchConnector({
  host: import.meta.env.VITE_ELASTICSEARCH_HOST,
  index: "edp-data",
  apiKey: import.meta.env.VITE_ELASTICSEARCH_API_KEY,
});

const config = {
  apiConnector: connector,
  searchQuery: {
    search_fields: {
      name: {},
    },
    result_fields: {
      name: { snippet: { size: 100, fallback: true } },
      url: { raw: {} },
      description: { snippet: { size: 100, fallback: true } },
    },
  },
};

export default config;
