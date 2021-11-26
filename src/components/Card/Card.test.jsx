import { render, screen } from "@testing-library/react"
import { Card } from "."

describe('<Card />', () => {
    const card =
    {
        id: 1,
        value: 1,
        open: false,
        found: false,
        counter: 0
    }

    it('should render the card"', () => {
        const fn = jest.fn()

        expect.assertions(2)
        const { container } = render(<Card key={card.id} card={card} handleOnClick={fn} />)
        expect(container.firstChild).toBeInTheDocument()
        expect(container.firstChild).toHaveClass('card')

    })
})