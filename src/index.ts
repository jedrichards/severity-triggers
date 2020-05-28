import {
  AssistantPackageExport,
  AssistantConfig,
  ViolationSeverity,
} from '@sketch-hq/sketch-assistant-types'
import CoreAssistant from '@sketch-hq/sketch-core-assistant'

export const config: AssistantConfig = {
  rules: {
    '@sketch-hq/sketch-core-assistant/name-pattern-pages': {
      active: true,
      forbidden: [],
      allowed: ['^(?![ a-zA-Z0-9,.-_;!"#$%&/()@Û£><|\\¼»`«]).'],
      ruleTitle: 'Page names should start with an emoji',
      severity: ViolationSeverity.info,
    },
    '@sketch-hq/sketch-core-assistant/name-pattern-artboards': {
      active: true,
      forbidden: [],
      allowed: ['^(\\d+\\.?)+ .*'],
      ruleTitle: 'Artboard names should start with numbers',
      severity: ViolationSeverity.warn,
    },
    '@sketch-hq/sketch-core-assistant/name-pattern-groups': {
      active: true,
      allowed: [],
      forbidden: ['^Group$', 'Group Copy'],
      ruleTitle: 'Group names should not be default',
      severity: ViolationSeverity.error,
    },
  },
}

const assistant: AssistantPackageExport = [
  CoreAssistant,
  async () => {
    return {
      name: 'severity-triggers',
      rules: [],
      config,
    }
  },
]

export default assistant
