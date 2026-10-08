import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '7bd30iab',
    dataset: 'production'
  },
  studioHost: 'ww-group',
  deployment: {
    appId: 'qpfgc7cyljp80lo6k8yzrxhj',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
