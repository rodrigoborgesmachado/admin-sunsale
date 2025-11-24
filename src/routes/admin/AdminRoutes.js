import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from '../../layouts/admin/AdminLayout';
import DashboardPage from '../../pages/admin/DashBoard/DashboardPage';
import AcaousuarioListPage from '../../pages/admin/AcaousuarioListPage/AcaousuarioListPage';
import AlimentosListPage from '../../pages/admin/AlimentosListPage/AlimentosListPage';
import AnexorespostaListPage from '../../pages/admin/AnexorespostaListPage/AnexorespostaListPage';
import AnexosquestoesListPage from '../../pages/admin/AnexosquestoesListPage/AnexosquestoesListPage';
import AvaliacaoListPage from '../../pages/admin/AvaliacaoListPage/AvaliacaoListPage';
import BiomasListPage from '../../pages/admin/BiomasListPage/BiomasListPage';
import CartaocreditodevtoolsListPage from '../../pages/admin/CartaocreditodevtoolsListPage/CartaocreditodevtoolsListPage';
import CategoriaalimentosListPage from '../../pages/admin/CategoriaalimentosListPage/CategoriaalimentosListPage';
import ComentariosquestoesListPage from '../../pages/admin/ComentariosquestoesListPage/ComentariosquestoesListPage';
import ContabancofordevListPage from '../../pages/admin/ContabancofordevListPage/ContabancofordevListPage';
import CrudformsinstaladorListPage from '../../pages/admin/CrudformsinstaladorListPage/CrudformsinstaladorListPage';
import EmailListPage from '../../pages/admin/EmailListPage/EmailListPage';
import EmpresafordevListPage from '../../pages/admin/EmpresafordevListPage/EmpresafordevListPage';
import ImagensbiomaListPage from '../../pages/admin/ImagensbiomaListPage/ImagensbiomaListPage';
import ImagensplantaListPage from '../../pages/admin/ImagensplantaListPage/ImagensplantaListPage';
import LicencassunsaleproListPage from '../../pages/admin/LicencassunsaleproListPage/LicencassunsaleproListPage';
import LoggerListPage from '../../pages/admin/LoggerListPage/LoggerListPage';
import MetasListPage from '../../pages/admin/MetasListPage/MetasListPage';
import NotascortesisuListPage from '../../pages/admin/NotascortesisuListPage/NotascortesisuListPage';
import PalavrasListPage from '../../pages/admin/PalavrasListPage/PalavrasListPage';
import PesosListPage from '../../pages/admin/PesosListPage/PesosListPage';
import PessoasfordevListPage from '../../pages/admin/PessoasfordevListPage/PessoasfordevListPage';
import PlantasListPage from '../../pages/admin/PlantasListPage/PlantasListPage';
import PostagemListPage from '../../pages/admin/PostagemListPage/PostagemListPage';
import ProvaListPage from '../../pages/admin/ProvaListPage/ProvaListPage';
import QuestoesListPage from '../../pages/admin/QuestoesListPage/QuestoesListPage';
import QuestoesavaliacaoListPage from '../../pages/admin/QuestoesavaliacaoListPage/QuestoesavaliacaoListPage';
import RecuperasenhaListPage from '../../pages/admin/RecuperasenhaListPage/RecuperasenhaListPage';
import RecuperasenhacrudformsListPage from '../../pages/admin/RecuperasenhacrudformsListPage/RecuperasenhacrudformsListPage';
import RespostasavaliacoesListPage from '../../pages/admin/RespostasavaliacoesListPage/RespostasavaliacoesListPage';
import RespostasquestoesListPage from '../../pages/admin/RespostasquestoesListPage/RespostasquestoesListPage';
import RespostasusuariosListPage from '../../pages/admin/RespostasusuariosListPage/RespostasusuariosListPage';
import ResultadossoletrandoListPage from '../../pages/admin/ResultadossoletrandoListPage/ResultadossoletrandoListPage';
import ResultadostabuadadivertidaListPage from '../../pages/admin/ResultadostabuadadivertidaListPage/ResultadostabuadadivertidaListPage';
import SavedresultswppListPage from '../../pages/admin/SavedresultswppListPage/SavedresultswppListPage';
import SimuladosListPage from '../../pages/admin/SimuladosListPage/SimuladosListPage';
import TipoperfilListPage from '../../pages/admin/TipoperfilListPage/TipoperfilListPage';
import TipopostagemListPage from '../../pages/admin/TipopostagemListPage/TipopostagemListPage';
import TipoprovaListPage from '../../pages/admin/TipoprovaListPage/TipoprovaListPage';
import TipoprovaassociadoListPage from '../../pages/admin/TipoprovaassociadoListPage/TipoprovaassociadoListPage';
import UsuariosListPage from '../../pages/admin/UsuariosListPage/UsuariosListPage';
import UsuarioscrudformsListPage from '../../pages/admin/UsuarioscrudformsListPage/UsuarioscrudformsListPage';
import VeiculosfordevListPage from '../../pages/admin/VeiculosfordevListPage/VeiculosfordevListPage';
import VerboconjugadoListPage from '../../pages/admin/VerboconjugadoListPage/VerboconjugadoListPage';
import VerbosListPage from '../../pages/admin/VerbosListPage/VerbosListPage';
import VerificacaousuarioListPage from '../../pages/admin/VerificacaousuarioListPage/VerificacaousuarioListPage';
import WhosthatpokemonresultListPage from '../../pages/admin/WhosthatpokemonresultListPage/WhosthatpokemonresultListPage';

const AdminRoutes = () => (
  <AdminLayout>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/acoes" element={<AcaousuarioListPage />} />
      <Route path="/alimentos" element={<AlimentosListPage />} />
      <Route path="/anexosresposta" element={<AnexorespostaListPage />} />
      <Route path="/anexosquestoes" element={<AnexosquestoesListPage />} />
      <Route path="/avaliacao" element={<AvaliacaoListPage />} />
      <Route path="/biomas" element={<BiomasListPage />} />
      <Route path="/cartoes" element={<CartaocreditodevtoolsListPage />} />
      <Route path="/cartoes/:id" element={<CartaocreditodevtoolsListPage />} />
      <Route path="/categoriaalimentos" element={<CategoriaalimentosListPage />} />
      <Route path="/comentariosquestoes" element={<ComentariosquestoesListPage />} />
      <Route path="/contas" element={<ContabancofordevListPage />} />
      <Route path="/crudformsinstall" element={<CrudformsinstaladorListPage />} />
      <Route path="/email" element={<EmailListPage />} />
      <Route path="/empresas" element={<EmpresafordevListPage />} />
      <Route path="/imgbioma" element={<ImagensbiomaListPage />} />
      <Route path="/imgplanta" element={<ImagensplantaListPage />} />
      <Route path="/licencassunsalepro" element={<LicencassunsaleproListPage />} />
      <Route path="/logger" element={<LoggerListPage />} />
      <Route path="/metas" element={<MetasListPage />} />
      <Route path="/notassisu" element={<NotascortesisuListPage />} />
      <Route path="/palavras" element={<PalavrasListPage />} />
      <Route path="/pesos" element={<PesosListPage />} />
      <Route path="/pessoas" element={<PessoasfordevListPage />} />
      <Route path="/plantas" element={<PlantasListPage />} />
      <Route path="/postagem" element={<PostagemListPage />} />
      <Route path="/prova" element={<ProvaListPage />} />
      <Route path="/questoes" element={<QuestoesListPage />} />
      <Route path="/questoesavaliacao" element={<QuestoesavaliacaoListPage />} />
      <Route path="/recuperasenha" element={<RecuperasenhaListPage />} />
      <Route path="/recuperasenhacrudforms" element={<RecuperasenhacrudformsListPage />} />
      <Route path="/respostasavaliacoes" element={<RespostasavaliacoesListPage />} />
      <Route path="/respostasquestoes" element={<RespostasquestoesListPage />} />
      <Route path="/respostasusuarios" element={<RespostasusuariosListPage />} />
      <Route path="/resultadossoletrando" element={<ResultadossoletrandoListPage />} />
      <Route path="/tabuadadivertida" element={<ResultadostabuadadivertidaListPage />} />
      <Route path="/savedresultswpp" element={<SavedresultswppListPage />} />
      <Route path="/simulados" element={<SimuladosListPage />} />
      <Route path="/tipoperfil" element={<TipoperfilListPage />} />
      <Route path="/tipopostagem" element={<TipopostagemListPage />} />
      <Route path="/tipoprova" element={<TipoprovaListPage />} />
      <Route path="/tipoprovaassociado" element={<TipoprovaassociadoListPage />} />
      <Route path="/usuarios" element={<UsuariosListPage />} />
      <Route path="/usuarioscrudforms" element={<UsuarioscrudformsListPage />} />
      <Route path="/veiculosfordev" element={<VeiculosfordevListPage />} />
      <Route path="/verboconjugado" element={<VerboconjugadoListPage />} />
      <Route path="/verbos" element={<VerbosListPage />} />
      <Route path="/verificacaousuario" element={<VerificacaousuarioListPage />} />
      <Route path="/pokemon" element={<WhosthatpokemonresultListPage />} />
      <Route path="/*" element={<DashboardPage />} />
      </Routes>
  </AdminLayout>
);

export default AdminRoutes;

