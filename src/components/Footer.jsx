import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 py-12" id="contact">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-4">
          <img 
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Cozinha da Rose Logo" 
            className="h-16 w-auto"
          />
        </div>
        <p className="mb-4">
          Come visit us for an unforgettable Brazilian experience.
        </p>
        <div className="flex justify-center space-x-6 mb-6 text-lg">
          <p>
            <span className="font-bold">Phone:</span> 856.562.0858
          </p>
          <p>
            <span className="font-bold">Address:</span> 17 S Pavilion Ave, Riverside, NJ 08075
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          {/* Twitter */}
          <button 
            className="text-gray-600 hover:text-pink-500 transition-colors" 
            aria-label="Twitter"
            onClick={() => alert('Twitter link coming soon!')}
          >
            <svg 
              className="h-6 w-6" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.28C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.08,9.77 4.19,10.59C3.47,10.57 2.82,10.36 2.26,10.03C2.26,10.05 2.26,10.07 2.26,10.09C2.26,12.24 3.79,14.04 5.9,14.47C5.55,14.57 5.19,14.62 4.82,14.62C4.54,14.62 4.27,14.59 4.01,14.54C4.58,16.31 6.25,17.58 8.24,17.62C6.71,18.81 4.77,19.54 2.63,19.54C2.27,19.54 1.91,19.52 1.56,19.46C3.56,20.73 5.9,21.5 8.44,21.5C16,21.5 20.33,14.93 20.33,9.21C20.33,9.04 20.33,8.87 20.32,8.7C21.14,8.13 21.87,7.12 22.46,6Z" />
            </svg>
          </button>
          
          {/* GitHub */}
          <a 
            className="text-gray-600 hover:text-pink-500 transition-colors" 
            href="https://github.com/Erik-Mfa/Cozinha-da-Rose"
            aria-label="GitHub"
          >
            <svg 
              className="h-6 w-6" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.75 9.49,20.14 9.49,19.5C7.2,19.95 6.53,18.46 6.53,18.46C6.08,17.31 5.27,16.95 5.27,16.95C4.38,16.31 5.35,16.32 5.35,16.32C6.32,16.39 6.84,17.31 6.84,17.31C7.71,18.83 9.14,18.42 9.7,18.17C9.79,17.53 10.05,17.11 10.31,16.88C8.2,16.63 5.97,15.82 5.97,12.4C5.97,11.21 6.38,10.23 7.03,9.46C6.93,9.21 6.54,8.08 7.12,6.62C7.12,6.62 7.89,6.37 9.5,7.5C10.23,7.29 11.03,7.19 11.84,7.18C12.64,7.19 13.44,7.29 14.17,7.5C15.78,6.37 16.55,6.62 16.55,6.62C17.13,8.08 16.74,9.21 16.64,9.46C17.29,10.23 17.7,11.21 17.7,12.4C17.7,15.83 15.47,16.63 13.35,16.88C13.69,17.17 14,17.7 14,18.52C14,19.72 14,20.67 14,21C14,21.27 14.16,21.59 14.66,21.5C18.64,20.16 21.5,16.42 21.5,12A10,10 0 0,0 12,2Z" />
            </svg>
          </a>
          
          {/* Instagram */}
          <button 
            className="text-gray-600 hover:text-pink-500 transition-colors" 
            aria-label="Instagram"
            onClick={() => alert('Instagram link coming soon!')}
          >
            <svg 
              className="h-6 w-6" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
            </svg>
          </button>
        </div>
        <p className="text-gray-600 mt-8 text-sm">
          © 2025 Cozinha da Rose. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
