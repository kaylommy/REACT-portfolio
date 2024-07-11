import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div>
            <Header>
                <Nav />
            </Header>
            <Outlet />
            <Footer />
        </div>
    )
}

export default App;