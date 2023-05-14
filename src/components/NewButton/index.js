import {v4} from 'uuid'

import './index.css'
import Context from '../../context'

const NewButton = () => (
  <Context.Consumer>
    {value => {
      const {addNewItem, activeIndex, changeActiveTab} = value

      const onClickAddButton = () => {
        const newItem = {
          id: v4(),
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(newItem)
        changeActiveTab(activeIndex + 1)
      }

      const onDoubleClickBtn = () => {
        console.log('Hi')
      }

      return (
        <div>
          <button
            type="button"
            className="add-new-button"
            onClick={onClickAddButton}
            onDoubleClick={onDoubleClickBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            New
          </button>
        </div>
      )
    }}
  </Context.Consumer>
)
export default NewButton
