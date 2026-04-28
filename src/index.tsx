import '@lynx-js/preact-devtools'
import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'

import './index.css'
import AddAutoScroll from './AddAutoScroll/index.js'

root.render(<AddAutoScroll />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
