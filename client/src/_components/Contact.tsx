import axios from 'axios';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/contact/send`,
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setName('');
      setEmail('');
      setMessage('');
      toast.success(data.message);
      setLoading(false);
    } catch (error: unknown) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'An error occurred');
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <section className='contact'>
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            value={name}
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            value={email}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <input
            id='message'
            type='text'
            value={message}
            placeholder='Enter your message'
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type='submit' disabled={loading} className='submit-button'>
          {loading && <ClipLoader size={20} color='white' />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
