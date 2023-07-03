import React from 'react'

 function BlogListItem(props) {
    //props.image
    //props.title
    //props.description
    return (
        <div>
            <div className="card" style={{width:"100%"}}>
                <img className="card-img-top img-fluid" src={props.image} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary">Read more</a>
                    </div>
            </div>
        </div>
    )
}

export default BlogListItem