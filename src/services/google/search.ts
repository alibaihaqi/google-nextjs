export const GoogleCustomSearchApi = async (query: string): Promise<any> => {
  if (!query) return
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${query}`
  )

  if (!response.ok || response.status !== 200) {
    throw new Error('Error query search')
  }

  return response.json()
}