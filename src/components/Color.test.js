import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

test("Renders without errors with blank color passed into component", () => {
    <Color />
});
  
test("Renders the color passed into component", () => {
    <Color />
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    <Color />
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    <Color />
});