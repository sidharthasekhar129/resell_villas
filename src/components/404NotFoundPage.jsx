import React from "react";
// import { Link } from "react-router-dom";
const NotFoundPage = () => {
  const navigations = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      ),
      title: "Resources",
      desc: "Your one stop destination for all your real estate needs",
      href: "/",
    },
  
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      ),
      title: "Support",
      desc: "Feeling lost? We are around the corner.",
      href: "/contact",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
      title: "Go to Homepage",
      desc: "Real estate made easy with resell.villas",
      href: "/",
    },
  ];

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto text-gray-600">
          <div className="space-y-3 text-center">
            <h3 className="text-indigo-600 font-semibold">404 Error</h3>
            <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
              Page not found
            </p>
            <p>
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
          </div>
          <div className="mt-12">
            <ul className="divide-y">
              {navigations.map((item, idx) => (
                <li key={idx} className="flex gap-x-4 py-6">
                  <div className="flex-none w-14 h-14 bg-indigo-50 rounded-full text-indigo-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-gray-800 font-medium">{item.title}</h4>
                    <p>{item.desc}</p>
                    <a
                      href={item.href}
                      className="text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
// const  = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.content}>
//         <div style={styles.animationContainer}>
//           <div style={styles.animationCircle}></div>
//         </div>
//         <div style={styles.icon}>🚀</div>
//         <div style={styles.title}>404 Not Found</div>
//         <div style={styles.description}>Oops! The page you are looking for could not be found.</div>
//         <Link to="/" style={styles.link}>Go back to homepage</Link>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f0f0f0',
//   },
//   content: {
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: '3rem',
//     marginBottom: '20px',
//   },
//   description: {
//     fontSize: '1.2rem',
//     marginBottom: '20px',
//   },
//   icon: {
//     fontSize: '6rem',
//     marginBottom: '20px',
//   },
//   animationContainer: {
//     position: 'relative',
//     width: '150px',
//     height: '150px',
//   },
//   animationCircle: {
//     position: 'absolute',
//     border: '8px solid transparent',
//     borderTopColor: '#ff5722',
//     borderRadius: '50%',
//     animation: 'spin 1s linear infinite',
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#ff5722',
//   },
// };

export default NotFoundPage;
