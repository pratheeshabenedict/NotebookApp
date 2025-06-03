---

# React Notes App with Dark/Light Theme Toggle

## Overview

This is a simple React Notes application that allows users to add, view, and manage notes. It features a **dark/light theme toggle** implemented using React Context and Tailwind CSS dark mode support. The user’s theme preference is saved in `localStorage` so it persists across sessions.

---

## Features

* Add, view, and manage notes
* Toggle between light and dark themes
* Theme preference saved in localStorage
* Responsive UI styled with Tailwind CSS
* Clean state management using React Context and hooks

---

## Tech Stack

* React (with hooks and Context API)
* Tailwind CSS (with dark mode class strategy)
* localStorage for persistent theme preference
* React Router for routing between pages (optional)
---

## How Theme Toggle Works

* The `ThemeContext` provides the current theme and a toggle function to switch themes.
* The theme state is initialized from `localStorage` (defaults to `'light'` if not set).
* When toggled, the theme state updates and saves the new value to `localStorage`.
* A `useEffect` hook adds/removes the `'dark'` CSS class on the root HTML element (`<html>`) to activate Tailwind’s dark mode styles.
* This setup ensures consistent and persistent theming across the app and user sessions.

---
## Usage

* Use the **Add Note** form to create new notes.
* View all notes in the **Notes List**.
* Click on a note to view or edit details.
* Use the **Theme Toggle** button in the header to switch between dark and light modes.

---

## Contributions

Feel free to fork the repository, add features, fix bugs, and submit pull requests.

---

##Output
![image](https://github.com/user-attachments/assets/e790a88a-a002-4d25-954f-bc3989e3a403)
![image](https://github.com/user-attachments/assets/3795cd2b-37f7-4729-b517-96c2ad6a1d7c)
![image](https://github.com/user-attachments/assets/a9c744bf-16f8-4539-91f9-353e1552b2a5)


## License

This project is open-source and available under the MIT License.

---

If you want, I can help you customize it further or add badges!
