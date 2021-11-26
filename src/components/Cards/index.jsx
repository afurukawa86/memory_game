import './styles.css'
import { Card } from '../Card'
import { useEffect, useState } from 'react'

const card = (id, value) => {
    return (
        {
            id: id,
            value: value,
            open: false,
            found: false,
            counter: 0
        }
    )
}

export const Cards = () => {
    const [cards, setCards] = useState([])
    const [cardOpened, setCardOpened] = useState()

    useEffect(() => {
        const newCards = []
        for (let i = 0; i < 8; i++) {
            newCards.push(card(i, Math.trunc(i / 2)))
        }
        setCards(newCards.sort(() => .5 - Math.random()))
    }, [])

    const closeAll = (index) => {
        setCards(() => {
            if (!cardOpened && !cards[index].found) {
                const newCards = [...cards]
                return newCards.map(card => {
                    if (!card.found) {
                        card.open = false
                    }
                    return card
                })
            }
        })
    }

    const handleOnClick = ({ card }) => {
        const index = cards.indexOf(card)
        const indexCardOpened = cards.indexOf(cardOpened)
        let open = false

        closeAll(index)

        setCards(() => {
            const newCards = [...cards]

            if (!cards[index].found) {
                if (!cardOpened) {
                    newCards[index].open = true
                    open = true
                } else {
                    if (index !== indexCardOpened) {
                        newCards[index].open = true
                        open = false

                        if (cards[index].value === cards[indexCardOpened].value) {
                            newCards[index].found = true
                            newCards[indexCardOpened].found = true
                            open = false
                        }
                    } else {
                        open = true
                    }
                }
            }
            return newCards
        })

        setCardOpened(() => {
            if (!cards[index].found || cards[index].value === cards[indexCardOpened]?.value) {
                if (open || index === indexCardOpened) {
                    return cards[index]
                }
                return
            }
            return cardOpened
        })
    }

    return (
        <div className="cards">
            {cards.map(c => {
                return (
                    <Card key={c.id} card={c} handleOnClick={handleOnClick} />
                )
            })}
        </div>
    )
}