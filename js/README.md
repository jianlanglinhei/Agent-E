# Agent-E JavaScript Example

This directory contains a minimal JavaScript example that mirrors part of the Python project.
The `open_url.js` script opens a URL using Playwright for Node.js and prints the final page URL and title.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ installed on your system.

## Setup

1. Navigate to the `js` directory:

   ```bash
   cd js
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

   This installs the Playwright package.

## Running the script

Execute the script with:

```bash
node open_url.js <url> [timeout_ms]
```

- `<url>`: The website to open (protocol is optional; `https://` is added if missing).
- `[timeout_ms]`: Optional timeout in milliseconds before closing the browser (default `3000`).

Example:

```bash
node open_url.js https://example.com 5000
```

This launches Chromium, navigates to the page, prints the title, waits for five seconds, and then closes the browser.

