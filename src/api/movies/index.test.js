import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Movies } from '.'

const app = () => express(apiRoot, routes)

let movies

beforeEach(async () => {
  movies = await Movies.create({})
})

test('POST /movies 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ Title: 'test', Year: 'test', Rated: 'test', Released: 'test', Runtime: 'test', Genre: 'test', Director: 'test', Writer: 'test', Actors: 'test', Plot: 'test', Language: 'test', Country: 'test', Awards: 'test', Poster: 'test', Ratings: 'test', Metascore: 'test', imdbRating: 'test', imdbVotes: 'test', imdbID: 'test', Type: 'test', DVD: 'test', BoxOffice: 'test', Production: 'test', Website: 'test', Response: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.Title).toEqual('test')
  expect(body.Year).toEqual('test')
  expect(body.Rated).toEqual('test')
  expect(body.Released).toEqual('test')
  expect(body.Runtime).toEqual('test')
  expect(body.Genre).toEqual('test')
  expect(body.Director).toEqual('test')
  expect(body.Writer).toEqual('test')
  expect(body.Actors).toEqual('test')
  expect(body.Plot).toEqual('test')
  expect(body.Language).toEqual('test')
  expect(body.Country).toEqual('test')
  expect(body.Awards).toEqual('test')
  expect(body.Poster).toEqual('test')
  expect(body.Ratings).toEqual('test')
  expect(body.Metascore).toEqual('test')
  expect(body.imdbRating).toEqual('test')
  expect(body.imdbVotes).toEqual('test')
  expect(body.imdbID).toEqual('test')
  expect(body.Type).toEqual('test')
  expect(body.DVD).toEqual('test')
  expect(body.BoxOffice).toEqual('test')
  expect(body.Production).toEqual('test')
  expect(body.Website).toEqual('test')
  expect(body.Response).toEqual('test')
})

test('GET /movies 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /movies/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${movies.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(movies.id)
})

test('GET /movies/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /movies/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${movies.id}`)
    .send({ Title: 'test', Year: 'test', Rated: 'test', Released: 'test', Runtime: 'test', Genre: 'test', Director: 'test', Writer: 'test', Actors: 'test', Plot: 'test', Language: 'test', Country: 'test', Awards: 'test', Poster: 'test', Ratings: 'test', Metascore: 'test', imdbRating: 'test', imdbVotes: 'test', imdbID: 'test', Type: 'test', DVD: 'test', BoxOffice: 'test', Production: 'test', Website: 'test', Response: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(movies.id)
  expect(body.Title).toEqual('test')
  expect(body.Year).toEqual('test')
  expect(body.Rated).toEqual('test')
  expect(body.Released).toEqual('test')
  expect(body.Runtime).toEqual('test')
  expect(body.Genre).toEqual('test')
  expect(body.Director).toEqual('test')
  expect(body.Writer).toEqual('test')
  expect(body.Actors).toEqual('test')
  expect(body.Plot).toEqual('test')
  expect(body.Language).toEqual('test')
  expect(body.Country).toEqual('test')
  expect(body.Awards).toEqual('test')
  expect(body.Poster).toEqual('test')
  expect(body.Ratings).toEqual('test')
  expect(body.Metascore).toEqual('test')
  expect(body.imdbRating).toEqual('test')
  expect(body.imdbVotes).toEqual('test')
  expect(body.imdbID).toEqual('test')
  expect(body.Type).toEqual('test')
  expect(body.DVD).toEqual('test')
  expect(body.BoxOffice).toEqual('test')
  expect(body.Production).toEqual('test')
  expect(body.Website).toEqual('test')
  expect(body.Response).toEqual('test')
})

test('PUT /movies/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ Title: 'test', Year: 'test', Rated: 'test', Released: 'test', Runtime: 'test', Genre: 'test', Director: 'test', Writer: 'test', Actors: 'test', Plot: 'test', Language: 'test', Country: 'test', Awards: 'test', Poster: 'test', Ratings: 'test', Metascore: 'test', imdbRating: 'test', imdbVotes: 'test', imdbID: 'test', Type: 'test', DVD: 'test', BoxOffice: 'test', Production: 'test', Website: 'test', Response: 'test' })
  expect(status).toBe(404)
})

test('DELETE /movies/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${movies.id}`)
  expect(status).toBe(204)
})

test('DELETE /movies/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
