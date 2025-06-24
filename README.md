# 🌿 Plant Care

**Live Website:** [Plant Care](https://plant-care-app-d7978.web.app/)

Plant Care Tracker is a full-stack, mobile-responsive web application designed to help users monitor and manage care tasks for their indoor and outdoor plants. Whether you’re nurturing succulents, ferns, or tropical beauties, this app ensures your green companions get the care they deserve.

---

## 🌟 Features

- **🔐 Secure User Authentication**  
  Firebase Authentication allows users to sign up, log in, and access their personal dashboard securely.

- **🪴 Add, Update, Delete Plant Records**  
  Authenticated users can fully manage their own plant collection with CRUD functionality (Create, Read, Update, Delete).

- **🌍 View All User Plants**  
  Users can view not only their own plants but also those added by other users — promoting a shared plant care community.

- **🌓 Light/Dark Theme Toggle**  
  A user-friendly toggle on the homepage lets users switch between light and dark themes for a comfortable browsing experience.

- **💧 Task Logging & Visual Feedback**  
  Log watering and fertilizing tasks, with styled success/error messages that make the app feel responsive and engaging.

- **📱 Fully Responsive Design**  
  Built with Tailwind CSS and DaisyUI for a clean, plant-themed interface that looks great on mobile, tablet, and desktop.

---

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI  
- **Backend:** Node.js, Express.js (hosted on **Vercel**)  
- **Database:** MongoDB 
- **Authentication & Hosting:** Firebase Authentication & Firebase Hosting  

---

## 🛠️ How to Run Locally To run Tech Deal on your local machine:


1. Clone the repository:
   ```bash
   git clone https://github.com/ibrahim3761/Plant-Care-Client.git
   cd Plant-Care


2. Install dependencies::
    ```bash
    npm install

    ⚠️ Make sure to initialize Tailwind CSS and configure Vite if you haven’t already. For example, after installing, run:
    ```bash
    npx tailwindcss init -p

3. Configure Firebase:
    Create a .env.local file and add your Firebase config:
    ```env
    VITE_API_KEY=your_api_key
    VITE_AUTH_DOMAIN=your_auth_domain
    VITE_PROJECT_ID=your_project_id
    VITE_STORAGE_BUCKET=your_storage_bucket
    VITE_MESSAGING_SENDER_ID=your_sender_id
    VITE_APP_ID=your_app_id

4. Run locally:
    ```bash
    npm run dev

## 🚀 Deployment Steps to Firebase

1. Login to Firebase CLI (if not already):
    ```bash
    npm install -g firebase-tools
    firebase login

2. Initialize Firebase in your project:
    ```bash
    firebase init

    Choose Hosting.
    Select your Firebase project.
    Set dist as the public directory.
    Choose Yes for single-page app rewrite (index.html).
    Choose No for GitHub deploys (unless needed).

3. Build your React app:
    ```bash
    npm run build

4. Deploy to Firebase:
    ```bash
    firebase deploy

---