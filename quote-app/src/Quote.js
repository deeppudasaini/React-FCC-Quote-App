import React, {useState} from 'react'
import QuoteData from './QuoteData'

export default function Quote(props) {
const [index, setIndex] = useState(0)
const {name,job,text,image}=QuoteData[index]

    return (
        <article className="review">
            <div className="img-container">
            <img src={image} className="person-img"/>
            <span className="quote-icon">
          <i className="fa fa-quote-right"></i>
            </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={()=>index===0?setIndex(QuoteData.length-1):setIndex(index-1)}><i className="fa fa-angle-left"></i></button>
                <button className="next-btn"  onClick={()=>index===QuoteData.length-1-1?setIndex(0):setIndex(index+1)}><i className="fa fa-angle-right"></i></button>
                <button className="random-btn" onClick={()=>setIndex(Math.floor(Math.random() * (QuoteData.length)))}>Random</button>
            </div>
        </article>
    )
}
