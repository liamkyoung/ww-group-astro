import {at, defineMigration, set} from 'sanity/migrate'
import {zoningType} from '../../schemaTypes/listing/types'

// Zoning used to be a dropdown storing short codes ('C', 'r', 'i').
// It's now free text, so replace each code with its readable label.
const LABELS: Record<string, string> = Object.fromEntries(
  zoningType.map(({title, value}) => [value, title]),
)

export default defineMigration({
  title: 'Convert listing zoning codes to free text',
  documentTypes: ['listing'],
  migrate: {
    document(doc) {
      const label = LABELS[doc.zoningType as string]
      if (!label) return
      return at('zoningType', set(label))
    },
  },
})
