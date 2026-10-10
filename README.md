# KrishHappy Learn 🚀
> **"Learn Smarter. Focus Better. Grow Happier."**

KrishHappy Learn is an AI-powered educational, career readiness, and student well-being platform designed to help students master technical skills, prepare for competitive examinations (GATE, Campus Placements, Technical Interviews), maintain cognitive focus, and cultivate science-backed wellness habits.

---

## 🌟 Key Features Overview

### 1. 🏠 Welcoming Home & Mission Portal (`index.html`)
- Educational mission statement and quick launch buttons (*Start Learning*, *Explore Skills*, *Track My Focus*).
- Interactive previews of competitive exam syllabi, skill mastery pathways, focus timer, and guided breathwork.
- Transparent educational disclaimers.

### 2. 📊 Student Cockpit & Dashboard (`dashboard.html`)
- Live study time tracking with customizable daily learning targets (e.g. 2h/day).
- Study streak counter to build consistent learning momentum.
- Interactive today's study checklist with auto-logging of study minutes upon task completion.
- Real-time skill competency progress bars and quick AI tutor launch.

### 3. 🤖 AI Learning Assistant / AI Tutor (`ai-tutor.html`)
- Interactive chat interface with smart academic knowledge base for instant answers on algorithms, operating systems, database ACID properties, Python decorators, and study tips.
- Quick prompt chips for common exam inquiries.
- Export chat conversations to text file.
- Custom API settings modal (allowing optional connection to OpenAI / Gemini REST endpoints with client-side key safety).

### 4. 🎯 Competitive Exam Preparation (`exams.html`)
- Modular question bank covering **GATE Computer Science**, **Campus Placement Aptitude**, **Coding Assessments**, and **Technical Interviews**.
- Practice test countdown timer.
- Instant answer feedback with color-coded correct/wrong states and detailed explanations.
- Score calculation and achievement modal with celebratory confetti.
- Interactive subject revision checklist.

### 5. 🚀 Job-Ready Career Skills & Roadmap (`skills.html`)
- 10 in-demand career tracks: **Python, Java, Web Development (HTML/CSS/JS), DSA, AI/ML, SQL, Git & GitHub, Soft Skills, Resume Building, and Technical Interview Prep**.
- Career milestone roadmap guiding students from beginner fundamentals to internship and job readiness.
- Interactive lesson viewer with hands-on simulated code runner sandbox.

### 6. ⏱️ Focus & Concentration Tracker (`focus.html`)
- Customizable Pomodoro timer (25-minute focus, 5-minute short break, 15-minute long break).
- Visual SVG circular countdown ring with start, pause, resume, and reset controls.
- Web Audio API synthesized focus chimes and ambient sound generator (**Rain, White Noise, 432Hz Binaural Beats**) requiring zero external media downloads.
- Daily focus logs and session history stored in `LocalStorage`.

### 7. 🌿 Student Healthcare & Wellness Hub (`wellness.html`)
- Animated 4-7-8 parasympathetic guided breathing circle with audio cues to alleviate test anxiety.
- Daily hydration tracker with 8 interactive visual water glasses.
- 20-20-20 screen break timer to prevent digital eye strain.
- Daily mood check-in with sentiment journal.
- Healthy study posture & sleep hygiene guide.
- Student burnout prevention self-assessment quiz.

### 8. 📅 Personalized Study Planner (`planner.html`)
- Task creation and management modal (Subject, Priority: High/Medium/Low, Estimated Duration, Target Date).
- Filter by status (All, Pending, Completed).
- **AI Smart Daily Timetable Generator** that auto-creates an optimized hourly schedule.
- Export schedule to text.

### 9. 📈 Progress Analytics & Reports (`progress.html`)
- 7-Day study time bar chart.
- Exam accuracy breakdown by category.
- 30-Day study consistency heatmap calendar.
- Mock test log table and downloadable student progress report.

### 10. 👤 User Profile & Personalization (`profile.html`)
- Custom student avatar, education level, target exam, and daily study target settings.
- Local data backup download (JSON).
- One-click factory reset option for demo data.

---

## 💻 Tech Stack & Architecture

- **Structure**: HTML5 (Semantic, accessible elements).
- **Styling**: Vanilla CSS3 (Custom design tokens, light/dark mode variables, glassmorphism, responsive grid).
- **Logic**: Vanilla JavaScript ES6+ (Modular architecture, zero runtime bloat).
- **Storage**: Browser `LocalStorage` for full client-side privacy and data persistence across refreshes.
- **Audio**: Web Audio API oscillator synthesis (No external mp3 dependencies, works completely offline).

---

## 📁 Project File Structure

```
krishhappy-learn/
├── index.html              # Homepage
├── dashboard.html          # Student dashboard
├── ai-tutor.html           # AI Learning Assistant
├── exams.html              # Competitive Exam prep & MCQs
├── skills.html             # Job-ready skills & code sandbox
├── focus.html              # Focus tracker & Pomodoro timer
├── wellness.html           # Student wellness & breathing guide
├── planner.html            # Study planner & AI timetable
├── progress.html           # Analytics & consistency heatmap
├── profile.html            # Profile & LocalStorage backup
├── css/
│   ├── style.css           # Design tokens, typography, layout & theme variables
│   ├── components.css      # Component cards, timers, breathing visualizer, chat UI
│   └── responsive.css      # Mobile, tablet, and desktop media queries
├── js/
│   ├── storage.js          # Centralized LocalStorage data store & seed data
│   ├── app.js              # Theme toggle, navigation drawer, audio synthesis, toast alerts
│   ├── dashboard.js        # Dashboard dynamic metrics & task completion
│   ├── ai-tutor.js         # Chatbot engine & academic knowledge base
│   ├── exams.js            # MCQ quiz engine, timer, and score calculator
│   ├── skills.js           # Skills tracks & sandbox code executor
│   ├── focus.js            # Pomodoro timer, ambient audio & session log
│   ├── wellness.js         # 4-7-8 breathing circle, hydration & burnout check
│   ├── planner.js          # Task manager & AI schedule generator
│   ├── progress.js         # Analytics charts, heatmap, and export
│   └── profile.js          # Profile customizer & JSON export/reset
└── README.md               # Project documentation & setup guide
```

---

## 🚀 How to Run Locally

### Option 1: Double-click / Open in Browser
Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Option 2: Visual Studio Code (Live Server)
1. Open the project folder in **VS Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The website will open automatically at `http://127.0.0.1:5500`.

### Option 3: Python Built-In HTTP Server
Run the following command in the project root:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🌐 Deployment Guide (GitHub Pages / Vercel / Netlify)

### Deploying to GitHub Pages:
1. Initialize git and commit the files:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of KrishHappy Learn platform"
   ```
2. Create a new repository on GitHub and push the repository:
   ```bash
   git remote add origin https://github.com/your-username/krishhappy-learn.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository, navigate to **Settings** > **Pages**.
4. Under **Source**, select `Deploy from a branch`, choose branch `main` and folder `/ (root)`, and click **Save**.
5. Your website will be live in 1-2 minutes at `https://your-username.github.io/krishhappy-learn/`!

---

## 🛡️ Demo Data vs Real AI Services

| Feature | Current State | Future Extension |
|---|---|---|
| **AI Tutor** | Built-in offline intelligent academic knowledge base with instant responses for DSA, OS, DBMS, Math, and Wellness | Can connect real OpenAI / Gemini REST API endpoints via the Settings modal |
| **Exam Question Bank** | Curated high-yield conceptual sample questions for GATE, Aptitude, Coding & Interviews | Can be connected to a live database / PostgreSQL backend |
| **Storage** | Client-side `LocalStorage` with JSON backup & restore | Multi-device cloud sync with Firebase / Supabase |
| **Audio** | Native Web Audio API synthesis (100% offline) | Custom high-fidelity binaural recordings |

---

## 🔮 Suggestions for Future Improvements

1. **Multi-User Cloud Authentication**: Add optional OAuth (Google / GitHub login) via Firebase or Supabase.
2. **Peer Study Rooms**: WebRTC-based virtual study rooms with shared pomodoro timers.
3. **Spaced Repetition Flashcards**: Anki-style Leitner algorithm flashcards for GATE engineering formulas.
4. **Interactive Coding Sandbox**: Full WebAssembly (Pyodide) python runtime for full in-browser script execution.

---
**KrishHappy Learn** — *Learn Smarter. Focus Better. Grow Happier.*
