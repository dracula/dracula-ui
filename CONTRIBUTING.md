# Dracula UI (Early Access)

> A dark-first collection of UI patterns and components.

Thank you for your interest in contributing to Dracula UI, and for making the time to test our alpha release.
We're grateful to have you as an early adopter 🥰

Here's an overview of the architecture and some useful commands.

## Architecture Overview

- Each component consists of a React component implementation, a CSS stylesheet, and a Figma component.
- Components are stateless and do not ship with JavaScript behavior.
- All styling is done in CSS via CSS variables for maximum reuse and accessibility.

# Folder Structure

- src/styles: Contains the CSS styles for all components, typography, and colors.
- src/components: Contains the React implementation for each component.
- sec/base: Contains the base spacing and color helpers.

## Component Design Guidelines

- Please don't include manual style changes in React Components.
- Keep HTML and CSS simple as to not generate long and complex HTML trees.
- Use CSS and especially CSS variables to compose your design, so the final result is as inclusive as possible to a wide range of users.

## Useful Commands and Getting Started

Getting started:

```sh
$ yarn install
$ yarn docs
$ yarn dev
```

## Running Tests

You can run all tests with the following command:
Component tests will be executed with React and Enzyme, which compares rendered components to pre-existing snapshots.

```sh
$ yarn test
```

## Generating Documentation

You can update component documentation in one of two ways:

- a) Update TSDoc definitions that live alongside components
- b) Update `src/<component>/__tests__/<component>.test.tsx`, which will generate examples / docs for the main docs website

```sh
$ yarn docs # generates examples, documentation, and snapshots for each component
```

## Accessing Docs

You can access the documentation portal by running the following command, then visiting [http://localhost:3000] on your browser.

```sh
$ yarn dev
```
