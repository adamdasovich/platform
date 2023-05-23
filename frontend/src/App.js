import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route exact path="/home" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;