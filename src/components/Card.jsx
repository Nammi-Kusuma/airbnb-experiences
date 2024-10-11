import '../css/Card.css'

function Card(props) {
    let badgeText
    if(props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    console.log(props)
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../src/assets/${props.item.coverImg}`} alt="" className="card-image"/>
            <div className="card-stats">
                <img src="../src/assets/star.png" alt="" className="card-star"/>
                <span>{props.item.stats.rating} </span>
                <span className="gray"> ({props.item.stats.reviewCount}) . </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-text card-price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card