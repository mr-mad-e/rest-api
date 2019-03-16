import mongoose, { Schema } from 'mongoose'

const moviesSchema = new Schema({
  Title: {
    type: String
  },
  Year: {
    type: String
  },
  Rated: {
    type: String
  },
  Released: {
    type: String
  },
  Runtime: {
    type: String
  },
  Genre: {
    type: String
  },
  Director: {
    type: String
  },
  Writer: {
    type: String
  },
  Actors: {
    type: String
  },
  Plot: {
    type: String
  },
  Language: {
    type: String
  },
  Country: {
    type: String
  },
  Awards: {
    type: String
  },
  Poster: {
    type: String
  },
  Ratings: {
    type: String
  },
  Metascore: {
    type: String
  },
  imdbRating: {
    type: String
  },
  imdbVotes: {
    type: String
  },
  imdbID: {
    type: String
  },
  Type: {
    type: String
  },
  DVD: {
    type: String
  },
  BoxOffice: {
    type: String
  },
  Production: {
    type: String
  },
  Website: {
    type: String
  },
  Response: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

moviesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      Title: this.Title,
      Year: this.Year,
      Rated: this.Rated,
      Released: this.Released,
      Runtime: this.Runtime,
      Genre: this.Genre,
      Director: this.Director,
      Writer: this.Writer,
      Actors: this.Actors,
      Plot: this.Plot,
      Language: this.Language,
      Country: this.Country,
      Awards: this.Awards,
      Poster: this.Poster,
      Ratings: this.Ratings,
      Metascore: this.Metascore,
      imdbRating: this.imdbRating,
      imdbVotes: this.imdbVotes,
      imdbID: this.imdbID,
      Type: this.Type,
      DVD: this.DVD,
      BoxOffice: this.BoxOffice,
      Production: this.Production,
      Website: this.Website,
      Response: this.Response,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Movies', moviesSchema)

export const schema = model.schema
export default model
