import {Component} from 'react'
import Context from '../../context'

import './index.css'

class SlideItem extends Component {
  render() {
    const {details, index} = this.props
    const {heading, description} = details

    return (
      <Context.Consumer>
        {value => {
          const {changeActiveTab, activeIndex} = value
          const isActive = activeIndex === index - 1
          const activeStyling = isActive ? 'active-styling' : ''

          const onClickSlideTab = () => {
            changeActiveTab(index - 1)
          }
          return (
            <li
              className={`slide-list-item ${activeStyling}`}
              onClick={onClickSlideTab}
              testid={`slideTab${index}`}
            >
              <p className="slide-number">{index}</p>
              <div className="slide-tab">
                <h1 className="tab-heading">{heading}</h1>
                <p className="tab-description">{description}</p>
              </div>
            </li>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default SlideItem
