import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailsjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailsjs.send('service_la7v32y',
    'template_o0hrqi6',
    {
      from_name: form.name,
      to_name: 'Joshua',
      from_email: form.email,
      to_email: 'sarjsmithde@gmail.com',
      message: form.message
    },
    'xvWn8K1UA1qwqDMby'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false);

      console.log(error);

      alert('Something went wrong.');
    })
  };

  "[Your name] was a valuable Fullstack Developer on our team at Lofft, consistently demonstrating strong technical skills and an excellent work ethic. I highly recommend [your name] to anyone seeking a skilled and dedicated developer."
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary rounded-lg py-4 px-6
              text-white outlined-none border-none font-medium
              placeholder:text-secondary"
            />
          </label>

          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary rounded-lg py-4 px-6
              text-white outlined-none border-none font-medium
              placeholder:text-secondary"
            />
          </label>

          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Name</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary rounded-lg py-4 px-6
              text-white outlined-none border-none font-medium
              placeholder:text-secondary"
            />
          </label>

          <button
            type='submit'
            className='bg-[#00cea8] py-3 px-8
            outline-none w-fit text-white
            font-bold shadow-md shadow-primary
            round-xl'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');
