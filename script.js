document.addEventListener('DOMContentLoaded', function() {
    // 3D Background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    const geometry1 = new THREE.BufferGeometry();
    const vertices1 = [];

    for (let i = 0; i < 10000; i++) {
        vertices1.push(THREE.MathUtils.randFloatSpread(2000)); // x
        vertices1.push(THREE.MathUtils.randFloatSpread(2000)); // y
        vertices1.push(THREE.MathUtils.randFloatSpread(2000)); // z
    }

    geometry1.setAttribute('position', new THREE.Float32BufferAttribute(vertices1, 3));

    const material1 = new THREE.PointsMaterial({ color: 0xff00ff, size: 0.5 });
    const points1 = new THREE.Points(geometry1, material1);
    scene.add(points1);

    const geometry2 = new THREE.BufferGeometry();
    const vertices2 = [];

    for (let i = 0; i < 5000; i++) {
        vertices2.push(THREE.MathUtils.randFloatSpread(2000)); // x
        vertices2.push(THREE.MathUtils.randFloatSpread(2000)); // y
        vertices2.push(THREE.MathUtils.randFloatSpread(2000)); // z
    }

    geometry2.setAttribute('position', new THREE.Float32BufferAttribute(vertices2, 3));

    const material2 = new THREE.PointsMaterial({ color: 0x00ffff, size: 0.75 });
    const points2 = new THREE.Points(geometry2, material2);
    scene.add(points2);

    const mouse = new THREE.Vector2();

    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    function animate() {
        requestAnimationFrame(animate);

        points1.rotation.x += 0.0001;
        points1.rotation.y += 0.0001;
        points2.rotation.x -= 0.0002;
        points2.rotation.y -= 0.0002;

        camera.position.x += (mouse.x * 10 - camera.position.x) * 0.05;
        camera.position.y += (mouse.y * 10 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    animate();

    // AI Tools Data
    const aiTools = [
        { name: 'Grammarly', description: 'An AI-powered writing assistant that checks for grammar, spelling, and style.', link: 'tools/grammarly.html', category: 'writing' },
        { name: 'Quillbot', description: 'A paraphrasing tool that helps you rewrite sentences and paragraphs.', link: 'tools/quillbot.html', category: 'writing' },
        { name: 'ChatGPT', description: 'A large language model that can be used for research, writing, and brainstorming.', link: 'tools/chatgpt.html', category: 'research' },
        { name: 'SciSpace', description: 'An AI research tool that helps you find and understand academic papers.', link: 'tools/scispace.html', category: 'research' },
        { name: 'Otter.ai', description: 'An AI-powered transcription service that can transcribe lectures and meetings.', link: 'tools/otter.html', category: 'note-taking' },
        { name: 'Khanmigo', description: 'An AI-powered tutor from Khan Academy that can help you with a variety of subjects.', link: 'tools/khanmigo.html', category: 'study' },
        { name: 'Jasper', description: 'An AI-powered writing assistant that helps you create high-quality content.', link: 'tools/jasper.html', category: 'writing' },
        { name: 'Rytr', description: 'An AI-powered writing assistant that helps you create high-quality content in a variety of formats.', link: 'tools/rytr.html', category: 'writing' },
        { name: 'Sudowrite', description: 'An AI-powered writing assistant that helps you write fiction.', link: 'tools/sudowrite.html', category: 'writing' },
        { name: 'Perplexity AI', description: 'An AI-powered search engine that provides direct, sourced answers to questions.', link: 'tools/perplexity_ai.html', category: 'research' },
        { name: 'Elicit', description: 'An AI-powered research assistant that helps you with literature reviews.', link: 'tools/elicit.html', category: 'research' },
        { name: 'Notion AI', description: 'An AI-powered assistant that is integrated into the Notion productivity app.', link: 'tools/notion_ai.html', category: 'productivity' },
        { name: 'NotebookLM', description: 'An AI-powered research assistant from Google that helps you understand and explore your documents.', link: 'tools/notebooklm.html', category: 'research' },
        { name: 'Zapier', description: 'An automation platform that uses AI to connect thousands of different apps and create automated workflows.', link: 'tools/zapier.html', category: 'productivity' },
        { name: 'Asana AI', description: 'An AI-powered assistant that is integrated into the Asana project management tool.', link: 'tools/asana_ai.html', category: 'productivity' },
        { name: 'Microsoft 365 Copilot', description: 'An AI-powered assistant that is integrated into Microsoft Office applications.', link: 'tools/microsoft_365_copilot.html', category: 'productivity' },
        { name: 'GitHub Copilot', description: 'An AI-powered coding assistant that offers intelligent code suggestions and autocompletions.', link: 'tools/github_copilot.html', category: 'coding' },
        { name: 'Qodo', description: 'An AI-powered coding assistant that helps you write code faster and with fewer errors.', link: 'tools/qodo.html', category: 'coding' },
        { name: 'Cursor', description: 'An AI-powered code editor that helps you write, edit, and debug code faster.', link: 'tools/cursor.html', category: 'coding' },
        { name: 'Canva Magic Studio', description: 'An AI-powered design platform that helps you create professional-looking designs.', link: 'tools/canva_magic_studio.html', category: 'design' },
        { name: 'DALL-E 3', description: 'An AI-powered image generator that can create high-quality images from text descriptions.', link: 'tools/dall-e_3.html', category: 'design' },
        { name: 'Synthesia', description: 'An AI-powered video creation platform that allows you to create realistic videos with AI avatars.', link: 'tools/synthesia.html', category: 'video' },
        { name: 'Descript', description: 'An AI-powered audio and video editing platform that makes editing as simple as editing a text document.', link: 'tools/descript.html', category: 'video' },
        { name: 'Gemini', description: 'A large language model from Google that can be used for a variety of tasks.', link: 'tools/gemini.html', category: 'research' },
        { name: 'Claude', description: 'A large language model from Anthropic that is known for its strength in handling long-form writing and complex reasoning tasks.', link: 'tools/claude.html', category: 'writing' },
        { name: 'ElevenLabs', description: 'An AI-powered text-to-speech platform that can generate realistic-sounding audio from text.', link: 'tools/elevenlabs.html', category: 'audio' },
        { name: 'Murf', description: 'An AI-powered text-to-speech platform that can generate realistic-sounding audio from text.', link: 'tools/murf.html', category: 'audio' },
        { name: 'Runway', description: 'An AI-powered video editing platform that offers a suite of tools for creating and editing videos.', link: 'tools/runway.html', category: 'video' },
        { name: 'Pictory', description: 'An AI-powered video creation platform that can automatically create short, branded videos from your long-form content.', link: 'tools/pictory.html', category: 'video' },
        { name: 'HeyGen', description: 'An AI-powered video creation platform that allows you to create professional-looking videos with AI avatars.', link: 'tools/heygen.html', category: 'video' },
        { name: 'Beautiful.ai', description: 'An AI-powered presentation maker that helps you create stunning presentations in minutes.', link: 'tools/beautiful.ai.html', category: 'design' },
        { name: 'Slidesgo', description: 'An AI-powered presentation maker that helps you create beautiful and engaging presentations.', link: 'tools/slidesgo.html', category: 'design' },
        { name: 'Tome', description: 'An AI-powered storytelling tool that helps you create presentations, stories, and other visual narratives.', link: 'tools/tome.html', category: 'design' },
        { name: 'Consensus', description: 'An AI-powered search engine for scientific research.', link: 'tools/consensus.html', category: 'research' },
        { name: 'Scite', description: 'An AI-powered research tool that helps you discover and evaluate scientific articles.', link: 'tools/scite.html', category: 'research' },
        { name: 'Semantic Scholar', description: 'An AI-powered research tool that helps you find and understand scientific literature.', link: 'tools/semantic_scholar.html', category: 'research' }
    ];

    // Populate Tool Grid
    const toolGrid = document.querySelector('.tool-grid');
    aiTools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.classList.add('tool-card');
        toolCard.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
        `;
        toolCard.addEventListener('click', () => window.location.href = tool.link);
        toolGrid.appendChild(toolCard);
    });

    // Quiz Logic
    const quizContainer = document.querySelector('.quiz-container');
    const questions = [
        { question: 'What do you need the most help with?', options: ['Writing and grammar', 'Research and understanding papers', 'Taking notes and studying'] },
        { question: 'What is your preferred way of learning?', options: ['Reading and writing', 'Visual aids and examples', 'Interactive exercises and practice'] }
    ];
    let currentQuestion = 0;
    let answers = [];

    function showQuestion() {
        const questionData = questions[currentQuestion];
        quizContainer.innerHTML = `
            <div class="quiz-question">${questionData.question}</div>
            <div class="quiz-options">
                ${questionData.options.map(option => `<div class="quiz-option">${option}</div>`).join('')}
            </div>
        `;

        const options = quizContainer.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                answers.push(option.textContent);
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            });
        });
    }

    function showResult() {
        let recommendedTool = '';
        if (answers[0] === 'Writing and grammar') {
            recommendedTool = 'Grammarly';
        } else if (answers[0] === 'Research and understanding papers') {
            recommendedTool = 'SciSpace';
        } else if (answers[0] === 'Taking notes and studying') {
            recommendedTool = 'Otter.ai';
        } else {
            recommendedTool = 'ChatGPT';
        }

        const tool = aiTools.find(t => t.name === recommendedTool);

        quizContainer.innerHTML = `
            <div class="quiz-result">
                <h2>We recommend: ${tool.name}</h2>
                <p>${tool.description}</p>
                <a href="${tool.link}" target="_blank">Learn More</a>
            </div>
        `;
    }

    showQuestion();
});
