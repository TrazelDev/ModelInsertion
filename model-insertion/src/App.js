import './App.css';
import InputPage from './myElements/InputPage';
import Connection from './myElements/netwrokConnection/Connection';
import React from 'react';
import ResponsiveAppBar from './myElements/ResponsiveAppBar';

function App() {
  const [currentPage, setCurrentPage] = React.useState('Input Page'); // Initialize to 'Input'

  const handlePageChange = (pageName) => {
    console.log(pageName);
    setCurrentPage(pageName);
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <ResponsiveAppBar onPageChange={handlePageChange} currentPage={currentPage} />

      <header className="App-header">
        {currentPage === 'Input Page' ? <InputPage /> : null}
        <Connection currPageIndex={currentPage === 'Input Page'} />
      </header>
    </div>
  );
}

export default App;
