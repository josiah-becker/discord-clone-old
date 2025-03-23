export function useAuth() {
  async function logIn() {
    await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      body: JSON.stringify({ username: 'Josiah', password: 'password' }),
    })
    sessionStorage.setItem('isLoggedIn', 'true')
  }
  function logOut() {
    sessionStorage.removeItem('isLoggedIn')
  }

  function isLoggedIn() {
    return sessionStorage.getItem('isLoggedIn') === 'true'
  }
  return { logIn, logOut, isLoggedIn }
}

export type UseAuth = ReturnType<typeof useAuth>
