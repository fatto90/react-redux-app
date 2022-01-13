import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import AddForm from "../components/AddForm";

let container = null;
const fakeVideos = [{ id:0 },{ id:3 },{ id:2 }];
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

it("should not store new videos on render", () => {
    const mockStoreNewVideo = jest.fn();
    act(() => {
        render(<AddForm videos={fakeVideos} storeNewVideo={mockStoreNewVideo} />, container);
    });
    expect(mockStoreNewVideo).not.toHaveBeenCalled();
});

it("should render with empty title and url", () => {
    const mockStoreNewVideo = jest.fn();
    act(() => {
        render(<AddForm videos={fakeVideos} storeNewVideo={mockStoreNewVideo} />, container);
    });
    expect(mockStoreNewVideo).not.toHaveBeenCalled();
    expect(container.querySelector('#titleField').value).toEqual('');
    expect(container.querySelector('#urlField').value).toEqual('');
});