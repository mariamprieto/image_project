import React, { Fragment, useDebugValue, useState } from 'react';

function App() {

  const [file, setFile] = useState(null)

  const selectHandler = e => {
    setFile(e.target.files[0])
  }
  const sendHandler = () => {
    if (!file) {
      alert('Você deve selecionar um arquivo')
      return
    }

    const formData = new FormData()
    formData.append('image', file)
    fetch('http://localhost:9000/images/post', {
      method: 'POST',
      body: formData
    })
      .then(res => res.text())
      .then(res => console.log(res))
      .catch(err => {
        console.error(err)
      })
    document.getElementById('fileInput').value = null
    setFile(null)

  }

  return (
    <Fragment>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
          <a href='#!' className='navbar-brand'> Image App</a>
        </div>
      </nav>
      <div className='container mt-5'>
        <div className='card p-3'>
          <div className='row'>
            <div className='col-10'>
              <input id="fileInput" onChange={selectHandler} className='form-control' type='file' />
            </div>
            <div className='col-2'>
              <button onClick={sendHandler} type='button' className='btn btn-primary col-12'> Upload</button>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
