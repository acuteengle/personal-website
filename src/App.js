import React from 'react';
import WebsiteView from './components/WebsiteView'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab)

const App = (props) => {
  return (
    <WebsiteView {...props} />
  );
}

export default App;
