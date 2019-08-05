import path from 'path'
import request from "graphql-request"
import axios from "axios"

const GRAPHCMS_endpoint = "https://api-uswest.graphcms.com/v1/cjyt00rv801nc01e3fhxy6izr/master";

const query =
  `{
  posts{
    id
    title
    image {
      handle
    }
    content
  }
}`;

export default {
  getRoutes: async () => {
    const {
      posts
    } = await request(GRAPHCMS_endpoint, query);
    // console.log(posts);
    return [{
      path: '/',
      getData: () => ({
        posts,
      }),
      children: posts.map((post) => ({
        path: `/post/${post.id}`,
        template: 'src/templates/post',
        getData: () => ({
          post,
        }),
      })),
    }, ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}