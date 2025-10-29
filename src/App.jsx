import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Oferecemos from "./pages/Oferecemos";
import FaleConosco from "./pages/faleConosco";
import Acesso from "./pages/Acesso";
import CadastroAdmin from "./pages/CadastroAdmin";
import RecuperarSenha from "./pages/RecuperarSenha";
import AdminLayout from "./layouts/adminLayout";
import DashboardAdmin from "./pages/DashboardAdmin";
import AdminPerfil from "./pages/AdminPerfil";
import GestaoAlunos from "./pages/GestaoAlunos";
import Header from "./components/Header";
import Footer from "./components/Footer";

import LoginAdmin from "./pages/LoginAdmin";
import LoginAluno from "./pages/LoginAluno";
import LoginMotorista from "./pages/LoginMotorista";


function PublicLayout({ children }) {
  const location = useLocation();
  const semHeaderFooter = [
    "/acesso",
    "/login-admin",
    "/login-aluno",
    "/login-motorista",
  ];
  const mostrarHeaderFooter = !semHeaderFooter.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {mostrarHeaderFooter && <Header />}
      <main className="grow">{children}</main>
      {mostrarHeaderFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/sobre"
          element={
            <PublicLayout>
              <Sobre />
            </PublicLayout>
          }
        />
        <Route
          path="/oferecemos"
          element={
            <PublicLayout>
              <Oferecemos />
            </PublicLayout>
          }
        />
        <Route
          path="/fale-conosco"
          element={
            <PublicLayout>
              <FaleConosco />
            </PublicLayout>
          }
        />
        <Route
          path="/acesso"
          element={
            <PublicLayout>
              <Acesso />
            </PublicLayout>
          }
        />
        <Route
          path="/cadastro-admin"
          element={
            <PublicLayout>
              <CadastroAdmin />
            </PublicLayout>
          }
        />
        <Route
          path="/recuperar-senha"
          element={
            <PublicLayout>
              <RecuperarSenha />
            </PublicLayout>
          }
        />

        
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-aluno" element={<LoginAluno />} />
        <Route path="/login-motorista" element={<LoginMotorista />} />

      
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardAdmin />} />
          <Route path="perfil" element={<AdminPerfil />} />
          <Route path="gestao-alunos" element={<GestaoAlunos />} />
        </Route>
      </Routes>
    </Router>
  );
}