import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: 'yzc3im4v4u3u',
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT
});
