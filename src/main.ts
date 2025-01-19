import './output.css'
import generator from './generator'

generator()

const body = document.querySelector('body'); 
const element = document.createElement('div'); 

element.textContent = "TOTOTOTOTTOTOTO"
element.classList.add("text-red-500")
body?.append(element)