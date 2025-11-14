# Vitest Practice Script

## Overview

This is a small practice project for learning how to write and run unit tests with **Vitest**.  
It focuses on testing simple, pure functions and viewing test coverage output in the browser.

## Project Structure

- `greeting.js`  
  Exports:

  - `makeGreeting(name, occasion)` – builds a properly cased greeting string.
  - `addSignature(message, from)` – appends a properly cased signature.
  - `toProperCase(str)` – converts a string to “Proper Case” (capitalizes each word).

- `greeting.test.js`  
  Vitest test suite that:

  - Verifies `makeGreeting` handles lower/upper/mixed case names and occasions.
  - Verifies `addSignature` normalizes casing and formats the signature.
  - Verifies `toProperCase` across a variety of mixed‑case inputs.

- `utils.js`  
  Exports:

  - `add(a, b)` – simple addition helper.
  - `toSnakeCase(text)` – converts text to `snake_case` by lowercasing and replacing spaces / punctuation with underscores.

- `utils.test.js`  
  Vitest test suite that:
  - Exercises `add` with positive, negative, large, and floating‑point values.
  - Exercises `toSnakeCase` with different combinations of spaces, punctuation, and mixed case.

## Prerequisites

- Node.js (LTS or newer)
- npm (comes with Node)
- Vitest installed as a dev dependency in this project

```bash
npm install -D vitest
```

Optionally, add this to your **package.json**:

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

## Running the Tests

Run Vitest in watch mode:

```bash
npm test
# or
npx vitest
```

Run the tests once (CI style):

```bash
npm run test:run
# or
npx vitest run
```

## Generating & Viewing Coverage

Generate a coverage report:

```bash
npm run test:coverage
# or
npx vitest run --coverage
```

Then open the HTML report (usually inside `coverage/`) in your browser, for example:

```text
coverage/index.html
```

The scripts in `coverage/block-navigation.js`, `coverage/prettify.js`, and `coverage/sorter.js` are automatically produced by the coverage tool and enhance the UI (navigation, syntax highlighting, sorting, and search).

## What This Project Demonstrates

- Writing unit tests for small, focused functions
- Normalizing string case for greetings and signatures
- Converting free‑form text into `snake_case`
- Using Vitest assertions (`toBe`, `toBeCloseTo`, etc.)
- Generating and exploring code coverage in the browser
