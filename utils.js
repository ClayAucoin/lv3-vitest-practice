// utils.js

export function add(a, b) {
  return a + b;
}

export function toSnakeCase(text) {
  // Convert text to snake_case by replacing spaces with underscores and lowercasing
  return text.replaceAll(' ', '_').replaceAll(/\W/g, '_').toLowerCase();
}

