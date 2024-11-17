import { DateTime } from 'luxon'

export const formatYear = (dateString) => {
  if (!dateString) return 'N/A'
  try {
    return DateTime.fromISO(dateString).year
  } catch {
    return 'N/A'
  }
}

export const formatDate = (dateString, format = 'MMM dd, yyyy') => {
  if (!dateString) return 'N/A'
  try {
    return DateTime.fromISO(dateString).toFormat(format)
  } catch {
    return 'N/A'
  }
}