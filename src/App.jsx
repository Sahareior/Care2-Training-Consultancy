import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/layouts/layout";
import MainPageL from "./components/layouts/MainPageL";
import ViewMore from './components/WebBody/ViewMore/ViewMore';
import Terms from './components/Policy/Terms';
import Privacy from './components/Policy/Privacy';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPageL />} />
                    <Route path="more" element={<ViewMore />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="privacy" element={<Privacy />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
