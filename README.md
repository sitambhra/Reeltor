 📌 Steps to Fork and Set Up the Project

1️⃣ Fork the Repository

1. Go to the GitHub repository: Project Repository

2. Click on the Fork button at the top-right corner.

3. This will create a copy of the repository in your GitHub account.

2️⃣ Clone the Forked Repository

1. Navigate to your forked repository on GitHub.

2. Click on the Code button and copy the HTTPS or SSH link.

3. Open your terminal and run:
```bash
git clone https://github.com/your-username/your-repository.git
```


4. Change to the project directory:
```bash
cd your-repository
```

3️⃣ Install Dependencies

Make sure you have Node.js installed. If not, download and install it from Node.js official website.

1.Install all required dependencies:
```bash
npm install
```

4️⃣ Start the Development Server

1.Run the project in development mode:

```bash
npm run dev
```

2. The app will be available at:
```bash
http://localhost:3000/
```

🎨 Tailwind CSS Setup 

This project uses Tailwind CSS for styling. If you need to modify styles, edit the tailwind.config.js file and use Tailwind utility classes in your components.

📊 Using Recharts

Recharts is already installed and used in this project for creating charts. If you want to add a new chart, import components like this:

```bash
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
```

You can check the official Recharts documentation on their official page.

💡 Contributing

1. Create a new branch for your changes:
```bash
git checkout -b feature-branch
```

2. Make your modifications and commit them:
```bash
git add .
git commit -m "Describe your changes"
```
3. Push to your fork:
```bash
git push origin feature-branch
```
4. Open a Pull Request from your forked repository to the original repository.

✨ Happy Coding! 🚀


