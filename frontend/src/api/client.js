const API_BASE = import.meta.env.VITE_API_BASE || '/api'

async function request(path) {
  const res = await fetch(`${API_BASE}${path}`)
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}

export const getPortfolio = () => request('/portfolio')
export const getContact = () => request('/contact')
