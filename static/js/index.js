
import Composer from '../../src/index.ts'


const composer = new Composer(document.getElementById('root'))
window.$ = window.composer = composer
console.log(composer)
