import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Users from './components/Users';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import Menu from './components/Menu';
import NavigationMenu from './components/NavigationMenu';

function App() {
  return (
    <BrowserRouter>
      <NavigationMenu />
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>}>
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/menu" element={<PrivateRoute><Menu /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
        <Route path="/users/:id" element={<PrivateRoute><UserProfile /></PrivateRoute>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
