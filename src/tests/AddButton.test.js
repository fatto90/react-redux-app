import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import AddButton from "../components/AddButton";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("toggleShowAdd should not be called on rendering", () => {
    const mockToggleShowAdd = jest.fn();
    act(() => {
        render(<AddButton shouldShowAdd={true} toggleShowAdd={mockToggleShowAdd} />, container);
    });
    expect(mockToggleShowAdd).not.toHaveBeenCalled();
});