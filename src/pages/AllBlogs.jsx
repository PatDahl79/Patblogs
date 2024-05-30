import React, { useContext } from 'react'
import myContext from '../context/myContext';
import Layout from '../components/Layout';
import Image from '../assets/P3.png';

function AllBlogs() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto max-w-7xl ">
                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h1 className=' text-center text-2xl font-bold'
                            style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                            All Blogs
                        </h1>
                    </div>
          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
                        {/* Card 1  */}
                        <div className="p-4 md:w-1/3" >
                            <div
                                style={{
                                    background: mode === 'dark'
                                        ? 'rgb(30, 41, 59)'
                                        : 'white',
                                    borderBottom: mode === 'dark'
                                        ?
                                        ' 4px solid rgb(226, 232, 240)'
                                        : ' 4px solid rgb(30, 41, 59)'
                                }}
                                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                ${mode === 'dark'
                                    ? 'shadow-gray-700'
                                    : 'shadow-xl'
                                    } 
                                rounded-xl overflow-hidden`} 
                            >
                                {/* Blog Thumbnail  */}
                                <img className=" w-full" src={Image} alt="blog" />

                                {/* Top Items  */}
                                <div className="p-6">
                                    {/* Blog Date  */}
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'25 Sep 2023'}
                                    </h2>

                                    {/* Blog Auhtor  */}
                                    <h1 className="auhtor-font text-sm font-bold text-gray-400 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'Lash Ericsson'}
                                    </h1>

                                    {/* Blog category  */}
                                    <h1 className="category-font text-lg font-bold text-gray-900 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'General ADHD'}
                                    </h1>

                                    {/* Blog Title  */}
                                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'Thriving with ADHD: Stories of Resilience and Success'}
                                    </h1>

                                    {/* Blog Description  */}
                                    <p className="leading-relaxed mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        Share inspiring stories and testimonials from individuals with ADHD who have overcome challenges, pursued their passions, and achieved personal and professional success, offering hope and encouragement to others on their ADHD journey.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2  */}
                        <div className="p-4 md:w-1/3" >
                            <div
                                style={{
                                    background: mode === 'dark'
                                        ? 'rgb(30, 41, 59)'
                                        : 'white',
                                    borderBottom: mode === 'dark'
                                        ?
                                        ' 4px solid rgb(226, 232, 240)'
                                        : ' 4px solid rgb(30, 41, 59)'
                                }}
                                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                ${mode === 'dark'
                                    ? 'shadow-gray-700'
                                    : 'shadow-xl'
                                    } 
                                rounded-xl overflow-hidden`} 
                            >
                                {/* Blog Thumbnail  */}
                                <img className=" w-full" src={Image} alt="blog" />

                                {/* Top Items  */}
                                <div className="p-6">
                                    {/* Blog Date  */}
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'25 Sep 2023'}
                                    </h2>

                                    {/* Blog Auhtor  */}
                                    <h1 className="auhtor-font text-sm font-bold text-gray-400 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'Daniel Karlsson'}
                                    </h1>

                                     {/* Blog category  */}
                                     <h1 className="category-font text-lg font-bold text-gray-900 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'Men ADHD'}
                                    </h1>

                                    {/* Blog Title  */}
                                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'Navigating ADHD as an Adult Male: Tips for Success'}
                                    </h1>

                                    {/* Blog Description  */}
                                    <p className="leading-relaxed mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        This post explores unique challenges faced by adult men with ADHD and offers practical tips and strategies for managing symptoms and thriving in various areas of life
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="p-4 md:w-1/3" >
                            <div
                                style={{
                                    background: mode === 'dark'
                                        ? 'rgb(30, 41, 59)'
                                        : 'white',
                                    borderBottom: mode === 'dark'
                                        ?
                                        ' 4px solid rgb(226, 232, 240)'
                                        : ' 4px solid rgb(30, 41, 59)'
                                }}
                                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                ${mode === 'dark'
                                    ? 'shadow-gray-700'
                                    : 'shadow-xl'
                                    } 
                                rounded-xl overflow-hidden`} 
                            >
                                {/* Blog Thumbnail  */}
                                <img className=" w-full" src={Image} alt="blog" />

                                {/* Top Items  */}
                                <div className="p-6">
                                    {/* Blog Date  */}
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'25 Sep 2023'}
                                    </h2>

                                    {/* Blog Auhtor  */}
                                    <h1 className="auhtor-font text-sm font-bold text-gray-400 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'Jane Smith'}
                                    </h1>

                                    {/* Blog category  */}
                                    <h1 className="category-font text-lg font-bold text-gray-900 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'Women ADHD'}
                                    </h1>

                                    {/* Blog Title  */}
                                    <h2 className="title-font text-lg font-bold text-gray-500 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'Emotional Regulation and ADHD: Coping Strategies for Women'}
                                    </h2>

                                    {/* Blog Description  */}
                                    <p className="leading-relaxed mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        Examine the connection between ADHD and emotional dysregulation in women, providing insights into recognizing and managing intense emotions, impulsivity, and mood swings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="p-4 md:w-1/3" >
                            <div
                                style={{
                                    background: mode === 'dark'
                                        ? 'rgb(30, 41, 59)'
                                        : 'white',
                                    borderBottom: mode === 'dark'
                                        ?
                                        ' 4px solid rgb(226, 232, 240)'
                                        : ' 4px solid rgb(30, 41, 59)'
                                }}
                                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                ${mode === 'dark'
                                    ? 'shadow-gray-700'
                                    : 'shadow-xl'
                                    } 
                                rounded-xl overflow-hidden`} 
                            >
                                {/* Blog Thumbnail  */}
                                <img className=" w-full" src={Image} alt="blog" />

                                {/* Top Items  */}
                                <div className="p-6">
                                    {/* Blog Date  */}
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'25 Sep 2023'}
                                    </h2>

                                  {/* Blog Auhtor  */}
                                  <h1 className="auhtor-font text-sm font-bold text-gray-400 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'Maja Andersson'}
                                    </h1>

                                    {/* Blog category  */}
                                    <h1 className="category-font text-lg font-bold text-gray-900 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'KIds ADHD'}
                                    </h1>

                                    {/* Blog Title  */}
                                    <h2 className="title-font text-lg font-bold text-gray-500 mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        {'Helping Children with ADHD Build Self-Esteem and Confidence'}
                                    </h2>

                                    {/* Blog Description  */}
                                    <p className="leading-relaxed mb-3" style={{
                                        color: mode === 'dark'
                                            ? 'rgb(226, 232, 240)'
                                            : ' rgb(30, 41, 59)'
                                    }}>
                                        Explore the impact of ADHD on children's self-esteem and provide guidance on nurturing resilience, celebrating strengths, and cultivating a positive sense of self-worth in children with ADHD.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </Layout >
    )
}

export default AllBlogs