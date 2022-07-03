import Cookies from 'js-cookie'
import { IName } from '../interfaces/IName'

/**
 * Name of the cookie
 */
const cookieName = 'name'

/**
 * Get team names from cookie storage. If none, return default names
 */
export const getNameCookie = (): IName => {
  const gameString = Cookies.get(cookieName)
  if (gameString) {
    const names: IName = JSON.parse(gameString)
    return names
  }
  const defaultNames: IName = { a: 'Team A', b: 'Team B' }
  return defaultNames
}

/**
 * Set name cookie
 * @param name Name data
 */
export const setNameCookie = (name: IName) => {
  Cookies.set(cookieName, JSON.stringify(name), { expires: 1 })
}
