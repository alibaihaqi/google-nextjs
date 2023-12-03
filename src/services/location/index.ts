export const getGeolocationIp = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_IPIFY_URL as string;

  const res = await fetch(API_URL);

  if (!res.ok) {
    return {
      success: false,
      errorMessage: 'Failed to fetch API Geolocation data',
    }
  }

  return {
    success: true,
    clientData: await res.json()
  }
}

export const GetClientCountryApi = async () => {
  const getGeolocationData = await getGeolocationIp()

  if (!getGeolocationData.success) return getGeolocationData

  const res = await fetch(`${process.env.NEXT_PUBLIC_APIGW_DOMAIN}/apiip/check?ip=${getGeolocationData.clientData?.ip}`);

  if (!res.ok) {
    return {
      success: false,
      errorMessage: 'Failed to fetch API GetClientCountryApi data',
    }
  }

  return res.json()
} 