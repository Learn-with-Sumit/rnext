import {expect, test, describe} from "vitest";
import {render, screen, fireEvent} from "@testing-library/react";

import Counter from "./counter";

describe("counter", () => {
    render(<Counter />);

    test("Initializing the counter with 0", () => {
        expect(screen.getByRole("heading", {level: 2, name: "0"})).toBeDefined();
    })

    test("Incerement Counter by 1", () => {
        fireEvent.click(screen.getByRole("button"));
        expect(screen.getByRole("heading", {level: 2, name: "1"})).toBeDefined();
    })


})