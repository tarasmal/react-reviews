import './Review.css';
const Review = (props) =>(
    <div>
        <div className={'img-container'}>
            <img className={'person-img'} src={props.image} alt={props.name}/>
        </div>
        <h4 className={'author'}>{props.name}</h4>
        <p className={'job'}>{props.role}</p>
        <p className={'info'}>{props.content}</p>
        <div className={'button-container'}>
            <button onClick={() => props.choosePrevious()} className={'prev-btn'}>Previous</button>
            <button onClick={() => props.chooseNext()} className={'next-btn'}>Next</button>
        </div>
        <button onClick={() => props.chooseRandom()} className={'random-btn'}>surprise me</button>
    </div>
)

export default Review;