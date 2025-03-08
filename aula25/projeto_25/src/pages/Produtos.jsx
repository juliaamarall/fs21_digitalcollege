import LayoutDefult from "../layouts/LayoutDefult"
import { Table } from 'react-bootstrap'
const Produtos = () =>{
    return (
        
        <>
         <LayoutDefult>
           <h4>Produtos</h4>
           <hr />
           <input type="text" className="form-control" placeholder="Pesquisar" />

           <Table hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Notebook</td>
                        <td>R$ 1200</td>
                        <td>5</td>
                        <td>
                            <button className="btn btn-primary">Editar</button>
                            <button className="btn btn-danger">Remover</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Notebook</td>
                        <td>R$ 1200</td>
                        <td>5</td>
                        <td>
                            <button className="btn btn-primary">Editar</button>
                            <button className="btn btn-danger">Remover</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Notebook</td>
                        <td>R$ 1200</td>
                        <td>5</td>
                        <td>
                            <button className="btn btn-primary">Editar</button>
                            <button className="btn btn-danger">Remover</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </LayoutDefult>
        </>
    )
}

export default Produtos;