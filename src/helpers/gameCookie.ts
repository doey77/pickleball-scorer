import Cookies from 'js-cookie'
import { IGame } from '../interfaces/IGame'
import initialGame from '../util/initialGame'

/**
 * Name of the cookie
 */
const name = 'game'

/**
 * Get game from cookie storage. If no game, return initial game settings.
 */
export const getGameCookie = (): IGame => {
  const gameString = Cookies.get(name)
  if (gameString) {
    const game: IGame = JSON.parse(gameString)
    return game
  }
  return initialGame
}

/**
 * Set game cookie
 * @param game Game data
 */
export const setGameCookie = (game: IGame) => {
  Cookies.set(name, JSON.stringify(game))
}
