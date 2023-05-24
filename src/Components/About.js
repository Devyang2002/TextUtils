import React,{useState} from 'react'

export default function About(props) {
    
      let myStyle = {
        color : props.mode==='dark'?'white':'#042743',
        backgroundColor : props.mode ==='dark'?'rgb(36 74 104)':'white'
      }
    
  return (
    <>
    <div className="container my-3" >
        <h1 style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
      <div class="accordion" id="accordionExample" style={myStyle}>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
      <div class="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
      <div class="accordion-body" style={myStyle}>
         TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters . Thus it is suitable for writting text with word/character limit.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        <strong>Browser Compatiable</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
      <div class="accordion-body" style={myStyle}>
        This word counter software works in any web browsers such as chrome, firefox, internet, explorer, safari, opera.It suits to count characters in facebook, blog, excel, document, pdf document, essays etc.
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
