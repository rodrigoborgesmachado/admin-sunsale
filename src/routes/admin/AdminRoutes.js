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
      <Route path="/Alimentos" element={<AlimentosListPage />} />
      <Route path="/Anexoresposta" element={<AnexorespostaListPage />} />
      <Route path="/Anexosquestoes" element={<AnexosquestoesListPage />} />
      <Route path="/Avaliacao" element={<AvaliacaoListPage />} />
      <Route path="/Biomas" element={<BiomasListPage />} />
      <Route path="/cartoes" element={<CartaocreditodevtoolsListPage />} />
      <Route path="/cartoes/:id" element={<CartaocreditodevtoolsListPage />} />
      <Route path="/Categoriaalimentos" element={<CategoriaalimentosListPage />} />
      <Route path="/ComentariosQuestoes" element={<ComentariosquestoesListPage />} />
      <Route path="/contas" element={<ContabancofordevListPage />} />
      <Route path="/crudformsinstall" element={<CrudformsinstaladorListPage />} />
      <Route path="/email" element={<EmailListPage />} />
      <Route path="/empresas" element={<EmpresafordevListPage />} />
      <Route path="/Imagensbioma" element={<ImagensbiomaListPage />} />
      <Route path="/Imagensplanta" element={<ImagensplantaListPage />} />
      <Route path="/LicencasSunSalePro" element={<LicencassunsaleproListPage />} />
      <Route path="/Logger" element={<LoggerListPage />} />
      <Route path="/metas" element={<MetasListPage />} />
      <Route path="/notassisu" element={<NotascortesisuListPage />} />
      <Route path="/Palavras" element={<PalavrasListPage />} />
      <Route path="/Pesos" element={<PesosListPage />} />
      <Route path="/pessoas" element={<PessoasfordevListPage />} />
      <Route path="/Plantas" element={<PlantasListPage />} />
      <Route path="/Postagem" element={<PostagemListPage />} />
      <Route path="/Prova" element={<ProvaListPage />} />
      <Route path="/Questoes" element={<QuestoesListPage />} />
      <Route path="/Questoesavaliacao" element={<QuestoesavaliacaoListPage />} />
      <Route path="/Recuperasenha" element={<RecuperasenhaListPage />} />
      <Route path="/Recuperasenhacrudforms" element={<RecuperasenhacrudformsListPage />} />
      <Route path="/Respostasavaliacoes" element={<RespostasavaliacoesListPage />} />
      <Route path="/Respostasquestoes" element={<RespostasquestoesListPage />} />
      <Route path="/Respostasusuarios" element={<RespostasusuariosListPage />} />
      <Route path="/Resultadossoletrando" element={<ResultadossoletrandoListPage />} />
      <Route path="/tabuadadivertida" element={<ResultadostabuadadivertidaListPage />} />
      <Route path="/savedResultswpp" element={<SavedresultswppListPage />} />
      <Route path="/Simulados" element={<SimuladosListPage />} />
      <Route path="/Tipoperfil" element={<TipoperfilListPage />} />
      <Route path="/TipoPostagem" element={<TipopostagemListPage />} />
      <Route path="/TipoProva" element={<TipoprovaListPage />} />
      <Route path="/TipoProvaAssociado" element={<TipoprovaassociadoListPage />} />
      <Route path="/usuarios" element={<UsuariosListPage />} />
      <Route path="/Usuarioscrudforms" element={<UsuarioscrudformsListPage />} />
      <Route path="/Veiculosfordev" element={<VeiculosfordevListPage />} />
      <Route path="/Verboconjugado" element={<VerboconjugadoListPage />} />
      <Route path="/Verbos" element={<VerbosListPage />} />
      <Route path="/VerificacaoUsuario" element={<VerificacaousuarioListPage />} />
      <Route path="/pokemon" element={<WhosthatpokemonresultListPage />} />
      <Route path="/*" element={<DashboardPage />} />
      </Routes>
  </AdminLayout>
);

export default AdminRoutes;

