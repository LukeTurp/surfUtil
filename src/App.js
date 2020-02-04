import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import LandingPage from './components/views/landingPage';
import surfStore from './configs/redux/surfStore';

const App = _ => (
    <Provider store={surfStore}>
        <BrowserRouter>
            <Container>
                <LandingPage />
            </Container>
        </BrowserRouter>
    </Provider>
  );

export default App;
