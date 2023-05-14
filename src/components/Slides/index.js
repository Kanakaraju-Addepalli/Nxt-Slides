import {Component} from 'react'
import Slide from '../Slide'
import SlideItem from '../SlideItem'

import Context from '../../context'

import './index.css'

class Slides extends Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideItem
                    details={eachSlide}
                    key={eachSlide.id}
                    index={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}
export default Slides
