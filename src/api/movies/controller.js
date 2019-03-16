import { success, notFound } from '../../services/response/'
import { Movies } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Movies.create(body)
    .then((movies) => movies.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Movies.count(query)
    .then(count => Movies.find(query, select, cursor)
      .then((movies) => ({
        count,
        rows: movies.map((movies) => movies.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Movies.findById(params.id)
    .then(notFound(res))
    .then((movies) => movies ? movies.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Movies.findById(params.id)
    .then(notFound(res))
    .then((movies) => movies ? Object.assign(movies, body).save() : null)
    .then((movies) => movies ? movies.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Movies.findById(params.id)
    .then(notFound(res))
    .then((movies) => movies ? movies.remove() : null)
    .then(success(res, 204))
    .catch(next)
