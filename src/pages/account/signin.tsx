import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Loading from '@/assets/icons/loading';
import Alert from '@/components/alert';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const body = {
        email,
        password,
      };

      const response = await axios.post('/api/auth/login/', body);
      setLoading(false);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        router.push('/menu');
      } else {
        setMessageAlert(response.data.message);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <section className='order mx-auto mb-16 flex max-w-[1440px] flex-col'>
      {messageAlert && <Alert message={messageAlert} />}
      <div className='py-10 text-center min-h-[700px]'>
        <h1 className='mx-auto mb-[35px] w-2/3 font-bold sm:text-[25px] md:text-[26px]'>
          Sign in or create an account
        </h1>
        <div className='mx-auto max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow'>
          <div className='mx-auto max-w-[400px]'>
            <form>
              <div className='mb-6'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-white-900 dark:text-white'
                >
                  Your email
                </label>
                <input
                  type='email'
                  data-testid='input-email'
                  className='bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-white-500 dark:focus:border-blue-500'
                  placeholder='* Username of email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-white-900 dark:text-white'
                >
                  Your password
                </label>
                <input
                  type='password'
                  id='password'
                  className='bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='flex items-start mb-6'>
                <div className='flex items-center h-5'>
                  <input
                    id='remember'
                    type='checkbox'
                    value=''
                    className='w-4 h-4 border p-color border-green-300 rounded bg-green-50 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800 dark:focus:ring-offset-green-800'
                    required
                  />
                </div>
                <label
                  htmlFor='remember'
                  className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Keep me signed in.{' '}
                  <a className='p-color underline'>Details</a>
                </label>
              </div>
              <div className='my-4 flex font-bold'>
                <a className='p-color underline'>Forgot your surname</a>
              </div>
              <div className='my-4 flex font-bold'>
                <a className='p-color underline'>Forgot your password</a>
              </div>
              <div className='text-right'>
                <button
                  role='Sign in'
                  name='Sign in'
                  type='button'
                  className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 bg-color inline-flex items-center'
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading && <Loading />}
                  <span className='ml-2'>Sign in</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='wrapper mb-[70px] w-2/3 text-center lg:w-1/2 mt-30'>
        <h3 className='p-color font-bold mb-1'>JOIN STARBUCKS® REWARDS</h3>
        <p className='text-sm max-w-[300px] mx-auto mt-3'>
          Join Starbucks® Rewards to earn free food and drinks, get free
          refills, pay and order with your phone, and more.
        </p>
      </div>
    </section>
  );
}
