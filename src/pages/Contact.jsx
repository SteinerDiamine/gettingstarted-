

/*import React, { Suspense, useRef, useState } from 'react'
import  emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const  formRef = useRef(null); 
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading]= useState(false);
  const [currentAnimations , setCurrentAnimations] = useState('idle')

  const {alert, showAlert, hideAlert} =useAlert();
  
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };


  const handleFocus =() => setCurrentAnimations('walk');

  
  const handleBlur =() => setCurrentAnimations('idle');

  
  const handleSubmit =(e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimations('hit')

    emailjs.send(
      'service_bktojts',
      'template_0gbwcoi',
       {
        from_name: form.name,
        to_name:"Meow",
        from_email: 'form.email',
        to_email: 'ttweety309@gmail.com',
        message: form.message
       },
       'uePtMJcufFH37I4e0'

    )      .then(
      () => {
        isLoading(false);
        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });

        setTimeout(() => {
          hideAlert(false);
          setCurrentAnimations("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, [3000]);
      },
      (error) => {
        isLoading(false);
        console.error(error);
        setCurrentAnimations("idle");

        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      }
    );
  } 


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show &&  <Alert {...alert}/>}
      <Alert {...alert}/>


      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'> Get in Touch</h1>
        <form 
            className='w-full flex flex-col gap-7 mt-14'
            onSubmit ={handleSubmit}
            >
              <label className='text-black-500 font-semibold'>Name
              <input 
              type='text'
              name='name'
              className='input'
              placeholder='Enter your Name    /ᐠ - ˕ -マ'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
              </label>

              <label className='text-black-500 font-semibold'>Email
              <input 
              type='email'
              name='email'
              className='input'
              placeholder='meow@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
              </label>
              <label className='text-black-500 font-semibold'> Your Message
              <textarea
              
              name='message'
              rows={3}
              
              className='textarea'
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              />
              </label>
              <button
            type='submit'
            disabled={isLoading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
            </form>
      </div>
      <div className='lg:w-1/2 w-full  lg:h-auto md:h-[550px] h-[350px]
      '>
        <Canvas
          camera={{
            position: [0,0,5],
            fov : 75,
            near : 0.1,
            far : 1000,
          }}>

            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <ambientLight intensity={0.5}/>
            <Suspense fallback= {<Loader/>}>
              <Fox
              currentAnimation={currentAnimations}
              position={[0.5,0.35,0]}
              rotation = {[12.6,-0.6,0]}
              scale={[0.5,0.5,0.5]}
              
              
              />
              </Suspense>
          </Canvas>
      </div>
    </section>
  )
}

export default Contact   */

import React, { Suspense, useRef, useState } from 'react'
import  emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        'service_bktojts',
        'template_0gbwcoi',
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "ttweety309@gmail.com",
          message: form.message,
        },
        'uePtMJcufFH37I4e0'
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Enter your Name    /ᐠ - ˕ -マ'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='diamine@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Let me know how can I help you...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;


