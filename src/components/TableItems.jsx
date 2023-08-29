
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import useAPI from '../hooks/useAPI'
import { getDataFiles } from '../services/filesServices'
const TableItems = (props) => {
    const [data, setData] = useAPI(getDataFiles);
    const [files, setFiles] = useState([]);
    
    useEffect(() => {
        setData()
    }, [])

    useEffect(() => {

     }, [data.isFetching, data.error])

    useEffect(() => {
        if (!data.isFetching && typeof data.result !== 'undefined') {
            let resultado = [];
            for (const objeto of data.result) {
                const file = objeto.file;
        
                const lineasConvertidas = objeto.lines.map(linea => ({
                    file,
                    text: linea.text,
                    number: linea.number,
                    hex: linea.hex
                }));
        
                resultado.push(...lineasConvertidas);
            }
            console.log(resultado)
            setFiles(resultado);
        }
    }, [data.isFetching, data.result])

    return (
        <>
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>File Name</th>
                    <th>Text</th>
                    <th>Number</th>
                    <th>Hex</th>
                </tr>
                </thead>
                <tbody>
                { files.length > 0 ? files?.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{val.file}</td>
                            <td>{val.text}</td>
                            <td>{val.number}</td>
                            <td>{val.hex}</td>
                        </tr>
                    )
                    }) : <tr><td colSpan={5}>{!data.isFetching && data.error ? 'Ocurrio un error al obetener los registros!' : 'Loading...'}</td></tr>
                }
                </tbody>
            </Table>
        </>
    )
}

export default TableItems;