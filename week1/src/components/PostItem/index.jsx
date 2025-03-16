import React from "react";

const PostItem = ({props, title, number, children}) => {
    console.log(props)
    return (
        <>
            <div className="post-item">
                <p>==========PostItem ========== </p>
                <p>Hello {props.title}</p>
                {title} {number}
                {children}
            </div>
        </>
    )
}

export default PostItem



// const PostItem = (props) => {
//     console.log(props)
//     return (
//         <>
//             <div className="post-item">
//                 <p>Hello {props.name}</p>
//                 {props.title} {props.number}
//                 {children}
//             </div>
//         </>
//     )
// }
