import { Model } from "../../domain"
import { MovieEntity } from "../Models/MovieEntity"

export class MovieListValueObject extends Model {
    static create({ movieEntityList }) {
      return new MovieListValueObject({
        movieEntityList: movieEntityList.map((entity) => {
          const { id, poster_path, title, rating, released, description } = entity
          return MovieEntity.create({
            id,
            poster_path,
            title,
            rating,
            released,
            description
          })
        })
      })
    }
  
    constructor({ movieEntityList }) {
      super()
      this._movieEntityList = movieEntityList
    }
  
    movieEntityList() {
      return this._movieEntityList
    }
  
    toJSON() {
      return {
        movieEntityList: this.movieEntityList().map((entity) => entity.toJSON())
      }
    }
  }
