import React, { useState, useEffect } from 'react';
import './EmpresafordevListPage.css';
import empresafordevApi from '../../../services/apiServices/empresafordevApi';
import { setLoading } from '../../../services/redux/loadingSlice';
import { useDispatch } from 'react-redux';
import configService from '../../../services/configService';
import Pagination from '../../../components/common/Pagination/Pagination'; 
import { toast } from 'react-toastify';
import { putDateOnPattern } from '../../../utils/functions';
import FilterComponent from '../../../components/admin/FilterComponent/FilterComponent';

const EmpresafordevListPage = () => {
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
                const response = await empresafordevApi.getPaginated({ page, quantity, orderBy, term: searchTerm, startDate, endDate, include: "" });

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
            const response = await empresafordevApi.export({ term: term, startDate, endDate });

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
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Inscrição Estadual</th>
                        <th>Data de Abertura</th>
                        <th>Site</th>
                        <th>Email</th>
                        <th>CEP</th>
                        <th>Enderço</th>
                        <th>Número</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Telefone Fixo</th>
                        <th>Celular</th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.Id}>
                        <td data-label='Id'><span>{item.Id}</span></td>
                        <td data-label='Criado'><span>{putDateOnPattern(item.Created)}</span></td>
                        <td data-label='Nome'><span>{item.Nome}</span></td>
                        <td data-label='CNPJ'><span>{item.Cnpj}</span></td>
                        <td data-label='Inscrição Estadual'><span>{item.Ie}</span></td>
                        <td data-label='Data de Abertura'><span>{item.Dataabertura}</span></td>
                        <td data-label='Site'><span>{item.Site}</span></td>
                        <td data-label='Email'><span>{item.Email}</span></td>
                        <td data-label='CEP'><span>{item.Cep}</span></td>
                        <td data-label='Endereço'><span>{item.Endereco}</span></td>
                        <td data-label='Número'><span>{item.Numero}</span></td>
                        <td data-label='Bairro'><span>{item.Bairro}</span></td>
                        <td data-label='Cidade'><span>{item.Cidade}</span></td>
                        <td data-label='Estado'><span>{item.Estado}</span></td>
                        <td data-label='Telefone Fixo'><span>{item.Telefonefixo}</span></td>
                        <td data-label='Celular'><span>{item.Celular}</span></td>
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

export default EmpresafordevListPage;

