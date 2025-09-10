import React, { useState, useEffect } from 'react';
import './WhosthatpokemonresultListPage.css';
import whosthatpokemonresultApi from '../../../services/apiServices/whosthatpokemonresultApi';
import { setLoading } from '../../../services/redux/loadingSlice';
import { useDispatch } from 'react-redux';
import configService from '../../../services/configService';
import Pagination from '../../../components/common/Pagination/Pagination'; 
import { toast } from 'react-toastify';
import { putDateOnPattern } from '../../../utils/functions';
import FilterComponent from '../../../components/admin/FilterComponent/FilterComponent';

const WhosthatpokemonresultListPage = () => {
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
                const response = await whosthatpokemonresultApi.getPaginated({ page, quantity, orderBy, term: searchTerm, startDate, endDate, include: "" });

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
            const response = await whosthatpokemonresultApi.export({ term: term, startDate, endDate });

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
                        <th>Nome</th>
                        <th>Tempo</th>
                        <th>Acertos</th>
                        <th>Erros</th>
                        <th>Kanto</th>
                        <th>Johto</th>
                        <th>Hoenn</th>
                        <th>Sinnoh</th>
                        <th>Unova</th>
                        <th>Kalos</th>
                        <th>Alola</th>
                        <th>Paldea</th>
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
                        <td data-label='Nome'><span>{item.Nome}</span></td>
                        <td data-label='Tempo'><span>{item.Tempo}</span></td>
                        <td data-label='Acertos'><span>{item.Acertos}</span></td>
                        <td data-label='Erros'><span>{item.Erros}</span></td>
                        <td data-label='Kanto'><span>{item.Kanto}</span></td>
                        <td data-label='Johto'><span>{item.Johto}</span></td>
                        <td data-label='Hoenn'><span>{item.Hoenn}</span></td>
                        <td data-label='Sinnoh'><span>{item.Sinnoh}</span></td>
                        <td data-label='Unova'><span>{item.Unova}</span></td>
                        <td data-label='Kalos'><span>{item.Kalos}</span></td>
                        <td data-label='Alola'><span>{item.Alola}</span></td>
                        <td data-label='Paldea'><span>{item.Paldea}</span></td>
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

export default WhosthatpokemonresultListPage;

