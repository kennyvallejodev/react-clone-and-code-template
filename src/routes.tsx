import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageNotFound } from './pages/notFound';
import { HomePage } from './pages/home';

export function RoutesHandler() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
