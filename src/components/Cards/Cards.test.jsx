import { render } from "@testing-library/react"
import { Cards } from "."

describe('<Cards />', () => {
    const card =
    {
        id: 1,
        value: 1,
        open: false,
        found: false,
        counter: 0
    }

    it('should render the cards"', () => {
        const fn = jest.fn()

        expect.assertions(1)
        const { container } = render(<Cards />)
        expect(container.firstChild).toBeInTheDocument()

    })
})