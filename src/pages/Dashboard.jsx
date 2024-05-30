import React, { useContext, useEffect, useState } from 'react';
import { Button } from "@material-tailwind/react";
import Layout from '../components/Layout';
import myContext from '../context/myContext';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const { mode, user, isAuth, setIsAuth, handleLogin, LogOut } = useContext(myContext);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
      if (!isAuth) {
          navigate('/login');
      } else {
          // Fetch user's blogs from the database
          setBlogs([
              { id: 1, title: 'Blog Title', category: 'Category', date: 'Date', thumbnail: 'Image URL' },
          ]);
      }
  }, [isAuth, navigate]);

  const handleLogout = () => {
      LogOut().then(() => {
          localStorage.clear();
          setIsAuth(false);
          navigate('/login');
      });
  };

  return (
      <Layout>
          <div className="py-10">
              <div className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
                  <div className="left">
                      <img
                          className="w-40 h-40 object-cover rounded-full border-2 border-pink-600 p-1"
                          src={user?.photoURL || 'default-profile.png'}
                          alt="profile"
                      />
                  </div>
                  <div className="right">
                      <h1
                          className='text-center font-bold text-2xl mb-2'
                          style={{ color: mode === 'dark' ? 'white' : 'black' }}
                      >
                          {user ? user.displayName || "User" : "User"}
                      </h1>
                      <h2 style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
                          {user ? user.email : "user@bloggi.com"}
                      </h2>
                      <h2 style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
                          <span>Total Blogs: </span> {blogs.length}
                      </h2>
                      <div className="flex gap-2 mt-2">
                          <Link to={'/createblog'}>
                              <div className="mb-2">
                                  <Button
                                      style={{
                                          background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                                          color: mode === 'dark' ? 'black' : 'white'
                                      }}
                                      className='px-8 py-2'
                                  >
                                      Create Blog
                                  </Button>
                              </div>
                          </Link>
                          <div className="mb-2">
                              <Button
                                  onClick={handleLogout}
                                  style={{
                                      background: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)',
                                      color: mode === 'dark' ? 'black' : 'white'
                                  }}
                                  className='px-8 py-2'
                              >
                                  Logout
                              </Button>
                          </div>
                      </div>
                  </div>
              </div>

              <hr className={`border-2 ${mode === 'dark' ? 'border-gray-300' : 'border-gray-400'}`} />

              <div className="">
                  <div className='container mx-auto px-4 max-w-7xl my-5'>
                      <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                          <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                              <thead
                                  style={{
                                      background: mode === 'dark' ? 'white' : 'rgb(30, 41, 59)'
                                  }}
                                  className="text-xs"
                              >
                                  <tr>
                                      <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                          S.No
                                      </th>
                                      <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                          Thumbnail
                                      </th>
                                      <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                          Title
                                      </th>
                                      <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                          Category
                                      </th>
                                      <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                          Date
                                      </th>
                                      <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} className="px-6 py-3">
                                          Action
                                      </th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {blogs.map((blog, index) => (
                                      <tr key={blog.id} className="border-b-2" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>
                                          <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                              {index + 1}.
                                          </td>
                                          <th style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4 font-medium">
                                              <img className='w-16 rounded-lg' src={blog.thumbnail} alt="thumbnail" />
                                          </th>
                                          <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                              {blog.title}
                                          </td>
                                          <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                              {blog.category}
                                          </td>
                                          <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                              {blog.date}
                                          </td>
                                          <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                              <button className='px-4 py-1 rounded-lg text-white font-bold bg-red-500' onClick={() => navigate('/deleteblog', { state: { blogId: blog.id } })}>
                                                  Delete
                                              </button>
                                          </td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </Layout>
  );
}

export default Dashboard;
