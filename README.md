Sports News and Scores Dashboard

Overview

The Sports News and Scores Dashboard is a web application built with React as part of the Web Development 301 capstone project. It allows users to browse sports news, view live scores, filter articles by sport and team, and personalize their dashboard by setting preferences for favorite sports and teams. The app is designed to be user-friendly, responsive, and production-ready, catering to both sports enthusiasts and casual users.

Features

Core Features





Browse Sports News: View a list of articles with titles, summaries, and thumbnails. Click "Read More" to see the full article in a modal.



Filter News Articles: Filter articles by sport using tabs, with dynamic updates without page reload.



View Live Scores: See ongoing matches with team names, scores, and status. Includes a manual refresh button for updating scores.



Personalize Dashboard: Create an account, sign in, and set preferences for favorite sports and teams to receive tailored news and scores.

Optional Features





Save favorite articles and matches (planned).



Allow users to change their account passwords (planned).

User Interface





Landing Screen: Displays the app name in the navigation bar, sign-in/sign-up links, live scores (last 5 matches), and trending news with sport tabs.



Sign-in/Sign-up Pages: Accessible via the navigation bar for user authentication.



Detailed Article View: Opens in a modal with the full article content and image.



Preferences Screen: Modal for logged-in users to set favorite sports and teams.



Responsive Design: Adapts to different screen sizes and devices for a consistent user experience.

Tech Stack





Frontend: React, React Router, CSS (with modular styles for each component)



API: Integrates with the provided WD301 Capstone API endpoints for articles, matches, sports, teams, and user management



State Management: React Context for authentication and user preferences



Performance: Code splitting with React.lazy and lazy loading of components


📸 Screenshots
https://./screenshots/landing.png 	https://./screenshots/article-modal.png
Trending news and live scores 	Detailed article view
https://./screenshots/signin.png	https://./screenshots/preferences.png
User authentication 	Customize your dashboard
