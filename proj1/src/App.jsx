import { useState } from 'react'
import reactLogo from './assets/react.svg'
import componentImg from './assets/code-solid.svg'
import jsxImg from './assets/sitemap-solid.svg'
import propsImg from './assets/filter-solid.svg'
import stateImg from './assets/code-commit-solid.svg'
import viteLogo from '/vite.svg'
import './main.scss'

const reactDescriptions = ['Fundamental', 'Crucial','Core']

function getRandomInt(max){
  return Math.floor(Math.random()*(max+1))
}

function Header(){
  return (
    <header>
      <div class="row-down-al-center">
      <img src={viteLogo} alt="test" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any
          app you are going to build!
        </p>
      </div>
        
      </header>

  )
}

function CoreConcept(props){
  return(
    <li class="row-down-al-center">
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  

  return (
    <div>
    <div class="row-center vh-100">
    
    <div class="row-down-al-center">
      <div class="col-1">
        <Header/>
      </div>
      <div class="col-1 width-80">
        <div class="row-center">
          <div className="col-1">
          <CoreConcept
          title="Components"
          description="ReactJS components are reusable, self-contained UI building blocks."
          img={componentImg}
         />
          </div>
          <div className="col-1">
          <CoreConcept
          title="JSX"
          description="ReactJS JSX allows writing HTML-like syntax in JavaScript."
          img={jsxImg}
         />
          </div>
          <div className="col-1">
          <CoreConcept
          title="Props"
          description="ReactJS props pass data between components, enabling customization."
          img={propsImg}
         />
          </div>
          <div className="col-1">
          <CoreConcept
          title="State"
          description="ReactJS state manages dynamic data within a component."
          img={stateImg}
         />
          </div>
          
          
          
          
          
        </div>
      </div>
      
      <div class="col-1">
        <main>
          <h2>
            Time to get started!
          </h2>
        </main>
      </div>

    </div>
    
    </div>
  

    </div>
  )
}

export default App
