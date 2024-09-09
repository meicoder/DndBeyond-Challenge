# TitanStar Legends Rune Mastery Loadout Talent Calculator 9000

This project is a coding challenge for a mock-up design of a tool for the fictitious game "TitanStar Legends." The application simulates a rune tree, allowing players to allocate talent points and replicate their in-game loadouts. This repository contains all the necessary assets and implementation to meet the specified requirements.

## Project Features

-   **Mobile-friendly/Responsive Design:** The application adapts to different screen sizes and devices, ensuring a seamless user experience.
-   **Modern Styling:** Styles are created using custom CSS (with the option of SCSS/LESS/CSS Modules/CSS-in-JS) to match the provided mock-up.
-   **Stateful JS Application:** The application manages state effectively to allow users to interact with the rune tree, adding and removing talent points with specific rules.

## Challenge Requirements

-   Left click to add points to a rune.
-   Right click to remove points.
-   A maximum of 6 points can be used in total.
-   Each rune can only account for one point.
-   The current point total is displayed.
-   The runes must be selected in a specific order (e.g., points cannot be allocated to the final rune without first allocating points to the preceding runes in order).

## Code Expectations

-   Code organization and maintainability are prioritized.
-   Modern JS best practices are followed.
-   The project closely follows the design provided in the mock-up.
-   Additional features or improvements are welcomed but not required.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/meicoder/DndBeyond-Challenge.git
    cd DndBeyond-Challenge
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm run dev
    ```

This will launch the Vite development server, allowing you to work on the project with hot module replacement (HMR) and other useful features.
