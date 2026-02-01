# Testing Guide - Commercial Lease Calculator

This project uses **Playwright** for End-to-End (E2E) testing to ensure the calculator works correctly across different lease scenarios.

## 1. Setup

Ensure you have installed the dependencies:

```bash
npm install
npx playwright install --with-deps
```

## 2. Running Tests

### Run all tests (Headless)
This runs the tests in the background and reports results.
```bash
npx playwright test
```

### Run tests with UI Mode (Interactive)
Best for debugging and seeing the browser in action.
```bash
npx playwright test --ui
```

### View Report
After a run, view the HTML report:
```bash
npx playwright show-report
```

## 3. Test Coverage

The current test suite (`e2e/calculator.spec.ts`) covers:
- **Calculator Loading**: Verifies inputs and labels appear.
- **NNN Logic**: Checks that selecting "Triple Net" reveals the Expenses field.
- **Math Verification**: Ensures inputs result in a calculated output (not $0).
- **Chart Visibility**: Verifies the chart component is rendered.

## 4. Manual Testing Checklist

| Feature | Action | Expected Result |
|---------|--------|-----------------|
| **Gross Lease** | Select "Gross / FS" | "NNN Expenses" field should vanish. |
| **NNN Lease** | Select "Triple Net" | "NNN Expenses" field should appear. |
| **Escalation** | Enter "5%" | Total Cost should be higher than 0%. |
| **Responsiveness** | Resize window to mobile | Cards should stack vertically. |
