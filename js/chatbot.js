/**
 * Yamada - AI Portfolio Assistant Chatbot
 * Handles client-side intelligent question answering, suggestion chips,
 * conversation flow, and dashboard interactions.
 */

(() => {
  // =========================================================================
  // 1. Suraj Koley Portfolio Knowledge Base
  // =========================================================================
  const PORTFOLIO_DATA = {
    name: "Suraj Koley",
    role: "AI Native Full Stack Developer",
    education: "BCA (Bachelor of Computer Applications) student",
    experience: "1+ Years of Experience, 5+ Projects Completed, 100% Commitment to Quality",
    bio: "Suraj is a BCA student and developer passionate about engineering modern web applications, practical software solutions, and AI-powered experiences. He excels across frontend and backend development, turning ideas into clean, functional, and scalable products.",
    
    skills: {
      frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive UI/UX", "CSS Animations", "Web APIs"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "Python", "Fastify", "Serverless Functions"],
      database: ["PostgreSQL", "MongoDB", "Cloud Firestore", "Redis", "Supabase", "Git & GitHub"],
      tools: ["VS Code", "Git CLI", "Figma", "Webpack & Vite", "Postman", "Terminal & Bash"]
    },

    projects: [
      {
        name: "ToolsFourge",
        tag: "Daily Life Tools",
        category: "Frontend",
        tech: "JavaScript, HTML5, CSS3",
        description: "A collection of useful daily life utilities including calculators, converters, and productivity enhancers built with a focus on simplicity and usability.",
        code: "https://github.com/Suraj-29489/ToolsFourge",
        demo: "https://toolsfourge.vercel.app/"
      },
      {
        name: "Habit Tracker",
        tag: "Daily Habit Tracker",
        category: "Frontend",
        tech: "HTML5, CSS3, JavaScript",
        description: "A clean daily habit tracking web app that allows users to log habits, maintain consistency streaks, and visualize their progress over time.",
        code: "https://github.com/Suraj-29489/Habit-Tracker",
        demo: "https://habit-tracker-fourge.vercel.app/"
      },
      {
        name: "Trading Journal",
        tag: "Journal Your Trades",
        category: "Frontend & Analytics",
        tech: "JavaScript, HTML, CSS, Python",
        description: "A web platform designed for traders to log and analyze their trades, track performance metrics, and visualize trading data for data-driven decisions.",
        code: "https://github.com/Suraj-29489/Trading-Journal",
        demo: "https://trading-journal-fourge.vercel.app//"
      },
      {
        name: "TradeFourge",
        tag: "CLI / Tools",
        category: "Tools & CLI",
        tech: "JavaScript, HTML, CSS",
        description: "A command-line terminal tool engineered for traders to efficiently log, analyze, and visualize trades with performance analytics and export features.",
        code: "https://github.com/Suraj-29489/TradeFourge",
        demo: "https://tradefourge.vercel.app/"
      }
    ],

    socials: {
      github: "https://github.com/Suraj-29489",
      instagram: "https://www.instagram.com/suraaaaaj_053?igsi=c3ZtZ3dvdmFxaXh0"
    }
  };

  // Recommended Starter Questions
  const RECOMMENDED_QUESTIONS = [
    "💼 What projects has Suraj built?",
    "⚡ What are his core skills?",
    "🎓 Tell me about his education & background",
    "📈 What is TradeFourge & Trading Journal?",
    "📬 How can I contact Suraj?"
  ];

  // =========================================================================
  // 2. Intelligent Response Matcher
  // =========================================================================
  function getBotResponse(query) {
    const q = query.toLowerCase().trim();

    // 1. Greetings
    if (/^(hi|hello|hey|hola|namaste|greetings|yo|sup|good (morning|afternoon|evening))\b/i.test(q)) {
      return `Hello there! 👋 I'm **Yamada**, Suraj's AI assistant. How can I help you explore his portfolio today?<br><br>You can ask me about his <strong>projects</strong>, <strong>skills</strong>, <strong>background</strong>, or <strong>how to connect</strong>!`;
    }

    // 2. Identity / Who are you
    if (/who are you|what are you|your name|who made you|about you/i.test(q)) {
      return `I am **Yamada** 🤖, an AI assistant built specifically for Suraj's portfolio. I know everything about his projects, technical toolkit, experience, and contact channels!`;
    }

    // 3. Who is Suraj / Background / About
    if (/who is suraj|about suraj|tell me about (him|suraj|yourself)|background|bio|profile|developer/i.test(q)) {
      return `<strong>Suraj Koley</strong> is an <strong>AI Native Full Stack Developer</strong> and <strong>BCA student</strong>.<br><br>
      • 💡 <strong>Focus:</strong> Engineering modern web applications, developer utilities, and AI-powered experiences.<br>
      • 🚀 <strong>Experience:</strong> 1+ years building real-world projects with 5+ completed software products.<br>
      • 🎯 <strong>Philosophy:</strong> Clean, maintainable code, responsive aesthetics, and peak performance.`;
    }

    // 4. Projects Query
    if (/project|portfolio|toolsfourge|habit tracker|trading journal|tradefourge|apps|work/i.test(q)) {
      // Specific project checks
      if (/toolsfourge/i.test(q)) {
        const p = PORTFOLIO_DATA.projects[0];
        return `🛠️ <strong>${p.name}</strong> (${p.tag})<br><br>${p.description}<br><br>• <strong>Tech Stack:</strong> ${p.tech}<br>• <strong>Live Demo:</strong> <a href="${p.demo}" target="_blank" rel="noopener">Visit ToolsFourge</a><br>• <strong>Source Code:</strong> <a href="${p.code}" target="_blank" rel="noopener">GitHub Repo</a>`;
      }
      if (/habit tracker/i.test(q)) {
        const p = PORTFOLIO_DATA.projects[1];
        return `📅 <strong>${p.name}</strong> (${p.tag})<br><br>${p.description}<br><br>• <strong>Tech Stack:</strong> ${p.tech}<br>• <strong>Live Demo:</strong> <a href="${p.demo}" target="_blank" rel="noopener">Visit Habit Tracker</a><br>• <strong>Source Code:</strong> <a href="${p.code}" target="_blank" rel="noopener">GitHub Repo</a>`;
      }
      if (/trading journal/i.test(q)) {
        const p = PORTFOLIO_DATA.projects[2];
        return `📊 <strong>${p.name}</strong> (${p.tag})<br><br>${p.description}<br><br>• <strong>Tech Stack:</strong> ${p.tech}<br>• <strong>Live Demo:</strong> <a href="${p.demo}" target="_blank" rel="noopener">Visit Trading Journal</a><br>• <strong>Source Code:</strong> <a href="${p.code}" target="_blank" rel="noopener">GitHub Repo</a>`;
      }
      if (/tradefourge/i.test(q)) {
        const p = PORTFOLIO_DATA.projects[3];
        return `💻 <strong>${p.name}</strong> (${p.tag})<br><br>${p.description}<br><br>• <strong>Tech Stack:</strong> ${p.tech}<br>• <strong>Live Demo:</strong> <a href="${p.demo}" target="_blank" rel="noopener">Visit TradeFourge</a><br>• <strong>Source Code:</strong> <a href="${p.code}" target="_blank" rel="noopener">GitHub Repo</a>`;
      }

      // General projects overview
      return `Here are the 4 highlighted projects built by Suraj:<br><br>
      1. 🛠️ <strong>ToolsFourge:</strong> Daily life utilities, calculators, and productivity tools.<br>
      2. 📅 <strong>Habit Tracker:</strong> Daily habit and consistency tracking app.<br>
      3. 📊 <strong>Trading Journal:</strong> Comprehensive trade logging and performance analytics web app.<br>
      4. 💻 <strong>TradeFourge:</strong> CLI tool for traders to analyze and visualize trading data.<br><br>
      <em>Tip: Click any project link above in the Projects section to view live demos and source code!</em>`;
    }

    // 5. Skills / Tech Stack
    if (/skill|stack|technology|tech|languages|framework|tools|frontend|backend|database|python|javascript|react/i.test(q)) {
      return `Here is Suraj's technical toolkit ⚡:<br><br>
      • <strong>Frontend:</strong> ${PORTFOLIO_DATA.skills.frontend.join(", ")}<br>
      • <strong>Backend:</strong> ${PORTFOLIO_DATA.skills.backend.join(", ")}<br>
      • <strong>Databases & Cloud:</strong> ${PORTFOLIO_DATA.skills.database.join(", ")}<br>
      • <strong>Tools & Workflow:</strong> ${PORTFOLIO_DATA.skills.tools.join(", ")}`;
    }

    // 6. Education / College / Degree / Experience
    if (/education|degree|college|university|bca|study|experience|qualifications/i.test(q)) {
      return `🎓 <strong>Education & Experience:</strong><br><br>
      • <strong>Degree:</strong> Bachelor of Computer Applications (BCA)<br>
      • <strong>Track Record:</strong> 1+ years building modern web apps & tools<br>
      • <strong>Projects:</strong> 5+ completed full-stack & frontend applications<br>
      • <strong>Specialization:</strong> Full Stack Development, AI integration, and CLI tools`;
    }

    // 7. Contact / Hire / Email / Socials / Instagram / GitHub
    if (/contact|hire|email|reach|instagram|github|social|message|talk|connect/i.test(q)) {
      return `You can connect with Suraj through any of these channels 📬:<br><br>
      • 💻 <strong>GitHub:</strong> <a href="${PORTFOLIO_DATA.socials.github}" target="_blank" rel="noopener">github.com/Suraj-29489</a><br>
      • 📸 <strong>Instagram:</strong> <a href="${PORTFOLIO_DATA.socials.instagram}" target="_blank" rel="noopener">@suraaaaaj_053</a><br>
      • 🌐 <strong>Portfolio:</strong> You can also browse his contact section right here!`;
    }

    // 8. Fun / Jokes
    if (/joke|funny|laugh/i.test(q)) {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "There are 10 types of people in the world: those who understand binary, and those who don't! 😄",
        "Why did the JavaScript developer wear glasses? Because they didn't C#! 👓"
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }

    // 9. Thanks / Gratitude
    if (/thank|thanks|great|awesome|helpful|good job/i.test(q)) {
      return `You're very welcome! 😊 Feel free to ask anything else about Suraj's projects or skills.`;
    }

    // 10. Fallback with Recommendations
    return `I might not have the exact answer to that specific phrasing, but I can tell you all about Suraj's work! 💡<br><br>
    Try asking about:<br>
    • 💼 <strong>Projects</strong> (ToolsFourge, Habit Tracker, Trading Journal, TradeFourge)<br>
    • ⚡ <strong>Skills</strong> (Frontend, Backend, Databases, Tools)<br>
    • 🎓 <strong>Education</strong> (BCA student & background)<br>
    • 📬 <strong>Contact details</strong> & GitHub/Instagram`;
  }

  // =========================================================================
  // 3. UI Controller & DOM Elements
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    const triggerBtn = document.getElementById('yamada-trigger');
    const dashboard = document.getElementById('yamada-dashboard');
    const closeBtn = document.getElementById('yamada-close-btn');
    const resetBtn = document.getElementById('yamada-reset-btn');
    const messagesContainer = document.getElementById('yamada-messages');
    const inputForm = document.getElementById('yamada-input-form');
    const inputField = document.getElementById('yamada-input');

    if (!triggerBtn || !dashboard || !messagesContainer || !inputForm || !inputField) return;

    let isOpen = false;

    // Toggle Dashboard
    function toggleChat(open = !isOpen) {
      isOpen = open;
      if (isOpen) {
        dashboard.classList.add('active');
        triggerBtn.classList.add('active');
        dashboard.setAttribute('aria-hidden', 'false');
        setTimeout(() => inputField.focus(), 300);
      } else {
        dashboard.classList.remove('active');
        triggerBtn.classList.remove('active');
        dashboard.setAttribute('aria-hidden', 'true');
      }
    }

    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleChat();
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleChat(false);
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleChat(false);
      }
    });

    // Close on click outside on mobile/desktop
    document.addEventListener('click', (e) => {
      if (isOpen && !dashboard.contains(e.target) && !triggerBtn.contains(e.target)) {
        toggleChat(false);
      }
    });

    // Append Message to UI
    function appendMessage(sender, htmlContent, isIntro = false) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `yamada-msg yamada-msg-${sender}`;

      if (sender === 'bot') {
        msgDiv.innerHTML = `
          <div class="yamada-msg-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
              <rect x="4" y="8" width="16" height="12" rx="2"></rect>
              <circle cx="9" cy="13" r="1" fill="currentColor"></circle>
              <circle cx="15" cy="13" r="1" fill="currentColor"></circle>
            </svg>
          </div>
          <div class="yamada-msg-bubble">${htmlContent}</div>
        `;
      } else {
        msgDiv.innerHTML = `<div class="yamada-msg-bubble">${escapeHtml(htmlContent)}</div>`;
      }

      messagesContainer.appendChild(msgDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    // Append Typing Indicator
    function showTypingIndicator() {
      const typingDiv = document.createElement('div');
      typingDiv.className = 'yamada-msg yamada-msg-bot yamada-typing';
      typingDiv.id = 'yamada-typing-indicator';
      typingDiv.innerHTML = `
        <div class="yamada-msg-avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
            <rect x="4" y="8" width="16" height="12" rx="2"></rect>
            <circle cx="9" cy="13" r="1" fill="currentColor"></circle>
            <circle cx="15" cy="13" r="1" fill="currentColor"></circle>
          </svg>
        </div>
        <div class="yamada-msg-bubble">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      `;
      messagesContainer.appendChild(typingDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function removeTypingIndicator() {
      const typingDiv = document.getElementById('yamada-typing-indicator');
      if (typingDiv) typingDiv.remove();
    }

    // Render Recommendation Question Chips
    function renderRecommendationChips() {
      const chipsContainer = document.createElement('div');
      chipsContainer.className = 'yamada-recommendations';
      
      const label = document.createElement('span');
      label.className = 'yamada-rec-label';
      label.textContent = '💡 Quick questions:';
      chipsContainer.appendChild(label);

      RECOMMENDED_QUESTIONS.forEach(qText => {
        const btn = document.createElement('button');
        btn.className = 'yamada-chip';
        btn.type = 'button';
        btn.textContent = qText;
        btn.addEventListener('click', () => {
          handleUserQuery(qText.replace(/^[^\w\s]+/, '').trim());
        });
        chipsContainer.appendChild(btn);
      });

      messagesContainer.appendChild(chipsContainer);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Initialize Initial Greeting
    function initChat() {
      messagesContainer.innerHTML = '';
      appendMessage('bot', `Hi there! 👋 I'm <strong>Yamada</strong>, Suraj's AI assistant.<br><br>Ask me anything about his <strong>skills</strong>, <strong>projects</strong>, <strong>experience</strong>, or background!`, true);
      renderRecommendationChips();
    }

    initChat();

    // Reset Chat
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        initChat();
      });
    }

    // Handle User Query Submission
    function handleUserQuery(userText) {
      if (!userText || !userText.trim()) return;

      appendMessage('user', userText.trim());
      inputField.value = '';

      showTypingIndicator();

      // Simulated natural AI response delay
      setTimeout(() => {
        removeTypingIndicator();
        const botReply = getBotResponse(userText);
        appendMessage('bot', botReply);
      }, 400);
    }

    // Form Submit Listener
    inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleUserQuery(inputField.value);
    });
  });
})();
