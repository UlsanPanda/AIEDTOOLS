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

    function animate() {
        requestAnimationFrame(animate);
        points1.rotation.x += 0.0001;
        points1.rotation.y += 0.0001;
        points2.rotation.x -= 0.0002;
        points2.rotation.y -= 0.0002;
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
        { name: 'Khanmigo', description: 'An AI-powered tutor from Khan Academy that can help you with a variety of subjects.', link: 'tools/khanmigo.html', category: 'study' }
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