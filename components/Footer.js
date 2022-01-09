// import logoWhite from '../images/logo - white.svg';
// import Image from 'next/image';
// import Link from 'next/link';
// import {
//   faFacebookF,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const Footer = () => {
//   return (
//     <footer className='bg-primary'>
//       <div className='responsive padding paddingy text-white'>
//         <div className='md:grid md:grid-cols-3 gap-x-20 justify-items-center'>
//           <div className='md:col-span-1 lg:col-span-1'>
//             <Link href='/'>
//               <a>
//                 <div className='relative w-40 h-16 lg:w-40'>
//                   <Image layout='fill' src={logoWhite} objectFit='contain' />
//                 </div>
//               </a>
//             </Link>
//             <p className='my-4'>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
//               recusandae!
//             </p>
//             <div className='flex justify-between w-1/2 max-w-[10rem]'>
//               <Link href='/'>
//                 <a className='hover-item'>
//                   <FontAwesomeIcon icon={faFacebookF} />
//                 </a>
//               </Link>
//               <Link href='/'>
//                 <a className='hover-item'>
//                   <FontAwesomeIcon icon={faTwitter} />
//                 </a>
//               </Link>
//               <Link href='/'>
//                 <a className='hover-item'>
//                   <FontAwesomeIcon icon={faYoutube} />
//                 </a>
//               </Link>
//               <Link href='/'>
//                 <a className='hover-item'>
//                   <FontAwesomeIcon icon={faInstagram} />
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div className='md:col-span-1 lg:col-span-1 md:mt-2 flex flex-col mt-8'>
//             <h3 className='text-secondary text-lg font-bold'>Quick Links</h3>
//             <Link href='/'>
//               <a className='mt-2 text-sm hover-item w-[fit-content]'>Home</a>
//             </Link>
//             <Link href='/about'>
//               <a className='mt-2 text-sm hover-item w-[fit-content]'>
//                 About Us
//               </a>
//             </Link>
//             <Link href='/news'>
//               <a className='mt-2 text-sm hover-item w-[fit-content]'>News</a>
//             </Link>
//           </div>
//           <div className='md:col-span-1 lg:col-span-1 md:mt-2 flex flex-col mt-8'>
//             <h3 className='text-secondary text-lg font-bold'>Other Pages</h3>
//             <Link href='/'>
//               <a className='mt-2 text-sm hover-item w-[fit-content]'>
//                 Privacy and Policy
//               </a>
//             </Link>
//             <Link href='/'>
//               <a className='mt-2 text-sm hover-item w-[fit-content]'>
//                 Disclaimer
//               </a>
//             </Link>
//             <Link href='/'>
//               <a className='mt-2 text-sm hover-item w-[fit-content]'>FAQ</a>
//             </Link>
//           </div>
//         </div>
//         <div className='py-8 mt-14 border-[#bbbbbb7e] border-t-[1px] text-sm '>
//           <span className='my-4'>Copyright © 2021. All rights reserved.</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Link from 'next/link';

const Footer = () => {
  return (
    <div className='padding paddingy bg-[#e7e6e4] '>
      <div className='responsive text-center lg:text-left lg:grid grid-cols-3 justify-items-center'>
        <div className='text-xl mb-24  lg:mb-0'>
          <p className='text-[40px] text-primary font-bold mb-8'>Producten</p>
          <div className='flex flex-col mb-8 font-light'>
            <h3 className='text-xl font-bold'>Visolie</h3>
            <Link href='/'>
              <a className='inline-block mt-2'>Visolie capsules</a>
            </Link>
            <Link href='/'>
              <a className='inline-block mt-2'>Visolie vloeibaar</a>
            </Link>
            <Link href='/'>
              <a className='inline-block mt-2'>Visolie voor kinderen</a>
            </Link>
            <Link href='/'>
              <a className='inline-block mt-2'>Visolie voor dieren</a>
            </Link>
            <Link href='/'>
              <a className='inline-block mt-2'>Alle visolie producten</a>
            </Link>
          </div>
          <div className='flex flex-col mb-8 font-light'>
            <h3 className='text-xl font-bold'>Algenolie</h3>
            <Link href='/'>
              <a className='inline-block mt-2'>Algenolie capsules</a>
            </Link>
            <Link href='/'>
              <a className='inline-block mt-2'>Algenolie vloeibaar</a>
            </Link>
            <Link href='/'>
              <a className='inline-block mt-2'>Alle algenolie producten</a>
            </Link>
          </div>
          <div className='flex flex-col mb-8 font-light'>
            <h3 className='text-xl font-bold'>Omega 3</h3>
            <Link href='/'>
              <a className='inline-block mt-2'>Omega-3 capsules</a>
            </Link>
            <Link href='/'>
              <a className='inline-block mt-2'>Omega-3 vloeibaar</a>
            </Link>
            <Link href='/'>
              <a className='inline-block mt-2'>Alle omega-3 producten</a>
            </Link>
          </div>
        </div>
        <div className='mb-24 lg:mb-0'>
          <h3 className='text-[40px] text-primary font-bold mb-8'>Over ons</h3>
          <div className='flex flex-col mb-8 font-light '>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Over ons</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Onze missie</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Over Seaspiracy</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Onze principes</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Ons MSC keurmerk</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Onze Oxidatie</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Affiliate worden</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Zakelijk / B2B</a>
            </Link>
          </div>
        </div>
        <div className=''>
          <h3 className='text-[40px] text-primary font-bold mb-8'>
            Klantenservice
          </h3>
          <div className='flex flex-col mb-8 font-light '>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Antwoord op alle vragen</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Top 5 gestelde vragen</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Levertijd vragen</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Verzendkosten vragen</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Cookies</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Algemene voorwaarden</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Privacy Policy</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>Disclaimer</a>
            </Link>
            <Link href='/'>
              <a className='text-xl inline-block mt-2'>100%-Geen-Op-Boer-Garantie</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
