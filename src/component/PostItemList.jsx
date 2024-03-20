
export const PostItemList=({key,title,body})=>{
    return (
        <div key={key}>
            <h3>{title}</h3>
            <h4>{body}</h4>
            <hr/>
        </div>
    )
}