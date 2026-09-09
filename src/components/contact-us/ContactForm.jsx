'use client'
import { MainBG } from '@/assets/images';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// -------------------------
// Zod schema & form fields
// -------------------------
const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName:  z.string().min(1, 'Last name is required'),
  email:     z.string().email('Enter a valid email'),
  phone:     z.string().min(1, 'Phone is required'),
  company:   z.string().optional(),
  message:   z.string().min(1, 'Message is required')
});

// You can tweak the UI/placeholder text here without touching the rest
const fields = [
  { name: 'firstName', label: 'First Name', placeholder: 'Enter First Name', required: true, col: 'md:col-span-1' },
  { name: 'lastName',  label: 'Last Name',  placeholder: 'Enter Last Name',  required: true, col: 'md:col-span-1' },
  { name: 'email',     label: 'Email',      placeholder: 'Enter Your Email', required: true, col: 'md:col-span-2' },
  { name: 'phone',     label: 'Phone',      placeholder: 'Enter Phone Number',required: true, col: 'md:col-span-1' },
  { name: 'company',   label: 'Company',    placeholder: 'Enter Company Name', required: false,col: 'md:col-span-1' }
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    console.log('form data ready to send server', data);
  };

  return (
    <div data-aos="fade-up"  className="relative border-[3px] border-white rounded-4xl overflow-hidden p-5">
      {/* Background image */}
      <div className="absolute inset-0 h-full z-0">
        <Image
          src={MainBG}
          alt="background Image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      {/* Form wrapper */}
      <div className="relative z-10 ">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.map(({ name, label, placeholder, required, col }) => (
            <div key={name} className={` flex flex-col gap-[10px] overflow-hidden ${col}`}>
              <label  data-aos="slide-right" data-aos-easing='ease-out' data-aos-duration='1500' className="block  font-medium text-sm " htmlFor={name}>
                {label}
                {required && <span className="text-red-500">*</span>}
              </label>
              <input
               data-aos="fade-up" 
                id={name}
                type="text"
                placeholder={placeholder}
                {...register(name)}
                className="w-full rounded-full placeholder:text-[#242536] placeholder:font-medium  placeholder:text-sm bg-white/30 border-[2px] border-white    p-4 focus:outline-none  "
              />
              {errors[name] && (
                <p className="mt-1 text-xs text-red-400">{errors[name]?.message}</p>
              )}
            </div>
          ))}

          {/* Message textarea spans full width */}
          <div className="md:col-span-2 flex flex-col gap-[10px] ">
            <label data-aos="slide-right" data-aos-easing='ease-out' data-aos-duration='1500' className="block  font-medium text-sm " htmlFor="message">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
            data-aos="fade-up"
              data-aos-offset="0" 
              id="message"
              rows={5}
              placeholder="Enter Your Message"
              {...register('message')}
              className="w-full rounded-3xl bg-white/30 placeholder:text-[#242536] placeholder:font-medium placeholder:text-sm  border-[2px] border-white  p-4 focus:outline-none  resize-none"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message?.message}</p>
            )}
          </div>

          {/* Submit button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full rounded-full bg-primary  hover:scale-[102%]  transition-all duration-500    px-10 py-4 shadow-lg focus:outline-none text-white text-base font-medium"
            >
              Send to us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;



// import { MainBG } from '@/assets/images'
// import Image from 'next/image'
// import React from 'react'

// const ContactForm = () => {
//   return (
//     <div className='relative rounded-4xl overflow-hidden p-5'>
//         <div className="absolute   h-full   inset-0 z-0">
//                     <div className=" ">
//                       <Image
//                         src={MainBG}
//                         alt="background Image"
//                         layout="fill"
//                         objectFit="cover"
//                         priority={true}
//                       />
//                     </div>
//                   </div>

//                   <div className='relative z-10'>

//                     write form code here



//                   </div>
//     </div>
//   )
// }

// export default ContactForm