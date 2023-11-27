export const getIpData = async () => {
  const res = await fetch(`${process.env.APIIP_PROTOCOL}://apiip.net/api/check?accessKey=${process.env.APIIP_KEY}`)

  if (!res.ok) {
    return {
      success: false,
      errorMessage: 'Failed to fetch API IP data',
    }
  }

  return {
    success: true,
    location: await res.json()
  }
}