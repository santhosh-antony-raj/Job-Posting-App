import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Getjob = () => {
    const [getjob, setgetjob] = useState([]);

    useEffect(()=>{
        axios.get("https://localhost:8080/getJobs")
        .then(Response=>{setgetjob(Response.data);})
        .catch(Error=>{console.log(Error);})
    },[])
  return (
    <div>
        <body className='bg-secondary'>
        <header className='sticky-top'>
            <div className='row bg-dark px-8 p-3 text-white'>
        
        <div className='col-12 col-md-6'>
        <h1>FINTECH</h1>
        </div>
        <nav className='col-12 col-md-6 mt-3'>
            <ul className='list-inline d-flex justify-content-md-end justify-content-start'>
                <li className='text-white text-decoration-none list-inline-item'>HOME</li>
                <li className='text-white text-decoration-none list-inline-item'>CAREERS</li>
                <li className='text-white text-decoration-none list-inline-item'>ABOUT</li>
                
            </ul>
        </nav>
        </div>
        </header>
        <main className='container mt-4'>
        <div class="row">
            
            <div class="col-12 col-md-4 col-sm-6 ">
                <img class="img-fluid rounded" src="https://picsum.photos/300/200" alt=""/>
                <h3>Post Title 1</h3>
                <p>Date: Feb 15,2024</p>
                <p>This is the content of post 1</p>
            </div>
            <div class="col-12 col-md-4 col-sm-6  ">
                <img class="img-fluid rounded" src="https://picsum.photos/300/200" alt=""/>
                <h3>Post Title 2</h3>
                <p>Date: Feb 16,2024</p>
                <p>This is the content of post 2</p>
            </div>
            <div class="col-12 col-md-4 col-sm-6  ">
                <img class="img-fluid rounded" src="https://picsum.photos/300/200" alt=""/>
                <h3>Post Title 3</h3>
                <p>Date: Feb 17,2024</p>
                <p>This is the content of post 3</p>
            </div>

       
            <div class="col-12 col-md-4 col-sm-6  ">
                <img class="img-fluid rounded" src="https://picsum.photos/300/200" alt=""/>
                <h3>Post Title 4</h3>
                <p>Date: Feb 15,2024</p>
                <p>This is the content of post 1</p>
            </div>
            <div class="col-12 col-md-4 col-sm-6 ">
                <img class="img-fluid rounded" src="https://picsum.photos/300/200" alt=""/>
                <h3>Post Title 5</h3>
                <p>Date: Feb 16,2024</p>
                <p>This is the content of post 2</p>
            </div>
            <div class="col-12 col-md-4 col-sm-6 ">
                <img class="img-fluid rounded" src="https://picsum.photos/300/200" alt=""/>
                <h3>Post Title 6</h3>
                <p>Date: Feb 17,2024</p>
                <p>This is the content of post 3</p>
            </div>

       </div>
        </main>
        </body>
       

    </div>

  )
}

export default Getjob;