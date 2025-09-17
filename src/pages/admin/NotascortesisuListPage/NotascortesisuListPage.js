import React, { useState, useEffect } from 'react';
import './NotascortesisuListPage.css';
import notascortesisuApi from '../../../services/apiServices/notascortesisuApi';
import { setLoading } from '../../../services/redux/loadingSlice';
import { useDispatch } from 'react-redux';
import configService from '../../../services/configService';
import Pagination from '../../../components/common/Pagination/Pagination'; 
import { toast } from 'react-toastify';
import { putDateOnPattern } from '../../../utils/functions';
import FilterComponent from '../../../components/admin/FilterComponent/FilterComponent';

const NotascortesisuListPage = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [totalItens, setTotalItens] = useState(0);
    const quantity = configService.getDefaultNumberOfItemsTable(); 
    const orderBy = "Id:Desc";

    useEffect(() => {
        const fetchItems = async () => {
            dispatch(setLoading(true));
            try {
                const response = await notascortesisuApi.getPaginated({ page, quantity, orderBy, term: searchTerm, startDate, endDate, include: "" });

                setItems(response.Results);
                setTotalPages(response.TotalPages);
                setTotalItens(response.TotalCount);
            } catch (error) {
                toast.error('Erro ao buscar os itens.');
            } finally {
                dispatch(setLoading(false));
            }
        };
        fetchItems();
    }, [page, quantity, searchTerm, startDate, endDate, dispatch]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const search = ({term, startDate, endDate} = {}) => {
        setSearchTerm(term);
        setStartDate(startDate);
        setEndDate(endDate);
    }

    const exportFunction = async ({term}) => {
        try {
            dispatch(setLoading(true));
            const response = await notascortesisuApi.export({ term: term, startDate, endDate });

            if (response.Status === 200 && response.Object) {
                window.open(response.Object, "_blank");
                toast.success('Relatório gerado com sucesso!');
            } else {
                toast.error('Erro ao gerar o relatório');
            }
        } catch (error) {
            toast.error('Erro ao gerar o relatório');
        }
        finally{
            dispatch(setLoading(false));
        }
    };

    return (
    <div className="container-admin-page">
        <h1>Lista dos Itens</h1>
        <div className='container-admin-page-filters div-with-border'>
            <h3>Filtros</h3>
            <FilterComponent placeHolder={'Descrição'} showTermFilter={true} showStartDate={true} showEndDate={true} submitFilter={search} exportFunction={exportFunction}/>
        </div>
        <div className='container-admin-page-table div-with-border'>
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Criado</th>
                        <th>Ano</th>
                        <th>N° Edição</th>
                        <th>Cód. Instituição Ensino</th>
                        <th>Nome Instituição</th>
                        <th>Sigla Instituição</th>
                        <th>Organização Acadêmica</th>
                        <th>Categoria Organização</th>
                        <th>Campus</th>
                        <th>Município Campus</th>
                        <th>UF Campus</th>
                        <th>Região Campus</th>
                        <th>Código Curso</th>
                        <th>Nome Curso</th>
                        <th>Descrição Grau</th>
                        <th>Turno</th>
                        <th>Modalidade Concorrência</th>
                        <th>Descrição Modalidade Concorrência</th>
                        <th>Bônus Ação Afirmativa</th>
                        <th>Quantidade Vagas</th>
                        <th>Nota de Corte</th>
                        <th>Quantidade Inscrições</th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.Id}>
                        <td data-label='Id'><span>{item.Id}</span></td>
                        <td data-label='Criado'><span>{putDateOnPattern(item.Created)}</span></td>
                        <td data-label='Ano'><span>{item.Year}</span></td>
                        <td data-label='N° Edição'><span>{item.Numeroedicao}</span></td>
                        <td data-label='Cód. Instituição Ensino'><span>{item.Codigoinstituicaoensino}</span></td>
                        <td data-label='Nome Instituição'><span>{item.Nomeinstituicao}</span></td>
                        <td data-label='Sigla Instituição'><span>{item.Siglainstituicao}</span></td>
                        <td data-label='Organização Acadêmica'><span>{item.Organizacaoacademica}</span></td>
                        <td data-label='Categoria Organização'><span>{item.Categoriaorganizacao}</span></td>
                        <td data-label='Campus'><span>{item.Nomecampus}</span></td>
                        <td data-label='Município Campus'><span>{item.Nomemunicipiocampus}</span></td>
                        <td data-label='UF Campus'><span>{item.Ufcampus}</span></td>
                        <td data-label='Região Campus'><span>{item.Regiaocampus}</span></td>
                        <td data-label='Código Curso'><span>{item.Codigocurso}</span></td>
                        <td data-label='Nome Curso'><span>{item.Nomecurso}</span></td>
                        <td data-label='Descrição Grau'><span>{item.Descricaograu}</span></td>
                        <td data-label='Turno'><span>{item.Turno}</span></td>
                        <td data-label='Modalidade Concorrência'><span>{item.Modoconcorrencia}</span></td>
                        <td data-label='Descrição Modalidade Concorrência'><span>{item.Desricaomodoconcorrencia}</span></td>
                        <td data-label='Bônus Ação Afirmativa'><span>{item.Bonusacaoafirmativa}</span></td>
                        <td data-label='Quantidade Vagas'><span>{item.Quantidadevagas}</span></td>
                        <td data-label='Nota de Corte'><span>{item.Notacorte}</span></td>
                        <td data-label='Quantidade Inscrições'><span>{item.Quantidadeinscricoes}</span></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <sub>Total de Itens: {totalItens}</sub>
            <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    </div>
    );
};

export default NotascortesisuListPage;

