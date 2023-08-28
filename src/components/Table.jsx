
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import useAPI from '../hooks/useAPI'
import { getDataFiles } from '../services/filesServices'
const TableItems = (props) => {
    const [data, setData] = useAPI(getDataFiles);
    useEffect(() => {
        if(!data.isFetching && typeof data.result !== 'undefined') {
            let checkList = []
            for (const iterator of data.result.data) {
                checkList.push(
                    { label: iterator.name, value: iterator.id }
                )
            }
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </>
    )
}

export default TableItems;