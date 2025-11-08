<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ddgksf2013的个人主页 - 探索更多可能</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #2563eb;
            --secondary-color: #1e40af;
            --accent-color: #3b82f6;
            --text-dark: #1f2937;
            --text-light: #6b7280;
            --bg-light: #f9fafb;
            --bg-white: #ffffff;
            --border-color: #e5e7eb;
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            overflow-x: hidden;
        }

        .navbar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow-md);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .navbar.scrolled {
            box-shadow: var(--shadow-lg);
            background: rgba(255, 255, 255, 0.98);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 700;
            font-size: 1.5rem;
            transition: transform 0.3s ease;
            white-space: nowrap;
        }

        .logo:hover {
            transform: scale(1.05);
        }

        .logo-icon {
            width: 45px;
            height: 45px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
        }

        .logo:hover .logo-icon {
            box-shadow: var(--shadow-lg);
            transform: rotate(5deg);
        }

        .nav-links {
            display: flex;
            gap: 30px;
            align-items: center;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 8px 16px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .nav-links a:hover {
            background: var(--bg-light);
            color: var(--primary-color);
            transform: translateY(-2px);
        }

        .nav-links .icon {
            font-size: 1.2rem;
        }

        .hero {
            margin-top: 70px;
            padding: 60px 20px 50px;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="%23ffffff"/><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="%23ffffff"/><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="%23ffffff"/></svg>') no-repeat bottom;
            background-size: cover;
            opacity: 0.1;
        }

        .hero-content {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .hero h1 {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 15px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            animation: fadeInUp 0.8s ease;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            opacity: 0.95;
            animation: fadeInUp 0.8s ease 0.2s backwards;
        }

        .navigation-section {
            padding: 80px 20px;
            background: var(--bg-white);
        }

        .nav-container-main {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 50px;
            color: var(--text-dark);
            position: relative;
            padding-bottom: 20px;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 2px;
        }

        .nav-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }

        .nav-card {
            background: var(--bg-white);
            padding: 35px 30px;
            border-radius: 20px;
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
            text-align: center;
            border: 2px solid transparent;
            text-decoration: none;
            color: var(--text-dark);
            display: block;
        }

        .nav-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-xl);
            border-color: var(--accent-color);
        }

        .nav-icon {
            font-size: 3.5rem;
            margin-bottom: 20px;
            display: inline-block;
            transition: transform 0.3s ease;
        }

        .nav-card:hover .nav-icon {
            transform: scale(1.2) rotate(5deg);
        }

        .nav-card h3 {
            font-size: 1.5rem;
            margin-bottom: 12px;
            color: var(--text-dark);
        }

        .nav-card p {
            color: var(--text-light);
            line-height: 1.8;
            font-size: 0.95rem;
        }

        .nav-badge {
            display: inline-block;
            padding: 4px 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            margin-top: 10px;
        }

        .contact {
            padding: 80px 20px;
            background: var(--bg-light);
        }

        .contact-container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .social-links {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            max-width: 900px;
            margin: 0 auto;
        }

        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 18px 25px;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            color: white;
            text-decoration: none;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            font-weight: 500;
            border: 2px solid rgba(255, 255, 255, 0.25);
            font-size: 1rem;
        }

        .social-link:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.25);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .social-link .icon-emoji {
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        footer {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 20px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
            pointer-events: none;
        }

        footer .footer-content {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 0 auto;
        }

        footer h3 {
            font-size: 1.8rem;
            margin-bottom: 15px;
            font-weight: 700;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        footer .footer-desc {
            opacity: 0.95;
            margin-bottom: 35px;
            font-size: 1.05rem;
            line-height: 1.6;
        }

        footer .copyright {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.25);
            opacity: 0.85;
            font-size: 0.95rem;
            line-height: 1.8;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .scroll-indicator {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
        }

        .scroll-indicator::before {
            content: '↓';
            font-size: 2rem;
            color: white;
            opacity: 0.7;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateX(-50%) translateY(0);
            }
            40% {
                transform: translateX(-50%) translateY(-20px);
            }
            60% {
                transform: translateX(-50%) translateY(-10px);
            }
        }

        @media (max-width: 768px) {
            .nav-container {
                padding: 0 15px;
            }

            .logo {
                font-size: 1.1rem;
                gap: 6px;
            }

            .logo-icon {
                width: 32px;
                height: 32px;
                font-size: 1rem;
            }

            .nav-links {
                gap: 4px;
            }

            .nav-links a {
                padding: 4px 6px;
            }

            .nav-links a span:not(.icon) {
                display: none;
            }

            .nav-links .icon {
                font-size: 1.3rem;
            }

            .hero h1 {
                font-size: 2.2rem;
            }

            .hero p {
                font-size: 1rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .nav-grid {
                grid-template-columns: 1fr;
            }

            .social-links {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
                padding: 0 10px;
            }

            .social-link {
                padding: 15px 15px;
                font-size: 0.9rem;
            }

            .social-link .icon-emoji {
                font-size: 1.2rem;
            }

            footer h3 {
                font-size: 1.5rem;
            }

            footer .footer-desc {
                font-size: 0.95rem;
            }

            footer .copyright {
                font-size: 0.85rem;
                padding-top: 25px;
                margin-top: 30px;
            }
        }

        @media (max-width: 480px) {
            .logo {
                font-size: 1rem;
            }

            .logo-icon {
                width: 28px;
                height: 28px;
                font-size: 0.9rem;
            }

            .nav-links {
                gap: 2px;
            }

            .nav-links a {
                padding: 4px 5px;
            }

            .nav-links .icon {
                font-size: 1.2rem;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="#" class="logo">
                <img src="avater.jpg" alt="Logo" class="logo-icon">
                <span>墨魚手記</span>
            </a>
            <div class="nav-links">
                <a href="https://github.com/ddgksf2013" target="_blank" rel="noopener" title="GitHub">
                    <span class="icon">💻</span>
                    <span>GitHub</span>
                </a>
                <a href="https://t.me/ddgksf2021" target="_blank" rel="noopener" title="Telegram频道">
                    <span class="icon">📢</span>
                    <span>频道</span>
                </a>
                <a href="https://t.me/ddgksf2023" target="_blank" rel="noopener" title="网盘">
                    <span class="icon">☁️</span>
                    <span>网盘</span>
                </a>
                <a href="https://t.me/ddgksf2013" target="_blank" rel="noopener" title="联系我">
                    <span class="icon">💬</span>
                    <span>联系</span>
                </a>
            </div>
        </div>
    </nav>

    <section class="hero">
        <div class="hero-content">
            <h1>欢迎来到我的数字空间</h1>
            <p>这里汇集了我的项目、工具和资源推荐 · 探索更多可能性</p>
        </div>
        <div class="scroll-indicator"></div>
    </section>

    <section class="navigation-section">
        <div class="nav-container-main">
            <h2 class="section-title">快速导航</h2>
            <div class="nav-grid">
                <a href="./goods/" class="nav-card">
                    <div class="nav-icon">🛍️</div>
                    <h3>好物推荐</h3>
                    <p>精选生活好物分享，真实使用体验</p>
                </a>

                <a href="#" class="nav-card">
                    <div class="nav-icon">🎬</div>
                    <h3>影视资源</h3>
                    <p>优质影视网站和资源推荐</p>
                    <span class="nav-badge">即将上线</span>
                </a>

                <a href="#" class="nav-card">
                    <div class="nav-icon">🔧</div>
                    <h3>实用工具</h3>
                    <p>提升效率的在线工具集合</p>
                    <span class="nav-badge">即将上线</span>
                </a>

                <a href="https://github.com/ddgksf2013" class="nav-card">
                    <div class="nav-icon">💻</div>
                    <h3>开源项目</h3>
                    <p>我的GitHub开源代码仓库</p>
                </a>

                <a href="#" class="nav-card">
                    <div class="nav-icon">📚</div>
                    <h3>学习笔记</h3>
                    <p>技术文档和学习心得分享</p>
                    <span class="nav-badge">规划中</span>
                </a>

                <a href="#" class="nav-card">
                    <div class="nav-icon">🎨</div>
                    <h3>更多内容</h3>
                    <p>持续添加中，敬请期待...</p>
                    <span class="nav-badge">规划中</span>
                </a>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <h3>🌟 保持联系</h3>
            <p class="footer-desc">在这些平台找到我，一起探索更多可能</p>
            <div class="social-links">
                <a href="https://github.com/ddgksf2013" target="_blank" rel="noopener" class="social-link">
                    <span class="icon-emoji">💻</span>
                    <span>GitHub</span>
                </a>
                <a href="https://t.me/ddgksf2021" target="_blank" rel="noopener" class="social-link">
                    <span class="icon-emoji">📢</span>
                    <span>Telegram频道</span>
                </a>
                <a href="https://t.me/ddgksf2023" target="_blank" rel="noopener" class="social-link">
                    <span class="icon-emoji">☁️</span>
                    <span>网盘资源</span>
                </a>
                <a href="https://t.me/ddgksf2013" target="_blank" rel="noopener" class="social-link">
                    <span class="icon-emoji">💬</span>
                    <span>联系我</span>
                </a>
            </div>
            <div class="copyright">
                © 2025 ddgksf2013's Personal Space<br>
                探索 · 分享 · 创造
            </div>
        </div>
    </footer>

    <script>
        const navbar = document.getElementById('navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.nav-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    </script>
</body>
</html>
