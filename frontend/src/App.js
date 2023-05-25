import Home from './pages/Home'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
}

export default App;
