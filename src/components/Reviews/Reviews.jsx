import Review from "../Review/Review";
import data from "../../data";
import {useState} from "react";

const Reviews = () => {
    const [idState, setIdState] = useState(1), person = data[idState],
        chooseRandom = () => setIdState(Math.floor(Math.random() * (data.length))), choosePrevious = () => {
            let id = (idState === 0) ? (data.length - 1) : (idState - 1);
            setIdState(id);
        }, chooseNext = () => {
            let id = (idState === data.length - 1) ? 0 : (idState + 1);
            setIdState(id);
        };

    return <section className={'container'}>
    <div className={'title'}>
        <h2>Our Reviews</h2>
        <hr/>
    </div>
    <Review
        chooseRandom={chooseRandom}
        choosePrevious={choosePrevious}
        chooseNext={chooseNext}
        key={idState}
        name={person.name}
        mage={person.image}
        role={person.role}
        content={person.content}
    />
</section>;
};
export default Reviews;