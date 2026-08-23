import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.badgeContainer}>
          <span className={styles.versionBadge}>ActonOS v0.1 Documentation</span>
          <span className={styles.statusPill}>● Production-Ready Architecture</span>
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          The AI-Native Autonomous Operating System
        </Heading>
        <p className={styles.heroSubtitle}>
          Engineered for dedicated MiniPCs and Docker hosts. Run autonomous multi-agent swarms with 
          hardware-bound security, dynamic MCP tool loading, hybrid RAG memory, and self-healing OTA updates.
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--action-yellow button--lg', styles.heroBtnPrimary)}
            to="/getting-started/overview">
            Get Started (Quickstart) →
          </Link>
          <Link
            className={clsx('button button--secondary-dark button--lg', styles.heroBtnSecondary)}
            to="/user-guide/dashboard">
            Explore User Guide
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.heroBtnOutline)}
            to="/developer-reference/api-endpoints">
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

interface FeatureItem {
  title: string;
  badge: string;
  description: string;
  link: string;
  icon: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Dual-Runtime HAL',
    badge: 'Bare-metal & Docker',
    icon: '⚡',
    description:
      'Auto-detects runtime environment. Runs on Bare-metal MiniPCs with Bubblewrap sandboxing or inside Docker containers with a batteries-included toolchain.',
    link: '/advanced-architecture/dual-runtime-hal',
  },
  {
    title: 'Universal Agent Swarm',
    badge: 'Multi-Agent Orchestration',
    icon: '🤖',
    description:
      'Create unlimited AI agents with custom personas, LLM cascade routers (OpenAI, Claude, Gemini, Ollama), tool scopes, and Goroutine-based swarm delegation.',
    link: '/user-guide/agent-studio',
  },
  {
    title: 'Dynamic Tooling Hub',
    badge: 'MCP · WASM · Skills',
    icon: '🔌',
    description:
      'Hot-load Model Context Protocol (MCP) servers, pure Go WASM plugins (wazero), and Skill-as-a-Folder scripts at runtime without restarting the daemon.',
    link: '/user-guide/tools-and-skills',
  },
  {
    title: 'Hybrid Semantic Memory (RAG)',
    badge: 'FTS5 + Local Vectors',
    icon: '🧠',
    description:
      'SQLite FTS5 full-text search paired with Chromem-go local ONNX vector embeddings (multilingual-e5-small) and Ebbinghaus forgetting curve decay.',
    link: '/advanced-architecture/hybrid-memory-rag',
  },
  {
    title: 'Hardware-Bound Vault',
    badge: 'AES-256-GCM + Argon2id',
    icon: '🔒',
    description:
      'Zero-trust security with cryptographic keys bound to hardware UUID & CPU serial. Bubblewrap cgroups namespace isolation and SHA-256 chained audit logs.',
    link: '/advanced-architecture/hardware-vault-security',
  },
  {
    title: 'Zero-Config Remote Access',
    badge: 'Embedded tsnet & Mesh',
    icon: '🌐',
    description:
      'Embedded Tailscale tsnet provides encrypted end-to-end remote access without port forwarding. First-boot Captive Portal Wi-Fi onboarding at 192.168.4.1.',
    link: '/advanced-architecture/tailscale-remote-access',
  },
];

function Feature({title, badge, icon, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <Link to={link} className={styles.featureCard}>
        <div className={styles.featureCardHeader}>
          <span className={styles.featureIcon}>{icon}</span>
          <span className={styles.cardBadge}>{badge}</span>
        </div>
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
        <p className={styles.cardDesc}>{description}</p>
        <div className={styles.cardFooter}>
          <span className={styles.readMore}>Learn more →</span>
        </div>
      </Link>
    </div>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Everything You Need to Orchestrate Autonomous AI</h2>
          <p className={styles.sectionSubtitle}>
            Explore our curated documentation guides to install, configure, develop, and operate ActonOS v0.1.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | v0.1`}
      description="Comprehensive user guides, architecture specifications, and developer API references for ActonOS.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
