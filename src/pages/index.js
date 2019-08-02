import React from 'react'
import { useRouteData } from "react-static"
import { Link } from "@reach/router"
import CodeBlock from "./../syntax/codeblock"

const ReactMarkdown = require("react-markdown");

export default () => {
  const { posts } = useRouteData();
  return (console.log({ posts }),
    (
      <div className="container">
        {posts.map(post => (
          <Link key={post.id} to={`/post/${post.id}`} className="card">
            {/* <div>
              {if (post.image != null) {
                <img
                  alt={post.title}
                  className="card-img"
                  src={`https://media.graphcms.com/${post.image.handle}`}
                />
              }
              }
            </div> */}
            <div>
              <h3>{post.title}</h3>
              <ReactMarkdown
                source={post.content}
                escapeHtml={false}
                renderers={{ code: CodeBlock }}
              />
            </div>
          </Link>
        ))}
      </div>
    )
  )
}
