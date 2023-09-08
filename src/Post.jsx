import './Post.css'
export default function Post({post}){
    const {title, body, userId, id} = post;
    return (
        <div className="box">
            <h3>Title: {title} </h3>
            <p> UserId: <small> {userId} </small> </p>
            <p> Id: <small> {id} </small> </p>
            <p>Body: {body} </p>
        </div>
    )
}