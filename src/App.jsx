import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <ScrollToTop />
        <AppRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
