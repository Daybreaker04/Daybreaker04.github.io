'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  GitBranch,
  GraduationCap,
  Languages,
  ContactRound,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { GalaxyCanvas } from '@/components/galaxy-canvas';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const content = {
  en: {
    nav: [
      ['About', '#about'],
      ['Experience', '#experience'],
      ['Research', '#research'],
      ['Projects', '#projects'],
      ['Contact', '#contact'],
    ],
    switchLabel: '切换至中文',
    status: 'MSCS @ Georgia Tech · Atlanta, GA',
    overline: 'Backend · Applied AI · Data',
    nameLead: 'Haoxuan',
    nameNick: '“Harry”',
    nameTail: 'Li',
    chineseName: '李昊轩',
    headline: 'I engineer dependable software and intelligent systems.',
    intro:
      'A builder at the intersection of backend engineering, applied AI, and data. I am pursuing an M.S. in Computer Science at Georgia Tech and looking for opportunities to contribute, learn fast, and create real value in the U.S. tech industry.',
    availability: 'Open to internships, co-ops, and early-career technology opportunities',
    workCta: 'Explore my work',
    resumeCta: 'Download résumé',
    roles: [
      'Developer',
      'Software Engineer',
      'Backend Developer',
      'Machine Learning Engineer',
      'AI Engineer',
    ],
    metrics: [
      ['100+', 'IPCC reports processed'],
      ['10%', 'RAG evaluation improvement'],
      ['10+', 'client accounts analyzed'],
      ['May 2028', 'expected graduation'],
    ],
    about: {
      eyebrow: '01 / Profile',
      title: 'Curious by nature. Rigorous by practice.',
      body: [
        'I enjoy working where software engineering meets difficult, real-world information: building data pipelines, grounding AI systems in trusted sources, and making privacy-aware machine learning practical.',
        'My experience spans research labs and a leading social platform, giving me equal respect for experimental depth, reliable implementation, and clear communication. I am now building the foundation for a long-term engineering career in the United States.',
      ],
      educationTitle: 'Education',
      schools: [
        {
          school: 'Georgia Institute of Technology',
          degree: 'M.S. in Computer Science',
          date: 'Aug 2026 — May 2028 (expected)',
          note: 'On-campus program · Atlanta, Georgia',
        },
        {
          school: 'The Hong Kong Polytechnic University',
          degree: 'B.Sc. (Hons) in Computer Science',
          date: 'Sep 2022 — May 2026',
          note: "GPA 3.83/4.3 · Dean's Honour List, top 5%",
        },
      ],
    },
    experience: {
      eyebrow: '02 / Experience',
      title: 'Turning data into decisions.',
      role: 'Data Analyst Intern',
      company: 'Sina Weibo',
      date: 'May 2024 — Aug 2024',
      location: "China's leading social media platform",
      bullets: [
        'Built SQL queries and Python/pandas scripts to extract, clean, and standardize engagement and sentiment data, automating weekly reporting workflows.',
        'Enhanced proprietary analytics dashboards through validated filters and visualizations for engagement, sentiment, topic trends, and campaign performance.',
        'Analyzed 10+ client accounts, identifying emerging topics and performance shifts and translating findings into actionable reports and presentations.',
      ],
    },
    research: {
      eyebrow: '03 / Research',
      title: 'Applied intelligence, grounded in evidence.',
      items: [
        {
          icon: 'brain',
          date: 'Feb 2025 — Aug 2025',
          title: 'Climate Expert AI Agent with RAG',
          org: 'The Hong Kong Polytechnic University',
          summary:
            'Built a climate question-answering system grounded in authoritative IPCC research.',
          bullets: [
            'Crawled and preprocessed 100+ IPCC reports into a structured JSON knowledge base.',
            'Developed a DeepSeek-R1 agent and RAG pipeline using prompt engineering, vector embeddings, and semantic search.',
            'Evaluated with BLEU, ROUGE, and F1, improving aggregate scores by 10% through iterative retrieval and prompt refinement.',
          ],
          tags: ['Python', 'DeepSeek-R1', 'RAG', 'Vector search'],
        },
        {
          icon: 'shield',
          date: 'Feb 2024 — Jul 2024',
          title: 'Privacy-Preserving Federated Learning',
          org: 'The Hong Kong Polytechnic University',
          summary:
            'Explored secure collaborative learning with encrypted model updates and adversarial evaluation.',
          bullets: [
            'Implemented federated learning workflows with PySyft and PyTorch, focused on secure aggregation.',
            'Applied the BFV homomorphic encryption scheme and noise-based privacy mechanisms to protect distributed parameters.',
            'Supported GAN-based attacks and evaluated robustness with ASR, accuracy, F1, and accuracy degradation.',
          ],
          tags: ['PyTorch', 'PySyft', 'BFV encryption', 'Federated learning'],
        },
      ],
    },
    projects: {
      eyebrow: '04 / Projects',
      title: 'Building the full system, not just the feature.',
      note: 'More project demos and technical deep dives are coming soon.',
      item: {
        index: '01',
        date: 'Oct 2024 — Dec 2024',
        title: 'Full-Stack Monopoly Game',
        summary:
          'Led a team in designing and delivering a local Java Monopoly game with clean architecture, interactive gameplay, and a tested development workflow.',
        bullets: [
          'Structured the application with Model-View-Controller architecture for modularity and maintainability.',
          'Built core game logic, player interactions, and an interactive Java Swing desktop interface.',
          'Managed milestones through Git, conducted code reviews, and used JUnit to maintain code quality.',
        ],
        tags: ['Java', 'Java Swing', 'MVC', 'JUnit', 'Git'],
      },
    },
    skills: {
      eyebrow: '05 / Toolkit',
      title: 'A practical foundation for ambitious systems.',
      groups: [
        {
          icon: 'code',
          title: 'Languages',
          items: ['Python', 'Java', 'SQL'],
        },
        {
          icon: 'database',
          title: 'AI & Data',
          items: ['PyTorch', 'PySyft', 'pandas', 'RAG', 'Semantic search'],
        },
        {
          icon: 'sparkles',
          title: 'Engineering',
          items: ['Git', 'JUnit', 'MVC', 'Java Swing', 'Data pipelines'],
        },
      ],
    },
    beyond: {
      eyebrow: 'Beyond code',
      title: 'Technology matters most when it serves people.',
      body: 'In Manila, I volunteered with PolyU’s School of Optometry to help conduct vision screenings for more than 1,000 elementary students, coordinate referrals, and bridge communication across local teams.',
      tags: ['Community service', 'Cross-cultural teamwork', 'Chinese · Native', 'English · Professional'],
    },
    contact: {
      eyebrow: '06 / Contact',
      title: "Let's build something useful.",
      body: 'I am open to developer, software, backend, machine learning, AI, and adjacent technology opportunities where I can contribute and grow.',
      direct: 'Direct',
      online: 'Online',
      location: 'Atlanta, Georgia',
      emailPrimary: 'haoxuan027@outlook.com',
      emailSchool: 'hli3065@gatech.edu',
      phoneUS: '+1 (678) 343-4113',
      phoneCN: '+86 139 3466 3160',
      github: 'github.com/Daybreaker04',
      linkedin: 'linkedin.com/in/haoxuan-li-636285303',
      close: 'Thank you for stopping by.',
    },
    footer: 'Designed and built with curiosity in Atlanta.',
    backToTop: 'Back to orbit',
  },
  zh: {
    nav: [
      ['关于我', '#about'],
      ['经历', '#experience'],
      ['研究', '#research'],
      ['项目', '#projects'],
      ['联系', '#contact'],
    ],
    switchLabel: 'Switch to English',
    status: '佐治亚理工学院 · 计算机科学硕士 · 亚特兰大',
    overline: '后端开发 · 应用人工智能 · 数据',
    nameLead: 'Haoxuan',
    nameNick: '“Harry”',
    nameTail: 'Li',
    chineseName: '李昊轩',
    headline: '将技术构想打磨成可靠的软件与智能系统。',
    intro:
      '我专注于后端工程、应用人工智能与数据的交叉领域。目前就读于佐治亚理工学院计算机科学硕士项目，希望在美国科技行业找到能够创造价值、快速成长的机会。',
    availability: '寻求实习、Co-op 及早期职业阶段的科技机会',
    workCta: '探索我的经历',
    resumeCta: '下载英文简历',
    roles: ['开发工程师', '软件工程师', '后端工程师', '机器学习工程师', '人工智能工程师'],
    metrics: [
      ['100+', '处理的 IPCC 报告'],
      ['10%', 'RAG 综合评估提升'],
      ['10+', '分析的客户账号'],
      ['2028年5月', '预计毕业'],
    ],
    about: {
      eyebrow: '01 / 简介',
      title: '以好奇心探索，以严谨态度实践。',
      body: [
        '我喜欢解决软件工程与复杂真实信息交汇处的问题：搭建数据流水线、让 AI 系统基于可信资料回答问题，并将隐私保护机器学习转化为可行的工程方案。',
        '从高校研究实验室到大型社交媒体平台，我既重视研究深度，也重视可靠实现与清晰沟通。如今，我正在为长期扎根美国科技行业打下工程基础。',
      ],
      educationTitle: '教育背景',
      schools: [
        {
          school: '佐治亚理工学院',
          degree: '计算机科学硕士',
          date: '2026年8月 — 2028年5月（预计）',
          note: '线下项目 · 美国亚特兰大',
        },
        {
          school: '香港理工大学',
          degree: '计算机科学荣誉理学学士',
          date: '2022年9月 — 2026年5月',
          note: 'GPA 3.83/4.3 · 院长荣誉榜，专业前 5%',
        },
      ],
    },
    experience: {
      eyebrow: '02 / 工作经历',
      title: '让数据成为清晰、可执行的决策依据。',
      role: '数据分析实习生',
      company: '新浪微博',
      date: '2024年5月 — 2024年8月',
      location: '中国领先的社交媒体平台',
      bullets: [
        '使用 SQL 与 Python/pandas 提取、清洗并标准化互动及情感数据，实现每周报告流程自动化。',
        '通过配置筛选条件、验证输出并组织可视化，优化公司内部分析看板，覆盖互动量、情感、话题趋势及活动表现。',
        '分析 10+ 客户账号，识别新兴话题与表现变化，并将结果转化为面向客户团队的报告和演示材料。',
      ],
    },
    research: {
      eyebrow: '03 / 科研经历',
      title: '让智能建立在可靠证据之上。',
      items: [
        {
          icon: 'brain',
          date: '2025年2月 — 2025年8月',
          title: '基于 RAG 的气候专家 AI 智能体',
          org: '香港理工大学',
          summary: '构建基于权威 IPCC 研究资料的气候问答系统。',
          bullets: [
            '抓取并预处理 100+ 份 IPCC 报告，构建结构化 JSON 气候知识库。',
            '使用提示工程、向量嵌入与语义搜索开发 DeepSeek-R1 智能体及 RAG 流水线。',
            '使用 BLEU、ROUGE 与 F1 评估，通过迭代优化检索和提示策略，将综合得分提升 10%。',
          ],
          tags: ['Python', 'DeepSeek-R1', 'RAG', '向量搜索'],
        },
        {
          icon: 'shield',
          date: '2024年2月 — 2024年7月',
          title: '隐私保护联邦学习与同态加密',
          org: '香港理工大学',
          summary: '研究使用加密模型更新与对抗评估实现安全的协同机器学习。',
          bullets: [
            '使用 PySyft 与 PyTorch 实现联邦学习流程，重点处理安全聚合与加密模型更新。',
            '应用 BFV 同态加密方案与噪声隐私机制，保护分布式模型参数。',
            '支持基于 GAN 的攻击实验，并通过 ASR、准确率、F1 与准确率下降评估系统鲁棒性。',
          ],
          tags: ['PyTorch', 'PySyft', 'BFV 同态加密', '联邦学习'],
        },
      ],
    },
    projects: {
      eyebrow: '04 / 项目经历',
      title: '不仅实现功能，更关注完整系统。',
      note: '更多项目演示与技术复盘将陆续上线。',
      item: {
        index: '01',
        date: '2024年10月 — 2024年12月',
        title: '全栈大富翁游戏',
        summary: '带领团队设计并完成本地 Java 大富翁游戏，兼顾清晰架构、互动体验与测试流程。',
        bullets: [
          '采用模型-视图-控制器架构，提高系统模块化程度与可维护性。',
          '实现核心游戏逻辑、玩家交互及 Java Swing 桌面图形界面。',
          '使用 Git 管理里程碑与团队协作，并通过代码审查和 JUnit 测试保障质量。',
        ],
        tags: ['Java', 'Java Swing', 'MVC', 'JUnit', 'Git'],
      },
    },
    skills: {
      eyebrow: '05 / 技术栈',
      title: '以扎实工程基础，支撑更有挑战的系统。',
      groups: [
        {
          icon: 'code',
          title: '编程语言',
          items: ['Python', 'Java', 'SQL'],
        },
        {
          icon: 'database',
          title: '人工智能与数据',
          items: ['PyTorch', 'PySyft', 'pandas', 'RAG', '语义搜索'],
        },
        {
          icon: 'sparkles',
          title: '软件工程',
          items: ['Git', 'JUnit', 'MVC', 'Java Swing', '数据流水线'],
        },
      ],
    },
    beyond: {
      eyebrow: '技术之外',
      title: '技术的意义，最终在于服务真实的人。',
      body: '在马尼拉，我作为香港理工大学眼科学院志愿者，协助为 1,000+ 名小学生进行视力筛查、协调后续转诊，并帮助不同地区的团队跨语言沟通。',
      tags: ['社区服务', '跨文化协作', '中文 · 母语', '英语 · 专业工作水平'],
    },
    contact: {
      eyebrow: '06 / 联系方式',
      title: '期待一起创造有价值的事。',
      body: '我愿意探索开发、软件、后端、机器学习、人工智能及其他相关技术机会，在贡献中不断成长。',
      direct: '直接联系',
      online: '在线主页',
      location: '美国佐治亚州亚特兰大',
      emailPrimary: 'haoxuan027@outlook.com',
      emailSchool: 'hli3065@gatech.edu',
      phoneUS: '+1 (678) 343-4113',
      phoneCN: '+86 139 3466 3160',
      github: 'github.com/Daybreaker04',
      linkedin: 'linkedin.com/in/haoxuan-li-636285303',
      close: '感谢你的到访。',
    },
    footer: '在亚特兰大，以好奇心设计与构建。',
    backToTop: '返回星轨',
  },
} as const;

type Language = keyof typeof content;

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 grid gap-5 border-t border-white/10 pt-6 md:grid-cols-[230px_1fr] lg:mb-16">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-200/55">{eyebrow}</p>
      <h2 className="max-w-4xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}

function ResearchIcon({ type }: { type: string }) {
  return type === 'brain' ? <BrainCircuit /> : <ShieldCheck />;
}

function SkillIcon({ type }: { type: string }) {
  if (type === 'database') return <Database />;
  if (type === 'sparkles') return <Sparkles />;
  return <Code2 />;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const text = content[language];

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
  }, [language]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-foreground selection:bg-cyan-200 selection:text-slate-950">
      <section className="hero-grid relative isolate min-h-screen px-5 pb-10 pt-4 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_38%,rgba(97,71,230,.18),transparent_33%),linear-gradient(145deg,#050711_0%,#080a13_48%,#03040a_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-90 [mask-image:linear-gradient(to_bottom,black_76%,transparent)]">
          <GalaxyCanvas />
        </div>

        <header className="mx-auto flex w-full max-w-[1500px] items-center justify-between border-b border-white/10 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Haoxuan Harry Li home">
            <span className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/5 font-mono text-xs tracking-[0.16em] text-white">
              HL
            </span>
            <span className="text-sm font-medium tracking-wide text-white/90">Haoxuan “Harry” Li</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {text.nav.map(([item, href]) => (
              <a
                key={href}
                href={href}
                className="text-xs tracking-[0.07em] text-white/50 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Daybreaker04"
              target="_blank"
              rel="noreferrer"
              className="hidden size-9 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-white/25 hover:text-white sm:grid"
              aria-label="GitHub"
            >
              <GitBranch className="size-4" />
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              aria-label={text.switchLabel}
              className="h-9 rounded-full border border-white/12 bg-white/[0.04] px-3 text-white hover:bg-white/10 hover:text-white"
            >
              <Languages data-icon="inline-start" />
              {language === 'en' ? '中文' : 'EN'}
            </Button>
          </div>
        </header>

        <div id="top" className="mx-auto grid min-h-[calc(100vh-82px)] w-full max-w-[1500px] items-center gap-14 py-[clamp(4rem,9vh,7rem)] lg:grid-cols-[minmax(0,1.32fr)_minmax(320px,.68fr)]">
          <div className="relative z-10 max-w-5xl">
            <Badge className="mb-6 h-auto rounded-full border border-cyan-200/20 bg-cyan-200/[0.07] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cyan-100">
              <span className="mr-1 inline-block size-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
              {text.status}
            </Badge>

            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.27em] text-violet-200/65">
              {text.overline}
            </p>
            <h1 className="text-balance text-[clamp(3.55rem,7.3vw,7.8rem)] font-medium leading-[0.87] tracking-[-0.07em] text-white">
              {text.nameLead}{' '}
              <span className="text-gradient">{text.nameNick}</span>{' '}
              {text.nameTail}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="font-serif text-2xl tracking-[0.15em] text-white/48">{text.chineseName}</span>
              <span className="h-px w-14 bg-white/20" />
            </div>
            <h2 className="mt-9 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-[-0.035em] text-white/92 sm:text-4xl">
              {text.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
              {text.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {text.roles.map((role) => (
                <span key={role} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] text-white/56">
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                render={<a href="#experience" />}
                nativeButton={false}
                size="lg"
                className="h-11 rounded-full bg-white px-5 text-black hover:bg-cyan-100"
              >
                {text.workCta}
                <ArrowDownRight data-icon="inline-end" />
              </Button>
              <Button
                render={<a href="/Haoxuan_Li_Resume.pdf" download />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-11 rounded-full border-white/15 bg-white/[0.035] px-5 text-white hover:bg-white/10 hover:text-white"
              >
                <Download data-icon="inline-start" />
                {text.resumeCta}
              </Button>
            </div>

            <p className="mt-7 flex items-center gap-2 text-xs text-cyan-100/55">
              <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.8)]" />
              {text.availability}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-7 rounded-[3rem] bg-violet-500/10 blur-3xl" />
            <figure className="relative overflow-hidden rounded-[1.7rem] border border-white/14 bg-white/[0.04] p-2 shadow-[0_35px_100px_rgba(0,0,0,.45)] backdrop-blur-sm">
              <img
                src="/harry-li-headshot.jpg"
                alt="Haoxuan Harry Li in a black suit"
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-[center_18%] grayscale-[8%]"
              />
              <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-md">
                <div>
                  <p className="text-sm font-medium text-white">Haoxuan “Harry” Li</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">Georgia Tech · MSCS</p>
                </div>
                <ArrowUpRight className="size-4 text-cyan-100/70" />
              </figcaption>
            </figure>
          </div>

          <div className="grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {text.metrics.map(([value, label]) => (
              <div key={label} className="border-white/10 lg:border-l lg:pl-5 first:lg:border-l-0 first:lg:pl-0">
                <p className="font-mono text-xl text-white">{value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-white/38">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading eyebrow={text.about.eyebrow} title={text.about.title} />
          <div className="grid gap-14 md:grid-cols-[230px_1fr]">
            <div className="hidden md:block" />
            <div>
              <div className="grid gap-6 text-pretty text-lg leading-relaxed text-white/58 lg:grid-cols-2 lg:text-xl">
                {text.about.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-16">
                <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-white/38">
                  <GraduationCap className="size-4 text-cyan-200/70" />
                  {text.about.educationTitle}
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  {text.about.schools.map((school) => (
                    <article key={school.school} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]">
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-100/48">{school.date}</p>
                      <h3 className="mt-5 text-xl font-medium tracking-[-0.025em] text-white">{school.school}</h3>
                      <p className="mt-2 text-sm text-white/65">{school.degree}</p>
                      <p className="mt-4 text-xs leading-relaxed text-white/38">{school.note}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white/[0.018] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading eyebrow={text.experience.eyebrow} title={text.experience.title} />
          <div className="grid gap-14 md:grid-cols-[230px_1fr]">
            <div className="flex items-start gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-white/32">
              <BriefcaseBusiness className="size-4 text-violet-200/60" />
              {text.experience.date}
            </div>
            <article className="grid gap-8 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.045),rgba(255,255,255,.014))] p-6 sm:p-9 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-100/50">{text.experience.location}</p>
                <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white">{text.experience.company}</h3>
                <p className="mt-2 text-base text-white/55">{text.experience.role}</p>
              </div>
              <ul className="space-y-5">
                {text.experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-4 text-sm leading-relaxed text-white/56 sm:text-base">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-200/65" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="research" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading eyebrow={text.research.eyebrow} title={text.research.title} />
          <div className="grid gap-6 lg:grid-cols-2">
            {text.research.items.map((item, index) => (
              <article key={item.title} className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all hover:-translate-y-1 hover:border-white/20 sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <span className="grid size-11 place-items-center rounded-xl border border-cyan-200/15 bg-cyan-100/[0.055] text-cyan-100/80 [&>svg]:size-5">
                    <ResearchIcon type={item.icon} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/32">{item.date}</span>
                </div>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-violet-200/52">0{index + 1} · {item.org}</p>
                <h3 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-3xl">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-white/48">{item.summary}</p>
                <ul className="mt-7 space-y-4 border-t border-white/8 pt-6">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-white/54">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-white/35" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/9 bg-black/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-white/40">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white/[0.018] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading eyebrow={text.projects.eyebrow} title={text.projects.title} />
          <article className="grid overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-[.42fr_1.58fr]">
            <div className="relative min-h-64 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_40%_35%,rgba(110,231,255,.22),transparent_22%),radial-gradient(circle_at_65%_64%,rgba(145,93,255,.2),transparent_24%),#070a13] p-7 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:36px_36px]" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="font-mono text-xs text-cyan-100/55">PROJECT / {text.projects.item.index}</span>
                <div className="flex items-end justify-between">
                  <Code2 className="size-16 stroke-[1] text-white/55" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-white/32">Java · MVC</span>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-9 lg:p-12">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-violet-200/55">{text.projects.item.date}</p>
                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">{text.projects.item.title}</h3>
                </div>
                <ArrowUpRight className="size-5 text-white/30" />
              </div>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/52 sm:text-lg">{text.projects.item.summary}</p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {text.projects.item.bullets.map((bullet, index) => (
                  <div key={bullet} className="border-t border-white/10 pt-4">
                    <span className="font-mono text-[9px] text-cyan-100/38">0{index + 1}</span>
                    <p className="mt-3 text-sm leading-relaxed text-white/48">{bullet}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {text.projects.item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-white/42">{tag}</span>
                ))}
              </div>
            </div>
          </article>
          <p className="mt-5 text-right font-mono text-[9px] uppercase tracking-[0.12em] text-white/28">{text.projects.note}</p>
        </div>
      </section>

      <section id="skills" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading eyebrow={text.skills.eyebrow} title={text.skills.title} />
          <div className="grid gap-4 md:grid-cols-3">
            {text.skills.groups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
                <span className="grid size-10 place-items-center rounded-xl bg-white/[0.045] text-cyan-100/70 [&>svg]:size-4">
                  <SkillIcon type={group.icon} />
                </span>
                <h3 className="mt-7 text-lg font-medium text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md border border-white/8 bg-black/15 px-2.5 py-1.5 font-mono text-[10px] text-white/44">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <article className="mt-16 grid gap-8 rounded-3xl border border-violet-200/10 bg-[radial-gradient(circle_at_82%_24%,rgba(126,92,255,.12),transparent_32%),rgba(255,255,255,.025)] p-7 sm:p-10 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-violet-200/55">{text.beyond.eyebrow}</p>
              <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-4xl">{text.beyond.title}</h3>
            </div>
            <div>
              <p className="text-base leading-relaxed text-white/54 sm:text-lg">{text.beyond.body}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {text.beyond.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/40">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="relative isolate overflow-hidden px-5 pb-10 pt-24 sm:px-8 lg:px-12 lg:pt-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_70%_45%,rgba(96,72,225,.2),transparent_32%),linear-gradient(to_bottom,#05070d,#080a14)]" />
        <div className="absolute inset-0 -z-10 opacity-35">
          <GalaxyCanvas />
        </div>
        <div className="mx-auto max-w-[1500px]">
          <SectionHeading eyebrow={text.contact.eyebrow} title={text.contact.title} />
          <div className="grid gap-12 md:grid-cols-[230px_1fr]">
            <div className="hidden md:block" />
            <div>
              <p className="max-w-3xl text-lg leading-relaxed text-white/58 sm:text-xl">{text.contact.body}</p>
              <div className="mt-12 grid gap-5 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm sm:p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-cyan-100/45">{text.contact.direct}</p>
                  <div className="mt-6 space-y-4">
                    <a href={`mailto:${text.contact.emailPrimary}`} className="flex items-center gap-3 text-sm text-white/62 transition hover:text-white">
                      <Mail className="size-4 text-cyan-100/55" /> {text.contact.emailPrimary}
                    </a>
                    <a href={`mailto:${text.contact.emailSchool}`} className="flex items-center gap-3 text-sm text-white/62 transition hover:text-white">
                      <Mail className="size-4 text-cyan-100/55" /> {text.contact.emailSchool}
                    </a>
                    <a href="tel:+16783434113" className="flex items-center gap-3 text-sm text-white/62 transition hover:text-white">
                      <Phone className="size-4 text-cyan-100/55" /> {text.contact.phoneUS}
                    </a>
                    <a href="tel:+8613934663160" className="flex items-center gap-3 text-sm text-white/62 transition hover:text-white">
                      <Phone className="size-4 text-cyan-100/55" /> {text.contact.phoneCN}
                    </a>
                    <p className="flex items-center gap-3 text-sm text-white/42">
                      <MapPin className="size-4 text-cyan-100/55" /> {text.contact.location}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm sm:p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-violet-100/45">{text.contact.online}</p>
                  <div className="mt-6 space-y-4">
                    <a href="https://github.com/Daybreaker04" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 text-sm text-white/62 transition hover:text-white">
                      <span className="flex min-w-0 items-center gap-3"><GitBranch className="size-4 shrink-0 text-violet-100/55" /><span className="truncate">{text.contact.github}</span></span>
                      <ArrowUpRight className="size-4 shrink-0 text-white/25" />
                    </a>
                    <a href="https://www.linkedin.com/in/haoxuan-li-636285303" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 text-sm text-white/62 transition hover:text-white">
                      <span className="flex min-w-0 items-center gap-3"><ContactRound className="size-4 shrink-0 text-violet-100/55" /><span className="truncate">{text.contact.linkedin}</span></span>
                      <ArrowUpRight className="size-4 shrink-0 text-white/25" />
                    </a>
                    <a href="/Haoxuan_Li_Resume.pdf" download className="flex items-center justify-between gap-4 text-sm text-white/62 transition hover:text-white">
                      <span className="flex items-center gap-3"><Download className="size-4 text-violet-100/55" />{text.resumeCta}</span>
                      <ArrowDownRight className="size-4 text-white/25" />
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-20 text-balance text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white">
                {text.contact.close}
              </p>
            </div>
          </div>

          <footer className="mt-24 flex flex-col gap-4 border-t border-white/10 py-6 text-[10px] uppercase tracking-[0.12em] text-white/28 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Haoxuan “Harry” Li · {text.footer}</p>
            <a href="#top" className="flex items-center gap-2 transition hover:text-white/60">
              {text.backToTop} <ArrowUpRight className="size-3" />
            </a>
          </footer>
        </div>
      </section>
    </main>
  );
}
