import React from "react";

function Article(props){
    const defaultDate = () => {
        const date = props.date || new Date();
        return <small>{date.toString()}</small>
       
    }
    return(
        <article>
            <h3>{props.title}</h3>
            {defaultDate()}
            <p>{props.preview}</p>
        </article>
    )

}

export default Article