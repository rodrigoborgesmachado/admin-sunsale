import './AdminSidebar.css'; // Import the corresponding CSS file
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../services/redux/authSlice';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import DashBoardIcon from '../../icons/DashBoardIcon';
import LogoffIcon from '../../icons/LogoffIcon';
import { useLocation } from 'react-router-dom';
// import LogoIcon from '../../icons/LogoIcon';
import ReportIcon from '../../icons/ReportIcon';
import CreditCardIcon from '../../icons/CreditCardIcon';
import InstallerIcon from '../../icons/InstallerIcon';
import EmailIcon from '../../icons/EmailIcon';
import BankIcon from '../../icons/BankIcon';
import EnterpriseDevIcon from '../../icons/EnterpriseDevIcon';
import TargetIcon from '../../icons/TargetIcon';
import StudentIcon from '../../icons/StudentIcon';
import PeopleIcon from '../../icons/PeopleIcon';
import CalculatorIcon from '../../icons/CalculatorIcon';
import PokemonIcon from '../../icons/PokemonIcon';
import FoodIcon from '../../icons/FoodIcon';
import ReplyBubbleIcon from '../../icons/ReplyBubbleIcon';
import QuestionIcon from '../../icons/QuestionIcon';
import EvaluationIcon from '../../icons/EvaluationIcon';
import MountainIcon from '../../icons/MountainIcon';
import JsonIcon from '../../icons/JsonIcon ';
import CommentsQuestionsIcon from '../../icons/CommentsQuestionsIcon';
import BiomeImageIcon from '../../icons/BiomeImageIcon';
import FlowerIcon from '../../icons/FlowerIcon';
import ProIcon from '../../icons/ProIcon';
import LoggerIcon from '../../icons/LoggerIcon';
import WordIcon from '../../icons/WordIcon';
import JusticeScaleIcon from '../../icons/JusticeScaleIcon';
import LeafIcon from '../../icons/LeafIcon';
import StampIcon from '../../icons/StampIcon';
import FlagCheckIcon from '../../icons/FlagCheckIcon';
import LightbulbIcon from '../../icons/LightbulbIcon';
import CheckIcon from '../../icons/CheckIcon';
import KeyIcon from '../../icons/KeyIcon';
import LockIcon from '../../icons/LockIcon';
import UserChatIcon from '../../icons/UserChatIcon';
import SpellingIcon from '../../icons/SpellingIcon';
import ExamPaperIcon from '../../icons/ExamPaperIcon';
import CarIcon from '../../icons/CarIcon';
import VerbIcon from '../../icons/VerbIcon';
import LightningIcon from '../../icons/LightningIcon';
import TomatoesIcon from '../../icons/PumpkinIcon';

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
        {/* <LogoIcon size={80} color='#FFF'/> */}
        
        
        <p>
          SunSale Admin
        </p>
      </div>
      <nav className="sidebar__menu">
        {isAdmin && <a href="/" className={pathSegments.length === 0 || (pathSegments[0] === 'dashboard') || pathSegments[1] === 'dashboard' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><DashBoardIcon color='white'/>Dashboard</a>}
        {isAdmin && <a href="/acoes" className={pathSegments[0] === 'acoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><ReportIcon color='white'/>Ações dos Usuários</a>}
        {isAdmin && <a href="/alimentos" className={pathSegments[0] === 'alimentos' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><FoodIcon color='white'/>Alimentos</a>}
        {isAdmin && <a href="/anexosresposta" className={pathSegments[0] === 'anexoresposta' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><ReplyBubbleIcon color='white'/>Anexo Resposta</a>}
        {isAdmin && <a href="/anexosquestoes" className={pathSegments[0] === 'anexosquestoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><QuestionIcon color='white'/>Anexo Questões</a>}
        {isAdmin && <a href="/avaliacao" className={pathSegments[0] === 'avaliacao' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><EvaluationIcon color='white'/>Avaliação</a>}
        {isAdmin && <a href="/biomas" className={pathSegments[0] === 'biomas' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><MountainIcon color='white'/>Biomas</a>}
        {isAdmin && <a href="/cartoes" className={pathSegments[0] === 'cartoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><CreditCardIcon color='white'/>Cartões</a>}
        {isAdmin && <a href="/categoriaalimentos" className={pathSegments[0] === 'categoriaalimentos' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><TomatoesIcon color='white'/>Categoria Alimentos</a>}
        {isAdmin && <a href="/comentariosquestoes" className={pathSegments[0] === 'comentariosquestoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><CommentsQuestionsIcon color='white'/>Comentarios Questões</a>}
        {isAdmin && <a href="/contas" className={pathSegments[0] === 'contas' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BankIcon color='white'/>Contas Bancárias</a>}
        {isAdmin && <a href="/crudformsinstall" className={pathSegments[0] === 'crudformsinstall' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><InstallerIcon color='white'/>Crudforms Install</a>}
        {isAdmin && <a href="/email" className={pathSegments[0] === 'email' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><EmailIcon color='white'/>E-mail</a>}
        {isAdmin && <a href="/empresas" className={pathSegments[0] === 'empresas' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><EnterpriseDevIcon color='white'/>Empresas</a>}
        {isAdmin && <a href="/imgbioma" className={pathSegments[0] === 'imgbioma' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><BiomeImageIcon color='white'/>Img Bioma</a>}
        {isAdmin && <a href="/imgplanta" className={pathSegments[0] === 'imgplanta' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><FlowerIcon color='white'/>Img Planta</a>}
        {isAdmin && <a href="/licencassunsalepro" className={pathSegments[0] === 'licencassunsalepro' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><ProIcon color='white'/>SunSale Pro</a>}
        {isAdmin && <a href="/logger" className={pathSegments[0] === 'logger' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><LoggerIcon color='white'/>Logger</a>}
        {isAdmin && <a href="/metas" className={pathSegments[0] === 'metas' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><TargetIcon color='white'/>Metas</a>}
        {isAdmin && <a href="/notassisu" className={pathSegments[0] === 'notassisu' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><StudentIcon color='white'/>Notas Sisu</a>}
        {isAdmin && <a href="/palavras" className={pathSegments[0] === 'palavras' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><WordIcon color='white'/>Palavras</a>}
        {isAdmin && <a href="/pesos" className={pathSegments[0] === 'pesos' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><JusticeScaleIcon color='white'/>Pesos</a>}
        {isAdmin && <a href="/pessoas" className={pathSegments[0] === 'pessoas' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><PeopleIcon color='white'/>Pessoas</a>}
        {isAdmin && <a href="/plantas" className={pathSegments[0] === 'plantas' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><LeafIcon color='white'/>Plantas</a>}
        {isAdmin && <a href="/postagem" className={pathSegments[0] === 'postagem' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><StampIcon color='white'/>Postagem</a>}
        {isAdmin && <a href="/prova" className={pathSegments[0] === 'prova' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><FlagCheckIcon color='white'/>Prova</a>}
        {isAdmin && <a href="/questoes" className={pathSegments[0] === 'questoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><LightbulbIcon color='white'/>Questões</a>}
        {isAdmin && <a href="/questoesavaliacao" className={pathSegments[0] === 'questoesavaliacao' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><CheckIcon color='white'/>Questões Avaliação</a>}
        {isAdmin && <a href="/recuperasenha" className={pathSegments[0] === 'recuperasenha' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><KeyIcon color='white'/>Rec. Senha</a>}
        {isAdmin && <a href="/recuperasenhacrudforms" className={pathSegments[0] === 'recuperasenhacrudforms' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><LockIcon color='white'/>Rec. Senha Crudf</a>}
        {isAdmin && <a href="/respostasavaliacoes" className={pathSegments[0] === 'respostasavaliacoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><ReplyBubbleIcon color='white'/>Respostas Avaliações</a>}
        {isAdmin && <a href="/respostasquestoes" className={pathSegments[0] === 'respostasquestoes' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><QuestionIcon color='white'/>Respostas Questões</a>}
        {isAdmin && <a href="/respostasusuarios" className={pathSegments[0] === 'respostasusuarios' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><UserChatIcon color='white'/>Respostas Usuários</a>}
        {isAdmin && <a href="/resultadossoletrando" className={pathSegments[0] === 'resultadossoletrando' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><SpellingIcon color='white'/>Resultados Soletrando</a>}
        {isAdmin && <a href="/tabuadadivertida" className={pathSegments[0] === 'tabuadadivertida' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><CalculatorIcon color='white'/>Tabuada Divertida</a>}
        {isAdmin && <a href="/savedResultswpp" className={pathSegments[0] === 'savedResultswpp' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><JsonIcon color='white'/>Saved Results Wpp</a>}
        {isAdmin && <a href="/simulados" className={pathSegments[0] === 'simulados' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><ExamPaperIcon color='white'/>Simulados</a>}
        {isAdmin && <a href="/tipoperfil" className={pathSegments[0] === 'tipoperfil' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><PeopleIcon color='white'/>Tipo Perfil</a>}
        {isAdmin && <a href="/tipopostagem" className={pathSegments[0] === 'tipopostagem' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><EmailIcon color='white'/>Tipo Postagem</a>}
        {isAdmin && <a href="/tipoprova" className={pathSegments[0] === 'tipoprova' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><ExamPaperIcon color='white'/>Tipo Prova</a>}
        {isAdmin && <a href="/tipoprovaassociado" className={pathSegments[0] === 'tipoprovaassociado' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><ExamPaperIcon color='white'/>Tipo Prova Assoc.</a>}
        {isAdmin && <a href="/usuarios" className={pathSegments[0] === 'usuarios' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><PeopleIcon color='white'/>Usuários</a>}
        {isAdmin && <a href="/usuarioscrudforms" className={pathSegments[0] === 'usuarioscrudforms' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><PeopleIcon color='white'/>Usuarios Crudforms</a>}
        {isAdmin && <a href="/veiculosfordev" className={pathSegments[0] === 'veiculosfordev' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><CarIcon color='white'/>Veiculos For Dev</a>}
        {isAdmin && <a href="/verboconjugado" className={pathSegments[0] === 'verboconjugado' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><VerbIcon color='white'/>Verbo Conjugado</a>}
        {isAdmin && <a href="/verbos" className={pathSegments[0] === 'verbos' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><LightningIcon color='white'/>Verbos</a>}
        {isAdmin && <a href="/verificacaousuario" className={pathSegments[0] === 'verificacaousuario' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><UserChatIcon color='white'/>Verificação Usuário</a>}
        {isAdmin && <a href="/pokemon" className={pathSegments[0] === 'pokemon' ? "sidebar__menu-item sidebar__menu-item-selected" : "sidebar__menu-item"}><PokemonIcon color='white'/>Pokémon</a>}
        </nav>
      <button className="sidebar__logoff" onClick={handleLogout}>
        Sair <LogoffIcon color='white'/>
      </button>
    </aside>
  );
};

export default AdminSidebar;
