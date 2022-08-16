import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const urlApi = "https://crudcrud.com/api/ce975c8dbdf245edbdd808f8f3f1b1c0/mascotas";
class App extends Component {
  state = {
    mascota: [],
    modalInsertar: false,
  }
  peticionGet = () => {
    axios.get(urlApi).then(response => {
      this.setState({ mascota: response.data });
    })
  }
  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar })
  }
  handleChange = e=>{
    
  }
  componentDidMount() {
    this.peticionGet();
  }
  render() {
    return (
      <div className='App'>
        <br />
        <button className='btn btn-success' onClick={()=>this.modalInsertar()}> Agregar Mascota nueva</button>
        <br /> <br />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">NOMBRE</th>
              <th scope="col">EDAD</th>
              <th scope="col">ESPECIE</th>
              <th scope='col'>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {this.state.mascota.map(mascota => {
              return (
                <tr>
                  <td>{mascota.nombre}</td>
                  <td>{mascota.edad}</td>
                  <td>{mascota.especie}</td>
                  <td>
                    <button className='btn btn-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                    </button>
                    {"   "}
                    <button className='btn btn-danger'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader style={{ display: 'block' }}>
            <button type="button" class="btn-close" aria-label="Close" style={{ float: 'right' }} onClick={()=> this.modalInsertar()}></button>
            <h1>Agrega tu nueva mascota</h1>
          </ModalHeader>
          <ModalBody>
            <div className='form-group'>
              <label htmlFor='id'>Nombre</label>
              <input className='form-control' type='text' name='nombre' />
              <br />
              <label htmlFor='id'>Edad</label>
              <input className='form-control' type='number' name='edad' />
              <br />
              <label htmlFor='id'>Especie</label>
              <input className='form-control' type='text' name='especie' />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-success'> Agregar</button>
            <button className='btn btn-danger' onClick={()=> this.modalInsertar()}> Cancelar</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default App;
