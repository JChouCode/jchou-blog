import React from "react"
import { useRouteData } from "react-static"

const ReactMarkdown = require("react-markdown");

export default () => {
  const { post } = useRouteData();
  return (
    <article>
      <h1>{post.title}</h1>
      <ReactMarkdown
        source={post.content}
      />
    </article>
  )
}