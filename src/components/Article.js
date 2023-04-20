import React from "react";

function Article({minutes, title, date = "January 1, 1970", preview}){
    // const defaultDate = () => {
    //     const date = props.date?.toString() || new Date().toString();
    //     console.log(date)
    //     return <small>{date}</small>;
       
    //  }
    return(
        <article>
            <h3>{title}</h3>
            <small>
                {date} | {minutes}
            </small>
           
            <p>{preview}</p>
        </article>
    )

}


export default Article