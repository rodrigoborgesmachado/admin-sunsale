import React, { useState, useEffect } from 'react';
import './AlimentosListPage.css';
import alimentosApi from '../../../services/apiServices/alimentosApi';
import { setLoading } from '../../../services/redux/loadingSlice';
import { useDispatch } from 'react-redux';
import configService from '../../../services/configService';
import Pagination from '../../../components/common/Pagination/Pagination'; 
import { toast } from 'react-toastify';
import { putDateOnPattern } from '../../../utils/functions';
import FilterComponent from '../../../components/admin/FilterComponent/FilterComponent';

const AlimentosListPage = () => {
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
                const response = await alimentosApi.getPaginated({ page, quantity, orderBy, term: searchTerm, startDate, endDate, include: "" });

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
            const response = await alimentosApi.export({ term: term, startDate, endDate });

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
                        <th>Categoriacodigo</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>IsActive</th>
                        <th>IsDeleted</th>
                        <th>Numeroalimento</th>
                        <th>Descricao</th>
                        <th>Umidade</th>
                        <th>Energiakcal</th>
                        <th>Energiakg</th>
                        <th>Proteina</th>
                        <th>Lipidios</th>
                        <th>Colesterol</th>
                        <th>Carboidrato</th>
                        <th>Fibraalimentar</th>
                        <th>Cinzas</th>
                        <th>Calcio</th>
                        <th>Magnesio</th>
                        <th>Manganes</th>
                        <th>Fosforo</th>
                        <th>Ferro</th>
                        <th>Sodio</th>
                        <th>Potassio</th>
                        <th>Cobre</th>
                        <th>Zinco</th>
                        <th>Retinol</th>
                        <th>Re</th>
                        <th>Rae</th>
                        <th>Tiamina</th>
                        <th>Piridozina</th>
                        <th>Riboflavina</th>
                        <th>Niacina</th>
                        <th>Vitaminac</th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.Id}>
                        <td data-label='Id'><span>{item.Id}</span></td>
                        <td data-label='Categoriacodigo'><span>{item.Categoriacodigo}</span></td>
                        <td data-label='Created'><span>{putDateOnPattern(item.Created)}</span></td>
                        <td data-label='Updated'><span>{putDateOnPattern(item.Updated)}</span></td>
                        <td data-label='IsActive'><span>{item.IsActive}</span></td>
                        <td data-label='IsDeleted'><span>{item.IsDeleted}</span></td>
                        <td data-label='Numeroalimento'><span>{item.Numeroalimento}</span></td>
                        <td data-label='Descricao'><span>{item.Descricao}</span></td>
                        <td data-label='Umidade'><span>{item.Umidade}</span></td>
                        <td data-label='Energiakcal'><span>{item.Energiakcal}</span></td>
                        <td data-label='Energiakg'><span>{item.Energiakg}</span></td>
                        <td data-label='Proteina'><span>{item.Proteina}</span></td>
                        <td data-label='Lipidios'><span>{item.Lipidios}</span></td>
                        <td data-label='Colesterol'><span>{item.Colesterol}</span></td>
                        <td data-label='Carboidrato'><span>{item.Carboidrato}</span></td>
                        <td data-label='Fibraalimentar'><span>{item.Fibraalimentar}</span></td>
                        <td data-label='Cinzas'><span>{item.Cinzas}</span></td>
                        <td data-label='Calcio'><span>{item.Calcio}</span></td>
                        <td data-label='Magnesio'><span>{item.Magnesio}</span></td>
                        <td data-label='Manganes'><span>{item.Manganes}</span></td>
                        <td data-label='Fosforo'><span>{item.Fosforo}</span></td>
                        <td data-label='Ferro'><span>{item.Ferro}</span></td>
                        <td data-label='Sodio'><span>{item.Sodio}</span></td>
                        <td data-label='Potassio'><span>{item.Potassio}</span></td>
                        <td data-label='Cobre'><span>{item.Cobre}</span></td>
                        <td data-label='Zinco'><span>{item.Zinco}</span></td>
                        <td data-label='Retinol'><span>{item.Retinol}</span></td>
                        <td data-label='Re'><span>{item.Re}</span></td>
                        <td data-label='Rae'><span>{item.Rae}</span></td>
                        <td data-label='Tiamina'><span>{item.Tiamina}</span></td>
                        <td data-label='Piridozina'><span>{item.Piridozina}</span></td>
                        <td data-label='Riboflavina'><span>{item.Riboflavina}</span></td>
                        <td data-label='Niacina'><span>{item.Niacina}</span></td>
                        <td data-label='Vitaminac'><span>{item.Vitaminac}</span></td>
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

export default AlimentosListPage;

