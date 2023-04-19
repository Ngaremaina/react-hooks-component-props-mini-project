import React from "react";
import Articles from "./Articles";

function ArticleList({posts}){
    console.log(posts)
    const articles = posts.map(post => {
        return <Articles key={post.id} title = {post.title} date = {post.date} preview = {post.preview}/>
    })
    return (
        <main>
           {articles}

        </main>
    )

}

export default ArticleList