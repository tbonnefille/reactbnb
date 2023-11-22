import './card.css';







const Card = (props) => {

    return (


        <div className="card">

            <img src={props.img} alt={props.alt} />
            <div>{props.txt}</div>

        </div>










    )
}





export default Card;