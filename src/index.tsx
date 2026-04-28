import '@lynx-js/preact-devtools'
import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'

import './index.css'
import PictureList from './CreateGallery/index.js'

root.render(<PictureList />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
