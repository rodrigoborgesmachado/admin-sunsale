import React, { useState, useEffect } from 'react';
import './PessoasfordevListPage.css';
import pessoasfordevApi from '../../../services/apiServices/pessoasfordevApi';
import { setLoading } from '../../../services/redux/loadingSlice';
import { useDispatch } from 'react-redux';
import configService from '../../../services/configService';
import Pagination from '../../../components/common/Pagination/Pagination'; 
import { toast } from 'react-toastify';
import { putDateOnPattern } from '../../../utils/functions';
import FilterComponent from '../../../components/admin/FilterComponent/FilterComponent';

const PessoasfordevListPage = () => {
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
                const response = await pessoasfordevApi.getPaginated({ page, quantity, orderBy, term: searchTerm, startDate, endDate, include: "" });

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
            const response = await pessoasfordevApi.export({ term: term, startDate, endDate });

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
                        <th>Idade</th>
                        <th>Cpf</th>
                        <th>Rg</th>
                        <th>Datanascimento</th>
                        <th>Sexo</th>
                        <th>Signo</th>
                        <th>Mae</th>
                        <th>Pai</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Cep</th>
                        <th>Endereco</th>
                        <th>Numero</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Telefonefixo</th>
                        <th>Celular</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>Tiposanguineo</th>
                        <th>Corfavorita</th>
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
                        <td data-label='Idade'><span>{item.Idade}</span></td>
                        <td data-label='Cpf'><span>{item.Cpf}</span></td>
                        <td data-label='Rg'><span>{item.Rg}</span></td>
                        <td data-label='Datanascimento'><span>{item.Datanascimento}</span></td>
                        <td data-label='Sexo'><span>{item.Sexo}</span></td>
                        <td data-label='Signo'><span>{item.Signo}</span></td>
                        <td data-label='Mae'><span>{item.Mae}</span></td>
                        <td data-label='Pai'><span>{item.Pai}</span></td>
                        <td data-label='Email'><span>{item.Email}</span></td>
                        <td data-label='Senha'><span>{item.Senha}</span></td>
                        <td data-label='Cep'><span>{item.Cep}</span></td>
                        <td data-label='Endereco'><span>{item.Endereco}</span></td>
                        <td data-label='Numero'><span>{item.Numero}</span></td>
                        <td data-label='Bairro'><span>{item.Bairro}</span></td>
                        <td data-label='Cidade'><span>{item.Cidade}</span></td>
                        <td data-label='Estado'><span>{item.Estado}</span></td>
                        <td data-label='Telefonefixo'><span>{item.Telefonefixo}</span></td>
                        <td data-label='Celular'><span>{item.Celular}</span></td>
                        <td data-label='Altura'><span>{item.Altura}</span></td>
                        <td data-label='Peso'><span>{item.Peso}</span></td>
                        <td data-label='Tiposanguineo'><span>{item.Tiposanguineo}</span></td>
                        <td data-label='Corfavorita'><span>{item.Corfavorita}</span></td>
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

export default PessoasfordevListPage;

