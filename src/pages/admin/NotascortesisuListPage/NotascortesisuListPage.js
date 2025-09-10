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
                        <th>Created</th>
                        <th>Updated</th>
                        <th>IsActive</th>
                        <th>IsDeleted</th>
                        <th>Year</th>
                        <th>Numeroedicao</th>
                        <th>Codigoinstituicaoensino</th>
                        <th>Nomeinstituicao</th>
                        <th>Siglainstituicao</th>
                        <th>Organizacaoacademica</th>
                        <th>Categoriaorganizacao</th>
                        <th>Nomecampus</th>
                        <th>Nomemunicipiocampus</th>
                        <th>Ufcampus</th>
                        <th>Regiaocampus</th>
                        <th>Codigocurso</th>
                        <th>Nomecurso</th>
                        <th>Descricaograu</th>
                        <th>Turno</th>
                        <th>Modoconcorrencia</th>
                        <th>Desricaomodoconcorrencia</th>
                        <th>Bonusacaoafirmativa</th>
                        <th>Quantidadevagas</th>
                        <th>Notacorte</th>
                        <th>Quantidadeinscricoes</th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.Id}>
                        <td data-label='Id'><span>{item.Id}</span></td>
                        <td data-label='Created'><span>{putDateOnPattern(item.Created)}</span></td>
                        <td data-label='Updated'><span>{putDateOnPattern(item.Updated)}</span></td>
                        <td data-label='IsActive'><span>{item.IsActive}</span></td>
                        <td data-label='IsDeleted'><span>{item.IsDeleted}</span></td>
                        <td data-label='Year'><span>{item.Year}</span></td>
                        <td data-label='Numeroedicao'><span>{item.Numeroedicao}</span></td>
                        <td data-label='Codigoinstituicaoensino'><span>{item.Codigoinstituicaoensino}</span></td>
                        <td data-label='Nomeinstituicao'><span>{item.Nomeinstituicao}</span></td>
                        <td data-label='Siglainstituicao'><span>{item.Siglainstituicao}</span></td>
                        <td data-label='Organizacaoacademica'><span>{item.Organizacaoacademica}</span></td>
                        <td data-label='Categoriaorganizacao'><span>{item.Categoriaorganizacao}</span></td>
                        <td data-label='Nomecampus'><span>{item.Nomecampus}</span></td>
                        <td data-label='Nomemunicipiocampus'><span>{item.Nomemunicipiocampus}</span></td>
                        <td data-label='Ufcampus'><span>{item.Ufcampus}</span></td>
                        <td data-label='Regiaocampus'><span>{item.Regiaocampus}</span></td>
                        <td data-label='Codigocurso'><span>{item.Codigocurso}</span></td>
                        <td data-label='Nomecurso'><span>{item.Nomecurso}</span></td>
                        <td data-label='Descricaograu'><span>{item.Descricaograu}</span></td>
                        <td data-label='Turno'><span>{item.Turno}</span></td>
                        <td data-label='Modoconcorrencia'><span>{item.Modoconcorrencia}</span></td>
                        <td data-label='Desricaomodoconcorrencia'><span>{item.Desricaomodoconcorrencia}</span></td>
                        <td data-label='Bonusacaoafirmativa'><span>{item.Bonusacaoafirmativa}</span></td>
                        <td data-label='Quantidadevagas'><span>{item.Quantidadevagas}</span></td>
                        <td data-label='Notacorte'><span>{item.Notacorte}</span></td>
                        <td data-label='Quantidadeinscricoes'><span>{item.Quantidadeinscricoes}</span></td>
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

