import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/appContext";
import { Dashboard, Landing, Error, Register } from "./pages";
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
