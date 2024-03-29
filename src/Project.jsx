import React from 'react'
import './App.css'
import login from './assets/login.png'
import urlshortner from './assets/url-shortner.png'

function Project() {
  return (
    <>
    <div className='project-list' id='project'>
      <h3>Projects</h3>
      
        
        <div className='project ' >
        <div>
          Gmail-Clone<br/>
            <img src={login} width={280} height={125} className='mb-1'/>
            <br/>
          <a href='https://github.com/Sathishramesh1/GmailClone-FrontEnd.git' target='new'>
              <button>code</button>
            </a>&nbsp;
          <a href='https://gmail-clone96.netlify.app/' target='new'>
              <button>live site</button>
            </a>
            
        </div>
        <div>
          Url-Shortner<br/>
          <img src={urlshortner} width={280} height={125}  className='mb-1'/>
            <br/>
          <a href='https://github.com/Sathishramesh1/urlshortener-frontend.git' target='new'>
              <button>code</button>
            </a>&nbsp;
          <a href='https://url-shortner96.netlify.app/' target='new'>
              <button>live site</button>
            </a>
        </div>
          {/* <div>Simple Calculator using DOM

            <p>Simple Responsive Calculator created using vanilla javascript</p>
             <a href='https://64bcc8e1e2ad1d6d1a465291--stately-dragon-644ef7.netlify.app/' target='new'>
             <button>
              live site
             </button>
             </a>

          </div>
          <div>DOMmanipulation with forms
          <br/>
            <a href='https://brilliant-tapioca-4591f6.netlify.app/' target='new'>
              <button>live site</button>
            </a>
          </div>
          <div>Weather Application for REST Countries<br/>
          <a href='https://64c0fe73fa205c57282e9fb2--chimerical-brigadeiros-c06b52.netlify.app/' target='new'>
              <button>live site</button>
            </a>
          </div>
          <div>Todo List app
          <br/>
          <a href='https://rococo-fudge-127d07.netlify.app/' target='new'>
              <button>live site</button>
            </a>
          </div>
          <div>Blog site<br/>
          <a href='https://mellow-cascaron-db1ec5.netlify.app/' target='new'>
              <button>live site</button>
            </a>
          </div>
          <div>Basic CRUD Application REACT<br/>
          <a href='https://incredible-dragon-ed7fde.netlify.app/' target='new'>
              <button>live site</button>
            </a>
          </div>
          <div>Admin Dashboard for LIBRARY<br/>
          <a href='https://scintillating-sable-6977a5.netlify.app/' target='new'>
              <button>live site</button>
            </a>
          </div>
          <div>Ecommerce website<br/>
          <a href='https://effortless-hummingbird-73b405.netlify.app/' target='new'>
              <button>live site</button>
            </a>
          </div> */}

        </div>





    </div>
    
    </>
  )
}

export default Project