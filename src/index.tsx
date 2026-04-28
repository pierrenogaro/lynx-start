import '@lynx-js/preact-devtools'
import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'

import './index.css'
import AddNiceScrollBar from './AddNiceScrollbar/index.js'

root.render(<AddNiceScrollBar />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
