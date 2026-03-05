# Customer Support Zone

React + Tailwind CSS + Vite based ticket management website for Assignment-02.
The UI follows the provided Figma (`Customer Support — Ticket System.fig`) layout: navbar, gradient banner with stats, ticket grid, task status panel, and dark footer.

## Live Project Overview

- Ticket cards are shown in a 2-column responsive layout.
- Clicking **Add to Task Status** moves a ticket into the in-progress panel.
- Clicking **Complete**:
1. Removes it from Task Status.
2. Adds it to the Resolved List.
3. Decreases In Progress count.
4. Increases Resolved count.
5. Removes the ticket from the Customer Tickets list.
- All action alerts are implemented with **React-Toastify**.

## Technology Stack

- HTML
- Tailwind CSS v4
- JavaScript
- React v19
- Vite v7
- React-Toastify

## Run Commands

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
Assignment 2/
├─ Customer Support — Ticket System.fig
├─ vector1.png
├─ vector2.png
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ App.jsx
   ├─ features/
   │  └─ tickets/
   │     ├─ components/
   │     │  ├─ BoardFooter.jsx
   │     │  ├─ BoardHero.jsx
   │     │  ├─ BoardNavbar.jsx
   │     │  ├─ ResolvedTicketsSection.jsx
   │     │  ├─ TaskStatusSection.jsx
   │     │  ├─ TicketBoardLayout.jsx
   │     │  ├─ TicketCard.jsx
   │     │  └─ TicketsSection.jsx
   │     ├─ data/
   │     │  └─ tickets.js
   │     ├─ config/
   │     │  ├─ navigation.js
   │     │  └─ styles.js
   │     ├─ hooks/
   │     │  └─ useTicketBoard.js
   │     ├─ constants.js
   │     ├─ useTicketBoard.js
   │     └─ index.js
   ├─ index.css
   └─ main.jsx
```

## React Concept Answers

### 1) What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension that allows writing HTML-like UI code inside JavaScript.
It is used in React because it makes component structure easier to read and maintain while still using full JavaScript logic.

### 2) What is the difference between State and Props?

- **Props** are inputs passed from a parent component to a child component. They are read-only in the receiving component.
- **State** is data managed inside a component and can change over time due to user actions or logic.

### 3) What is the `useState` hook, and how does it work?

`useState` is a React hook that creates reactive state in functional components.
It returns:

1. Current state value.
2. A setter function to update the value.

When the setter is called, React re-renders the component with the updated state.

### 4) How can you share state between components in React?

The common approach is **lifting state up**:

1. Move shared state to the nearest common parent.
2. Pass data down via props.
3. Pass handlers down so children can request updates.

For larger apps, Context API or state libraries can also be used.

### 5) How is event handling done in React?

Event handling in React is done by attaching handlers with camelCase props, for example:

- `onClick`
- `onChange`
- `onSubmit`

You pass a function reference, and React calls it when the event occurs.

Example:

```jsx
<button onClick={handleClick}>Click</button>
```

## Submission

- Live Link: `YOUR_DEPLOYED_URL_HERE`
- GitHub Repository: `YOUR_REPO_URL_HERE`
# CS_Ticket_System
