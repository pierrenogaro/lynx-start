import '@lynx-js/preact-devtools'
import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'

import './index.css'
import FirstImageCard from './FirstImageCard/index.js'

root.render(<FirstImageCard />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
