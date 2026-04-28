import '@lynx-js/preact-devtools'
import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'

import './index.css'
import LikeImageCardDemo from './LikeImageCard/index.js'

root.render(<LikeImageCardDemo />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
