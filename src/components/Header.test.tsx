import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Header from "./Header"

describe("Header test", () => {
    test("Title should be shown", () => {
        // Test case
            render(<Header title="Welcome to my apps!"/>)
            expect(screen.getByText(/Welcome to my apps!/i)).toBeDefined()
    })
})