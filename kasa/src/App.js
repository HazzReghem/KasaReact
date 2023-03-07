import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PublicRouter from './routes/publicRouter';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>

    </div>
  );
}

export default App;
