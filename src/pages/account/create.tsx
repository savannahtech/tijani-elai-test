import React, { useState } from 'react';
import axios from 'axios';
import { Box, Checkbox, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import Loading from '@/assets/icons/loading';
import Alert from '@/components/alert';
import CustomInput from '@/components/CustomInput';
import CustomAccordion from '@/components/Accordion';
import { InputChangeProps } from '@/models/interface';

export default function Login() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
        firstName,
        lastName,
      };

      const response = await axios.post('/api/auth/register/', body);
      setLoading(false);
      if (response.data.success) {
        router.push('/account/signin');
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
      <div className='py-10 text-center min-h-[800px]'>
        <h1 className='mx-auto mb-[35px] w-2/3 font-bold sm:text-[25px] md:text-[30px]'>
          Create an account
        </h1>
        <Text color='#5c5c5c' className='font-bold'>
          STARBUCKS <span className='text-sm'>®</span> REWARDS
        </Text>
        <Text
          color='#5c5c5c'
          textAlign='center'
          className='mx-auto'
          maxWidth='530px'
          mb={10}
          mt={5}
          fontSize='15px'
        >
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and
          moremore.
        </Text>
        <div className='mx-auto max-w-lg p-6 px-10 bg-white border border-gray-200 rounded-lg shadow'>
          <div className='mx-auto max-w-[400px]'>
            <form>
              <Box mt={6} mb={6}>
                <Text textAlign='left'>* indicates required field</Text>
              </Box>
              <div>
                <h3 className='text-left font-bold sm:text-[16px] md:text-[20px]'>
                  Personal Information
                </h3>
              </div>
              <Box mt={6}>
                <CustomInput
                  label='First name'
                  helperText='* Enter your first name'
                  helperTextClassName='text-left'
                  value={firstName}
                  onChange={(e: InputChangeProps) =>
                    setFirstName(e.target.value)
                  }
                />
              </Box>
              <Box mt={8}>
                <CustomInput
                  label='Last name'
                  helperText='* Enter your last name'
                  helperTextClassName='text-left'
                  value={lastName}
                  onChange={(e: InputChangeProps) =>
                    setLastName(e.target.value)
                  }
                />
              </Box>

              <div className='mt-6'>
                <h3 className='text-left font-bold sm:text-[16px] md:text-[20px]'>
                  Account Security
                </h3>
              </div>
              <Box mt={6}>
                <CustomInput
                  label='Email address'
                  helperText='* This will be your username'
                  helperTextClassName='text-left'
                  value={email}
                  onChange={(e: InputChangeProps) => setEmail(e.target.value)}
                  required
                />
              </Box>
              <Box mt={6} mb={6}>
                <CustomInput
                  label='Password'
                  helperText='Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.'
                  required
                  value={password}
                  onChange={(e: InputChangeProps) =>
                    setPassword(e.target.value)
                  }
                />
              </Box>

              <Box mb={6}>
                <CustomAccordion title='Already have a Starbucks gift card?'>
                  <Text className='text-left mb-3'>
                    Add your gift card to earn Stars when you pay and order
                    ahead.
                  </Text>
                  <Box mt={6}>
                    <CustomInput
                      label='Card number (16 digits)'
                      helperText='A valid Starbucks card number has 16 digits.'
                      helperTextClassName='text-left'
                      value={password}
                      onChange={(e: InputChangeProps) =>
                        setPassword(e.target.value)
                      }
                    />
                  </Box>
                  <Box mt={6}>
                    <CustomInput
                      label='Security code'
                      helperText='A valid security code has 8 digits.'
                      helperTextClassName='text-left'
                      value={password}
                      onChange={(e: InputChangeProps) =>
                        setPassword(e.target.value)
                      }
                    />
                  </Box>
                </CustomAccordion>
              </Box>

              <Box className='text-left'>
                <Text color='#5c5c5c' className='font-bold'>
                  COLLECT MORE STARS & EARN REWARDS
                </Text>

                <Text color='#5c5c5c' className='font-medium mt-3 mb-5'>
                  Email is a great way to know about offers and what’s new from
                  Starbucks.
                </Text>

                <Checkbox iconColor='p-color' iconSize='1rem'>
                  Yes, I’d like email from StarbucksKnow about initiatives,
                  announcements and product offers.
                </Checkbox>

                <Text color='#5c5c5c' className='font-bold' m={5}>
                  TERMS OF USE
                </Text>
                <Checkbox iconColor='p-color' iconSize='1rem'>
                  I agree to the Starbucks® Rewards Terms opens in new window
                  and the Starbucks Card Terms opens in new window and have read
                  the Starbucks Privacy Statement opens in new window.
                </Checkbox>

                <Text mt={4}>Please agree to the Terms of Use</Text>
              </Box>

              <div className='text-right mt-10'>
                <button
                  role='Sign in'
                  name='Sign in'
                  type='button'
                  className='py-10 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 bg-color inline-flex items-center'
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading && <Loading />}
                  <span className='ml-2 text-lg'>Create account</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
