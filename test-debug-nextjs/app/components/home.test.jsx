import {test, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Home from "./home";

test("Test the home component", () => {
    render(<Home />);
    expect(screen.getByText("Hello!")).toBeDefined();
} )