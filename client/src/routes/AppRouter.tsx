import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import StudentPage from "../pages/StudentPage";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      {/* App Routes */}
      <Route path='/' element={<Layout />}>
        <Route index element={<StudentPage />} />
      </Route>

      {/* Error Route */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )  
}

export default AppRouter
