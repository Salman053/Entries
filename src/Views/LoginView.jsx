import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db, doc, setDoc } from '../../firebase';
import logo from '../assets/Jamiat_Ulema-e-Islam_Logo.png';
import axios from 'axios';

const LoginView = () => {
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
        // Make the POST request to the backend
        const response = await axios.post('http://localhost:3000/api/login', {
            CNIC: cnic,
            password,
        });

        // Handle successful login
        if (response.status === 200) {
            console.log('Login successful');
            localStorage.setItem("user", JSON.stringify(response))
            // Perform additional logic like redirecting the user or saving additional data
            // Example: window.location.href = '/dashboard';
        }
    } catch (err) {
        // Handle errors
        if (err.response) {
            // The server responded with a status other than 2xx
            setError(err.response.data.message || 'An error occurred');
        } else if (err.request) {
            // The request was made but no response was received
            setError('No response from server');
        } else {
            // Something else happened
            setError('An error occurred');
        }
        console.error(err.message);
    }
};
  const formatCnic = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 5) {
      return cleaned;
    } else if (cleaned.length <= 12) {
      return `${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
    } else {
      return `${cleaned.slice(0, 5)}-${cleaned.slice(5, 12)}-${cleaned.slice(12, 13)}`;
    }
  };

  const handleCnicChange = (event) => {
    const { value } = event.target;
    setCnic(formatCnic(value));
  };

  return (
    <div className='Auth-Page flex-column gap-5 xl:gap-3 xl:flex-row-reverse py-4 xl:px-10 xl:h-[100vh]'>
      <img src={logo} className='w-[30%] xl:w-[25%] mx-auto xl:mx-0' alt="Logo" />
      <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg w-[80%] xl:w-[40%] px-4 py-12 border flex-column gap-4">
        <h3 className='text-xl text-center font-bold mb-4'>Admin Login</h3>



        {/* CNIC Input Field */}
        <div className="flex-column input-container">
          <label className='rt text-lg' htmlFor="cnic">:اپنا شناختی نمبر درج کریں</label>
          <input
            id="cnic"
            className='input-field'
            type="text"
            value={cnic}
            onChange={handleCnicChange}
            placeholder="12345-1234567-1"
            required
          />
        </div>

        {/* Password Input Field */}
        <div className="flex-column input-container">
          <label className='rt text-lg' htmlFor="password">:اپنا پاس ورڈ درج کریں</label>
          <input
            id="password"
            className='input-field'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='*********'
            required
          />
        </div>

        {error && <p className='text-red-500 text-center'>{error}</p>}

        <button type='submit' className='btn'>Login</button>
        <span className='opacity-75 cursor-pointer hover:opacity-100 transition-opacity text-center'>Forget password</span>
      </form>
    </div>
  );
};

export default LoginView;
