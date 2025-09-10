import './AdminSidebar.css'; // Import the corresponding CSS file
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../services/redux/authSlice';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import DashBoardIcon from '../../icons/DashBoardIcon';
import LogoffIcon from '../../icons/LogoffIcon';
import { useLocation } from 'react-router-dom';
import LogoIcon from '../../icons/LogoIcon';
import BasketIcon from '../../icons/BasketIcon';
import ReportIcon from '../../icons/ReportIcon';
import CreditCardIcon from '../../icons/CreditCardIcon';
import BankIcon from '../../icons/BankIcon';

const AdminSidebar = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    toast.success("Até breve!");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__logo flex-column center-component gap-default" >
        <LogoIcon size={80} color='#FFF'/>
        <p>
          SunSale Admin
        </p>
      </div>
      <nav className="sidebar__menu">
        {isAdmin && <a href="/" className={pathSegments.length === 0 || (pathSegments[0] === 'dashboard') || pathSegments[1] === 'dashboard' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><DashBoardIcon color='white'/>Dashboard</a>}
        {isAdmin && <a href="/acoes" className={pathSegments[0] === 'acoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><ReportIcon color='white'/>Ações dos Usuários</a>}
        {isAdmin && <a href="/Alimentos" className={pathSegments[0] === 'Alimentos' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Alimentos</a>}
        {isAdmin && <a href="/Anexoresposta" className={pathSegments[0] === 'Anexoresposta' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Anexoresposta</a>}
        {isAdmin && <a href="/Anexosquestoes" className={pathSegments[0] === 'Anexosquestoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Anexosquestoes</a>}
        {isAdmin && <a href="/Avaliacao" className={pathSegments[0] === 'Avaliacao' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Avaliacao</a>}
        {isAdmin && <a href="/Biomas" className={pathSegments[0] === 'Biomas' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Biomas</a>}
        {isAdmin && <a href="/cartoes" className={pathSegments[0] === 'cartoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><CreditCardIcon color='white'/>Cartões</a>}
        {isAdmin && <a href="/Categoriaalimentos" className={pathSegments[0] === 'Categoriaalimentos' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Categoriaalimentos</a>}
        {isAdmin && <a href="/ComentariosQuestoes" className={pathSegments[0] === 'ComentariosQuestoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>ComentariosQuestoes</a>}
        {isAdmin && <a href="/contas" className={pathSegments[0] === 'contas' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BankIcon color='white'/>Contas Bancárias</a>}
        {isAdmin && <a href="/Crudformsinstalador" className={pathSegments[0] === 'Crudformsinstalador' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Crudformsinstalador</a>}
        {isAdmin && <a href="/Email" className={pathSegments[0] === 'Email' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Email</a>}
        {isAdmin && <a href="/Empresafordev" className={pathSegments[0] === 'Empresafordev' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Empresafordev</a>}
        {isAdmin && <a href="/Imagensbioma" className={pathSegments[0] === 'Imagensbioma' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Imagensbioma</a>}
        {isAdmin && <a href="/Imagensplanta" className={pathSegments[0] === 'Imagensplanta' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Imagensplanta</a>}
        {isAdmin && <a href="/LicencasSunSalePro" className={pathSegments[0] === 'LicencasSunSalePro' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>LicencasSunSalePro</a>}
        {isAdmin && <a href="/Logger" className={pathSegments[0] === 'Logger' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Logger</a>}
        {isAdmin && <a href="/Metas" className={pathSegments[0] === 'Metas' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Metas</a>}
        {isAdmin && <a href="/Notascortesisu" className={pathSegments[0] === 'Notascortesisu' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Notascortesisu</a>}
        {isAdmin && <a href="/Palavras" className={pathSegments[0] === 'Palavras' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Palavras</a>}
        {isAdmin && <a href="/Pesos" className={pathSegments[0] === 'Pesos' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Pesos</a>}
        {isAdmin && <a href="/Pessoasfordev" className={pathSegments[0] === 'Pessoasfordev' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Pessoasfordev</a>}
        {isAdmin && <a href="/Plantas" className={pathSegments[0] === 'Plantas' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Plantas</a>}
        {isAdmin && <a href="/Postagem" className={pathSegments[0] === 'Postagem' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Postagem</a>}
        {isAdmin && <a href="/Prova" className={pathSegments[0] === 'Prova' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Prova</a>}
        {isAdmin && <a href="/Questoes" className={pathSegments[0] === 'Questoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Questoes</a>}
        {isAdmin && <a href="/Questoesavaliacao" className={pathSegments[0] === 'Questoesavaliacao' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Questoesavaliacao</a>}
        {isAdmin && <a href="/Recuperasenha" className={pathSegments[0] === 'Recuperasenha' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Recuperasenha</a>}
        {isAdmin && <a href="/Recuperasenhacrudforms" className={pathSegments[0] === 'Recuperasenhacrudforms' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Recuperasenhacrudforms</a>}
        {isAdmin && <a href="/Respostasavaliacoes" className={pathSegments[0] === 'Respostasavaliacoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Respostasavaliacoes</a>}
        {isAdmin && <a href="/Respostasquestoes" className={pathSegments[0] === 'Respostasquestoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Respostasquestoes</a>}
        {isAdmin && <a href="/Respostasusuarios" className={pathSegments[0] === 'Respostasusuarios' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Respostasusuarios</a>}
        {isAdmin && <a href="/Resultadossoletrando" className={pathSegments[0] === 'Resultadossoletrando' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Resultadossoletrando</a>}
        {isAdmin && <a href="/Resultadostabuadadivertida" className={pathSegments[0] === 'Resultadostabuadadivertida' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Resultadostabuadadivertida</a>}
        {isAdmin && <a href="/SavedResultsWpp" className={pathSegments[0] === 'SavedResultsWpp' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>SavedResultsWpp</a>}
        {isAdmin && <a href="/Simulados" className={pathSegments[0] === 'Simulados' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Simulados</a>}
        {isAdmin && <a href="/Tipoperfil" className={pathSegments[0] === 'Tipoperfil' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Tipoperfil</a>}
        {isAdmin && <a href="/TipoPostagem" className={pathSegments[0] === 'TipoPostagem' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>TipoPostagem</a>}
        {isAdmin && <a href="/TipoProva" className={pathSegments[0] === 'TipoProva' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>TipoProva</a>}
        {isAdmin && <a href="/TipoProvaAssociado" className={pathSegments[0] === 'TipoProvaAssociado' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>TipoProvaAssociado</a>}
        {isAdmin && <a href="/Usuarios" className={pathSegments[0] === 'Usuarios' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Usuarios</a>}
        {isAdmin && <a href="/Usuarioscrudforms" className={pathSegments[0] === 'Usuarioscrudforms' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Usuarioscrudforms</a>}
        {isAdmin && <a href="/Veiculosfordev" className={pathSegments[0] === 'Veiculosfordev' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Veiculosfordev</a>}
        {isAdmin && <a href="/Verboconjugado" className={pathSegments[0] === 'Verboconjugado' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Verboconjugado</a>}
        {isAdmin && <a href="/Verbos" className={pathSegments[0] === 'Verbos' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>Verbos</a>}
        {isAdmin && <a href="/VerificacaoUsuario" className={pathSegments[0] === 'VerificacaoUsuario' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>VerificacaoUsuario</a>}
        {isAdmin && <a href="/WhosThatPokemonResult" className={pathSegments[0] === 'WhosThatPokemonResult' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BasketIcon color='white'/>WhosThatPokemonResult</a>}
        </nav>
      <button className="sidebar__logoff" onClick={handleLogout}>
        Sair <LogoffIcon color='white'/>
      </button>
    </aside>
  );
};

export default AdminSidebar;
