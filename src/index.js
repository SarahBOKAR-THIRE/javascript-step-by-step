import _ from 'lodash'
import '../src/scss/styles.scss'//Import scss

function component(){
  const element = document.createElement('div')
  element.classList.add('container')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ') 
  return element ;
}
  
document.body.appendChild(component())