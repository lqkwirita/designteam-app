/**
 * Role Definitions — metadata for each AgentRole
 */

import type { AgentRole, AgentRoleMeta, PersonalityConfig } from './types'

function personality(
  bold: number,
  playful: number,
  experimental: number,
  verbose: number,
  warm: number,
): PersonalityConfig {
  return {
    sliders: {
      'bold-subtle': bold,
      'playful-serious': playful,
      'experimental-conventional': experimental,
      'verbose-concise': verbose,
      'warm-corporate': warm,
    },
  }
}

export const AGENT_ROLE_DEFINITIONS: Record<AgentRole, AgentRoleMeta> = {
  researcher: {
    role: 'researcher',
    displayName: 'Researcher',
    description:
      'Investigates competitors, trends, and user insights to ground the team in evidence-based decisions.',
    avatarKey: 'researcher',
    defaultPersonality: personality(1, 0, -2, 2, 0),
    baseSkillKeys: ['researcher'],
    color: '#6366f1',
  },
  copywriter: {
    role: 'copywriter',
    displayName: 'Copywriter',
    description:
      'Crafts compelling headlines, body copy, and messaging that connects with the target audience.',
    avatarKey: 'copywriter',
    defaultPersonality: personality(-3, -2, 0, 0, -2),
    baseSkillKeys: ['copywriter'],
    color: '#ec4899',
  },
  'graphic-designer': {
    role: 'graphic-designer',
    displayName: 'Graphic Designer',
    description:
      'Creates visual compositions, illustrations, and graphic elements that bring concepts to life.',
    avatarKey: 'graphic-designer',
    defaultPersonality: personality(-3, 0, -3, 0, -1),
    baseSkillKeys: ['graphic-designer'],
    color: '#f97316',
  },
  'ux-designer': {
    role: 'ux-designer',
    displayName: 'UX Designer',
    description:
      'Designs intuitive interactions, user flows, and information architecture for smooth, usable experiences.',
    avatarKey: 'ux-designer',
    defaultPersonality: personality(1, 1, -1, 2, 0),
    baseSkillKeys: ['ux-designer'],
    color: '#14b8a6',
  },
  'ux-writer': {
    role: 'ux-writer',
    displayName: 'UX Writer',
    description:
      'Writes clear microcopy, labels, and interface text that guides users through the product.',
    avatarKey: 'ux-writer',
    defaultPersonality: personality(1, -1, 1, 2, -1),
    baseSkillKeys: ['ux-writer'],
    color: '#eab308',
  },
  'editorial-designer': {
    role: 'editorial-designer',
    displayName: 'Editorial Designer',
    description:
      'Arranges layout, typography, and visual hierarchy to create polished, publication-ready designs.',
    avatarKey: 'editorial-designer',
    defaultPersonality: personality(-2, 1, -2, 1, -2),
    baseSkillKeys: ['editorial-designer'],
    color: '#8b5cf6',
  },
  'social-media-designer': {
    role: 'social-media-designer',
    displayName: 'Social Media Designer',
    description:
      'Creates scroll-stopping content optimized for each social platform and its audience.',
    avatarKey: 'social-media-designer',
    defaultPersonality: personality(-3, -3, -1, 0, -2),
    baseSkillKeys: ['social-media-designer'],
    color: '#06b6d4',
  },
  'creative-director': {
    role: 'creative-director',
    displayName: 'Creative Director',
    description:
      'Orchestrates the team, sets creative direction, ensures brand coherence, and holds the quality bar.',
    avatarKey: 'creative-director',
    defaultPersonality: personality(-3, 0, -2, 1, -1),
    baseSkillKeys: ['creative-director'],
    color: '#ef4444',
  },
  'design-engineer': {
    role: 'design-engineer',
    displayName: 'Design Engineer',
    description:
      'Bridges design and code — builds responsive components, implements design systems, and ensures pixel-perfect execution.',
    avatarKey: 'design-engineer',
    defaultPersonality: personality(1, 1, -1, 2, 1),
    baseSkillKeys: ['design-engineer'],
    color: '#0ea5e9',
  },
  'brand-strategist': {
    role: 'brand-strategist',
    displayName: 'Brand Strategist',
    description:
      'Defines brand identity, visual systems, tone of voice, and ensures consistency across every touchpoint.',
    avatarKey: 'brand-strategist',
    defaultPersonality: personality(-2, 1, -1, 1, -1),
    baseSkillKeys: ['brand-strategist'],
    color: '#a855f7',
  },
  'marketing-strategist': {
    role: 'marketing-strategist',
    displayName: 'Marketing Strategist',
    description:
      'Plans campaigns, targets audiences, optimizes funnels, and drives measurable growth through strategic marketing.',
    avatarKey: 'marketing-strategist',
    defaultPersonality: personality(-2, 0, 0, 1, 1),
    baseSkillKeys: ['marketing-strategist'],
    color: '#f43f5e',
  },
  'print-designer': {
    role: 'print-designer',
    displayName: 'Print Designer',
    description:
      'Creates production-ready designs for physical media — packaging, signage, brochures, and large-format print.',
    avatarKey: 'print-designer',
    defaultPersonality: personality(-1, 1, 1, 1, 0),
    baseSkillKeys: ['print-designer'],
    color: '#84cc16',
  },
  'motion-designer': {
    role: 'motion-designer',
    displayName: 'Motion Designer',
    description:
      'Brings designs to life with animation, transitions, micro-interactions, and motion graphics.',
    avatarKey: 'motion-designer',
    defaultPersonality: personality(-3, -2, -3, 0, -1),
    baseSkillKeys: ['motion-designer'],
    color: '#06b6d4',
  },
  'accessibility-specialist': {
    role: 'accessibility-specialist',
    displayName: 'Accessibility Specialist',
    description:
      'Ensures designs are inclusive and usable by everyone — WCAG compliance, assistive technology, and universal design.',
    avatarKey: 'accessibility-specialist',
    defaultPersonality: personality(2, 1, 1, 2, -1),
    baseSkillKeys: ['accessibility-specialist'],
    color: '#14b8a6',
  },
  'content-strategist': {
    role: 'content-strategist',
    displayName: 'Content Strategist',
    description:
      'Plans content architecture, editorial calendars, taxonomy, and ensures content serves both users and business goals.',
    avatarKey: 'content-strategist',
    defaultPersonality: personality(1, 0, 0, 1, -1),
    baseSkillKeys: ['content-strategist'],
    color: '#d946ef',
  },
  'seo-specialist': {
    role: 'seo-specialist',
    displayName: 'SEO Specialist',
    description:
      'Optimizes content and structure for search visibility — keywords, meta tags, technical SEO, and structured data.',
    avatarKey: 'seo-specialist',
    defaultPersonality: personality(2, 1, 1, 2, 2),
    baseSkillKeys: ['seo-specialist'],
    color: '#f97316',
  },
  'information-designer': {
    role: 'information-designer',
    displayName: 'Information Designer',
    description:
      'Turns complex data into visual narratives — charts, infographics, dashboards, and data stories grounded in data humanism.',
    avatarKey: 'information-designer',
    defaultPersonality: personality(-1, 1, -2, -1, -1),
    baseSkillKeys: ['information-designer'],
    color: '#10b981',
  },
  'environmental-designer': {
    role: 'environmental-designer',
    displayName: 'Environmental Designer',
    description:
      'Designs for physical space — exhibitions, wayfinding, signage, and environmental graphics where typography meets architecture.',
    avatarKey: 'environmental-designer',
    defaultPersonality: personality(-2, 2, 0, -1, 1),
    baseSkillKeys: ['environmental-designer'],
    color: '#78716c',
  },
  'experience-designer': {
    role: 'experience-designer',
    displayName: 'Experience Designer',
    description:
      'Creates multisensory experiences across digital and physical — interactive installations, sonic branding, and immersive brand moments.',
    avatarKey: 'experience-designer',
    defaultPersonality: personality(-3, -2, -4, 0, -1),
    baseSkillKeys: ['experience-designer'],
    color: '#f59e0b',
  },
  'product-designer': {
    role: 'product-designer',
    displayName: 'Product Designer',
    description:
      'Designs physical objects, consumer products, and hardware — form, materials, ergonomics, and sustainability-centered industrial design.',
    avatarKey: 'product-designer',
    defaultPersonality: personality(-2, 2, -1, 1, 0),
    baseSkillKeys: ['product-designer'],
    color: '#64748b',
  },
  'type-designer': {
    role: 'type-designer',
    displayName: 'Type Designer',
    description:
      'Creates custom typefaces, lettering, and typographic systems — the craft of designing letterforms that give brands a unique voice.',
    avatarKey: 'type-designer',
    defaultPersonality: personality(-1, 1, -2, -1, 0),
    baseSkillKeys: ['type-designer'],
    color: '#1d4ed8',
  },
  'cultural-strategist': {
    role: 'cultural-strategist',
    displayName: 'Cultural Strategist',
    description:
      'Makes brands work across cultures, languages, and scripts — multilingual systems, localization strategy, and bi-scriptural identity.',
    avatarKey: 'cultural-strategist',
    defaultPersonality: personality(-1, 0, -1, 0, -2),
    baseSkillKeys: ['cultural-strategist'],
    color: '#be185d',
  },
  'packaging-designer': {
    role: 'packaging-designer',
    displayName: 'Packaging Designer',
    description:
      'Designs structural packaging, unboxing experiences, and retail shelf presence — 3D form, materials, and the first physical brand interaction.',
    avatarKey: 'packaging-designer',
    defaultPersonality: personality(1, 1, 0, 1, 0),
    baseSkillKeys: ['packaging-designer'],
    color: '#65a30d',
  },
}

export const AGENT_ROLE_LIST: AgentRoleMeta[] = Object.values(
  AGENT_ROLE_DEFINITIONS,
)
