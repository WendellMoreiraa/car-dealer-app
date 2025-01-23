Car Dealer App
This repository contains the code for the Car Dealer App developed using Next.js. The application allows users to filter vehicles by make and model year, and view the results on a separate page.

Core Features
Filter Page:

Select vehicle makes from a dropdown.
Select model years (2015 to the current year).
A "Next" button that becomes enabled only after selecting make and year.
Result Page:

Display the filtered vehicle models.
Integration with the vpic.nhtsa.dot.gov API to fetch models based on make and year.
Technologies Used
Next.js: React framework for building server-rendered applications.
Tailwind CSS: Utility-first CSS framework for rapid design and styling.
React: JavaScript library for building user interfaces.
Fetch API: Used to fetch data from APIs and handle responses.
React Suspense: Manages loading states and fallback components.
TypeScript: Type-checking for safer code and better maintainability.
How to Run the Project
Prerequisites
Node.js installed on your machine.
Steps to run the project:
Clone this repository:

git clone https://github.com/WendellMoreiraa/car-dealer-app
Navigate to the project directory:

cd repo-name
Install dependencies using npm :

npm install

Create a .env.local file in the root directory and add your API key:
env

NEXT_PUBLIC_VPIC_API=https://vpic.nhtsa.dot.gov/api/

Run the development server:

npm run dev

The app will be available at:
http://localhost:3000

Project Structure
pages/: Contains all the routes of the application, like index and result.
components/: Reusable components such as filters, vehicle cards, etc.
public/: Public assets like images used in the project.
styles/: Custom CSS files and Tailwind configuration.
