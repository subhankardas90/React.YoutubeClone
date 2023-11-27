import React from 'react'

const commentData = [
    {   
        id:1,
        "name": "Subhankar", 
        "text": "test comment", 
        replies:[]
    },
    {
        id:2,
        "name": "Subhankar1", 
        "text": "test comment",
        replies:[]
    }, 
    {
        id:3,
        "name": "Subhankar2", 
        "text": "test comment",
        replies:[{
            id:1,
            "name": "Subhankar", 
            "text": "test comment",
            replies:[{
                id:1,
                "name": "Subhankar", 
                "text": "test comment",
                replies:[]
            },{
                id:2,
                "name": "Subhankar", 
                "text": "test comment",
                replies:[{
                    id:1,
                    "name": "Subhankar", 
                    "text": "test comment",
                    replies:[]
                }, 
                {
                    id:2,
                    "name": "Subhankar", 
                    "text": "test comment",
                    replies:[]
                }]
            }]
        },
        {
            id:4,
            "name": "Subhankar", 
            "text": "test comment",
            replies:[]
        },
        {
            id:5,
            "name": "Subhankar", 
            "text": "test comment",
            replies:[]
        }]
    }, 
    {
        id:4,
        "name": "Subhankar", 
        "text": "test comment",
        replies:[]
    }, 
    {
        id:5,
        "name": "Subhankar", 
        "text": "test comment",
        replies:[]
    }, 
    {
        id:6,
        "name": "Subhankar", 
        "text": "test comment",
        replies:[]
    }, 
    {
        id:7,
        "name": "Subhankar", 
        "text": "test comment",
        replies:[]
    }, 
]

const Comment =({data}) =>{
    const {name, text, replies} = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2"> 
        <img className='w-5 h-5' alt = "user" src="https://cdn-icons-png.flaticon.com/512/666/666201.png" />
        <div className='px-2'>
            <p className="font-bold"> {name}</p>
            <p> {text}</p>
        </div>
      </div>)
}

const CommentList =({comments, index})=>{
    //don't use index as key
    return comments.map(comment => 
    <div key ={comment.id} >
        <Comment data = {comment}/>
        <div className="pl-5 border boder-l-black">
            <CommentList comments= {comment.replies}/>
        </div>
    </div>)
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className="text-2xl font-bold">Comments: </h1>
        <CommentList comments= {commentData}/>
    </div>
  )
}

export default CommentsContainer