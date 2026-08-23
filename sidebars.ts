import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '🚀 1. Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/system-requirements',
        'getting-started/docker-deployment',
        'getting-started/baremetal-installation',
        'getting-started/zero-config-onboarding',
        'getting-started/quickstart-tutorial',
      ],
    },
    {
      type: 'category',
      label: '📖 2. User Guide',
      collapsed: false,
      items: [
        'user-guide/dashboard',
        'user-guide/ai-chat',
        'user-guide/agent-studio',
        'user-guide/missions',
        'user-guide/operations',
        'user-guide/automations-heartbeat',
        'user-guide/channels',
        'user-guide/connectors',
        'user-guide/tools-and-skills',
        'user-guide/tool-hub',
        'user-guide/workspace',
        'user-guide/terminal',
        'user-guide/notifications',
      ],
    },
    {
      type: 'category',
      label: '🧠 3. Advanced Architecture',
      collapsed: true,
      items: [
        'advanced-architecture/dual-runtime-hal',
        'advanced-architecture/hybrid-memory-rag',
        'advanced-architecture/hardware-vault-security',
        'advanced-architecture/sandbox-isolation',
        'advanced-architecture/tailscale-remote-access',
        'advanced-architecture/immutable-ota-updates',
        'advanced-architecture/backup-and-recovery',
      ],
    },
    {
      type: 'category',
      label: '🛠️ 4. Developer & API Reference',
      collapsed: true,
      items: [
        'developer-reference/rest-api-overview',
        'developer-reference/api-endpoints',
        'developer-reference/realtime-websocket',
        'developer-reference/custom-skills-guide',
        'developer-reference/mcp-integration',
        'developer-reference/wasm-plugin-development',
      ],
    },
    {
      type: 'category',
      label: '💡 5. Support & FAQ',
      collapsed: true,
      items: [
        'support-and-faq/troubleshooting',
        'support-and-faq/faq',
        'support-and-faq/glossary',
      ],
    },
  ],
};

export default sidebars;
