import './styles.css'

export const Card = ({ card, handleOnClick }) => {
    return (
        <div onClick={() => handleOnClick({ card })} className="card" disabled={card.found}>
            <span>
                {card.open && <div>{card.value}</div>}
                {!card.open && <div></div>}
            </span>
        </div>
    )
}