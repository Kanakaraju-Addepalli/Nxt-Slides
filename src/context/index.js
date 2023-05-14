import React from 'react'

const Context = React.createContext({
  initialList: [],
  activeIndex: 0,
  addNewItem: () => {},
  changeActiveTab: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default Context
