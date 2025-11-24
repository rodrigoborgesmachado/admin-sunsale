import React, { useState, useEffect } from 'react';
import './RespostasavaliacoesListPage.css';
import respostasavaliacoesApi from '../../../services/apiServices/respostasavaliacoesApi';
import { setLoading } from '../../../services/redux/loadingSlice';
import { useDispatch } from 'react-redux';
import configService from '../../../services/configService';
import Pagination from '../../../components/common/Pagination/Pagination'; 
import { toast } from 'react-toastify';
import { putDateOnPattern } from '../../../utils/functions';
import FilterComponent from '../../../components/admin/FilterComponent/FilterComponent';

const RespostasavaliacoesListPage = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [totalItens, setTotalItens] = useState(0);
    const [refresh, setRefresh] = useState(0);
    const quantity = configService.getDefaultNumberOfItemsTable(); 
    const orderBy = "Id:Desc";

    useEffect(() => {
        const fetchItems = async () => {
            dispatch(setLoading(true));
            try {
                const response = await respostasavaliacoesApi.getPaginated({ page, quantity, orderBy, term: searchTerm, startDate, endDate, include: "" });

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
    }, [page, quantity, searchTerm, startDate, endDate, refresh, dispatch]);

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
            const response = await respostasavaliacoesApi.export({ term: term, startDate, endDate });

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

    const updateStatus =  async (isActive,id) => {
        try {
            dispatch(setLoading(true));
            const response = await respostasavaliacoesApi.updateStatus({ status: isActive === 1 ? 'IsDeleted' : 'IsActive', id: id });
            
            if (response) {
                toast.success('Atualizado com sucesso!');
                setRefresh(prev => prev +1);
            } else {
                toast.error('Erro ao atualizar o item!');
            }
        } catch (error) {
            toast.error('Erro ao atualizar o item!');
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
                        <th>ID</th>
                        <th>Criado</th>
                        <th>Criado por</th>
                        <th>Atualizado por</th>
                        <th>ID Avaliação</th>
                        <th>ID Questão</th>
                        <th>ID Resposta</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.Id}>
                        <td data-label='ID'><span>{item.Id}</span></td>
                        <td data-label='Criado'><span>{putDateOnPattern(item.Created)}</span></td>
                        <td data-label='Criado por'><span>{item.Createdby}</span></td>
                        <td data-label='Atualizado por'><span>{item.Updatedby}</span></td>
                        <td data-label='ID Avaliação'><span>{item.Idavaliacao}</span></td>
                        <td data-label='ID Questão'><span>{item.Idquestao}</span></td>
                        <td data-label='ID Resposta'><span>{item.Idresposta}</span></td>
                        <td data-label=''><button onClick={(e) => updateStatus(item.IsActive, item.Id)} className={item.IsActive ? 'item-active main-button' : 'item-inactive main-button'}>{item.IsActive ? 'Desativar' : 'Ativar'}</button></td>
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

export default RespostasavaliacoesListPage;

