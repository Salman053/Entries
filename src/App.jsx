import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DataScreen from './Views/DataScreen';
import LoginView from './Views/LoginView';
import EntryForm from './Views/EntryForm';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  return (
    <div className='min-h-screen min-w-screen max-w-screen overflow-auto'>
      <Router>
        <Routes>
          {/* Redirect authenticated users from /auth to /details */}
          <Route path='/auth' element={user ? <Navigate to='/entries' /> : <LoginView />} />
          {/* Redirect unauthenticated users from /details to /auth */}
          <Route path='/details' element={user ? <DataScreen /> : <Navigate to='/auth' />} />
          <Route path='/entries' element={user ? <EntryForm /> : <Navigate to='/auth' />} />

          {/* Handle 404 route */}
          <Route path='*' element={<Navigate to='/auth' />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
