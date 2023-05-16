// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionList = []
  const comedyList = []

  moviesList.map(eachItem =>
    eachItem.categoryId === 'ACTION'
      ? actionList.push(eachItem)
      : comedyList.push(eachItem),
  )
  console.log(actionList)

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="slider">
        <h1>Action Movies</h1>
        <MovieSlider movieDetails={actionList} />
      </div>
      <div className="slider">
        <h1>Comedy Movies</h1>
        <MovieSlider movieDetails={comedyList} />
      </div>
    </div>
  )
}

export default PrimeVideo
