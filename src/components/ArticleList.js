import React from "react";
import Article from "./Article"

function ArticleList({posts}) {
    const eachPost = posts.map((post) => {
        return (
            <article>
                <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
            </article>
        )
    })
    return (
        <main>
            {eachPost}
        </main>
    )
}

export default ArticleList;