# KCC - Construction Company Website

KCC is a modern and responsive construction company website built using **Next.js**, **Tailwind CSS**, and **Nodemailer**. This website provides information about the company, its services, and a contact form for inquiries.

## 🚀 Features

- Fully responsive design using Tailwind CSS
- Fast and SEO-friendly with Next.js
- Contact form with email functionality using Nodemailer
- Dynamic routing and optimized images
- Clean and structured codebase

## 🛠 Technologies Used

- **Next.js** - React framework for SSR and performance optimization
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Nodemailer** - For handling email functionality in the contact form

## 📂 Project Structure

```
KCC/
│── public/          # Static assets (images, logos, etc.)
│── pages/           # Next.js pages (Home, About, Contact, etc.)
│── components/      # Reusable UI components
│── styles/         # Global styles and Tailwind configurations
│── utils/          # Helper functions (email handling, etc.)
│── .env            # Environment variables for email service
│── package.json    # Project dependencies and scripts
│── README.md       # Project documentation
```

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/abhishekboadgurjar/kcc.git
cd kcc
```

### 2️⃣ Install Dependencies
```bash
yarn install  # or npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file and add your email service credentials:
```env
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### 4️⃣ Run the Development Server
```bash
yarn dev  # or npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the project in action.

## 📬 Contact Form Integration
The contact form in this project uses **Nodemailer** to send emails. Ensure you configure your SMTP settings correctly in `.env.local`.

## 🚀 Deployment
To deploy the project on **Vercel**, follow these steps:
1. Push your code to GitHub.
2. Connect the repository to [Vercel](https://vercel.com/).
3. Set up environment variables in Vercel's dashboard.
4. Deploy and get your live URL.

## 📜 License
This project is licensed under the MIT License.

## ✨ Author
Developed by **[Abhishek Gurjar](https://github.com/abhishekboadgurjar)**.
