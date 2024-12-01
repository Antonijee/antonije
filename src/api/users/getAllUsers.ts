export const getAllUsers = async () => {
  const response = await fetch('http://localhost:3000/users')
  return await response.json()
}