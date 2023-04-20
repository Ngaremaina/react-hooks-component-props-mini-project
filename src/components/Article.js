import React from "react";

function Article(props){
    const defaultDate = () => {
        const date = props.date?.toString() || new Date.now().toString();
        console.log(date)
        return <small>{date}</small>;
       
    }
    return(
        <article>
            <h3>{props.title}</h3>
            {defaultDate()}
            <p>{props.preview}</p>
        </article>
    )

}

Article.defaultProps = {
    date: new Date(),
  };

export default Article