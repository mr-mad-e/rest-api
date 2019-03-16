import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Movies, { schema } from './model'

const router = new Router()
const { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Ratings, Metascore, imdbRating, imdbVotes, imdbID, Type, DVD, BoxOffice, Production, Website, Response } = schema.tree

/**
 * @api {post} /movies Create movies
 * @apiName CreateMovies
 * @apiGroup Movies
 * @apiParam Title Movies's Title.
 * @apiParam Year Movies's Year.
 * @apiParam Rated Movies's Rated.
 * @apiParam Released Movies's Released.
 * @apiParam Runtime Movies's Runtime.
 * @apiParam Genre Movies's Genre.
 * @apiParam Director Movies's Director.
 * @apiParam Writer Movies's Writer.
 * @apiParam Actors Movies's Actors.
 * @apiParam Plot Movies's Plot.
 * @apiParam Language Movies's Language.
 * @apiParam Country Movies's Country.
 * @apiParam Awards Movies's Awards.
 * @apiParam Poster Movies's Poster.
 * @apiParam Ratings Movies's Ratings.
 * @apiParam Metascore Movies's Metascore.
 * @apiParam imdbRating Movies's imdbRating.
 * @apiParam imdbVotes Movies's imdbVotes.
 * @apiParam imdbID Movies's imdbID.
 * @apiParam Type Movies's Type.
 * @apiParam DVD Movies's DVD.
 * @apiParam BoxOffice Movies's BoxOffice.
 * @apiParam Production Movies's Production.
 * @apiParam Website Movies's Website.
 * @apiParam Response Movies's Response.
 * @apiSuccess {Object} movies Movies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Movies not found.
 */
router.post('/',
  body({ Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Ratings, Metascore, imdbRating, imdbVotes, imdbID, Type, DVD, BoxOffice, Production, Website, Response }),
  create)

/**
 * @api {get} /movies Retrieve movies
 * @apiName RetrieveMovies
 * @apiGroup Movies
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of movies.
 * @apiSuccess {Object[]} rows List of movies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /movies/:id Retrieve movies
 * @apiName RetrieveMovies
 * @apiGroup Movies
 * @apiSuccess {Object} movies Movies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Movies not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /movies/:id Update movies
 * @apiName UpdateMovies
 * @apiGroup Movies
 * @apiParam Title Movies's Title.
 * @apiParam Year Movies's Year.
 * @apiParam Rated Movies's Rated.
 * @apiParam Released Movies's Released.
 * @apiParam Runtime Movies's Runtime.
 * @apiParam Genre Movies's Genre.
 * @apiParam Director Movies's Director.
 * @apiParam Writer Movies's Writer.
 * @apiParam Actors Movies's Actors.
 * @apiParam Plot Movies's Plot.
 * @apiParam Language Movies's Language.
 * @apiParam Country Movies's Country.
 * @apiParam Awards Movies's Awards.
 * @apiParam Poster Movies's Poster.
 * @apiParam Ratings Movies's Ratings.
 * @apiParam Metascore Movies's Metascore.
 * @apiParam imdbRating Movies's imdbRating.
 * @apiParam imdbVotes Movies's imdbVotes.
 * @apiParam imdbID Movies's imdbID.
 * @apiParam Type Movies's Type.
 * @apiParam DVD Movies's DVD.
 * @apiParam BoxOffice Movies's BoxOffice.
 * @apiParam Production Movies's Production.
 * @apiParam Website Movies's Website.
 * @apiParam Response Movies's Response.
 * @apiSuccess {Object} movies Movies's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Movies not found.
 */
router.put('/:id',
  body({ Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Ratings, Metascore, imdbRating, imdbVotes, imdbID, Type, DVD, BoxOffice, Production, Website, Response }),
  update)

/**
 * @api {delete} /movies/:id Delete movies
 * @apiName DeleteMovies
 * @apiGroup Movies
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Movies not found.
 */
router.delete('/:id',
  destroy)

export default router
