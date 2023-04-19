import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  showHomeCard: 'true',
  updateHomeHomeBannerView: () => {},
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
