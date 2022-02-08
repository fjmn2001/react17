import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    const Home = lazy(() => import('./code-splitting/routes/Home'));
    const About = lazy(() => import('./code-splitting/routes/About'));

    return (
        <>
            <BrowserRouter>
                <Suspense fallback={ <div>Loading...</div> }>
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/about" element={ <About /> } />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
}
