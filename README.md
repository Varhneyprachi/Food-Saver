# 🌍 Food Saver  
**Reduce Waste • Feed People • Build a Better Community**

A platform that connects **food donors** (restaurants / canteens / individuals) with **volunteers/NGOs** who collect and distribute surplus food to those in need.

🔗 **Live Demo:** https://food-saver-ecru.vercel.app/

---

## ✨ Highlights
- 🍱 Post available surplus food
- 🤝 NGOs/volunteers can claim requests
- 📍 Pickup details & location
- ♻️ Reduces food waste + promotes social good
- 🌐 Deployed and accessible online

---

## 🧠 Tech Stack
| Frontend | Backend | Deployment |
|---------|----------|-------------|
| React + Vite | Node.js + Express (Backend folder) | Vercel (Frontend) |

---

## 📁 Project Structure
Food-Saver/
│
├── Backend/ # Node/Express API (in progress)
├── public/ # Static assets
├── src/ # Frontend source (React)
├── index.html
├── vite.config.js
└── package.json

yaml
Copy code

---

## ⚙️ Installation & Setup
```bash
# 1. Clone the repository
git clone https://github.com/Varhneyprachi/Food-Saver.git

# 2. Move to folder
cd Food-Saver

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
🔧 Environment Variable (Frontend)
Create a .env in root:

bash
Copy code
VITE_API_BASE=http://localhost:4000/api
When backend is live, API calls will work from the frontend.

📌 Features in Progress
Feature	Status
Backend API Integration	🔄 In Development
Authentication (JWT)	🔜 Planned
MongoDB Storage	🔜 Planned
Image Upload / Proof of Delivery	🔜 Planned
Real-time Updates	🔜 Planned

🔮 Roadmap
✅ Basic UI & frontend setup
🔜 API endpoints (donor + volunteer)
🔜 JWT login/register
🔜 Maps & geolocation
🔜 Delivery proof uploads
🔜 Impact dashboard

📝 License
This project is licensed under the MIT License.

💡 Food Saver aims to convert food waste into opportunity — bridging kindness with technology.




