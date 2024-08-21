# KangaCook

# KangaCook - Your Ultimate Recipe Sharing Platform
KangaCook is a dynamic and interactive web application designed to bring food enthusiasts together. Whether you're a seasoned chef or just starting out, KangaCook offers a platform to discover, share, and explore a wide variety of recipes from around the world.

## Features

- **Interactive Recipe Cards:** Browse through beautifully designed recipe cards that flip to reveal detailed instructions and ingredients. Each card is visually appealing and easy to navigate.
- **User-Contributed Recipes:** Engage with the community by sharing your culinary creations. Submit your recipes and see them featured on the platform for others to try.
- **Responsive Design:** Enjoy a seamless experience on any device, with a layout that adapts to different screen sizes for easy access on the go.
- **Dynamic Blog:** Stay updated with the latest trends, tips, and user submissions in the blog section. Contribute your own recipes and be a part of the KangaCook community.
- **Contact Us:** Have questions or feedback? Reach out to us through the dedicated contact page, and we’ll be happy to assist.

## Technologies Used
- **Frontend:** React.js, HTML5, CSS3 (with responsive design)
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (or any preferred database)
- **Styling:** Custom CSS with a focus on clean, modern design and intuitive user experience

## Getting Started:
To get started with KangaCook, clone the repository and follow the setup instructions in the installation guide. Once set up, you can begin adding your own recipes, exploring community submissions, and making the most of this vibrant cooking hub.

## How to Run

Follow these steps to run the KangaCook application locally on your machine:

### Prerequisites

Make sure you have the following installed:
- **Python 3.x** and **pip**
- **Node.js** and **npm/yarn**

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hrishikeshrd/Roulettech.git
   cd kangacook
   ```


2. **Backend Setup:**
    Navigate to the backend directory and install the required Python packages:
    ```bash
    cd cook_day
    pip install -r requirements.txt
    ```
    Apply the database migrations:
     ```bash
    python manage.py migrate
    ```
    Start the Django development server:
     ```bash
    python manage.py runserver
    ```

3. **Frontend Setup:**
    Open a new terminal window or tab, navigate to the frontend directory, and install the required packages:
    ```bash
    cd cook_day_fe
    npm install
    ```
    Start the React development server:
    ```bash
    npm start
    ```
4. **Access the Application:**
    Open your web browser and go to http://localhost:3000 to view and interact with the KangaCook application.

## Troubleshooting
- Ensure that both the backend and frontend servers are running simultaneously.
- If you encounter any issues, check for error messages in the terminal and ensure all dependencies are correctly installed.

## Disclaimer
We have used this logo for educational and demonstration purposes only as part of our project. We do not intend to infringe on any copyrights or trademarks. All rights to the logo and related assets belong to their respective owners.

