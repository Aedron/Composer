
import Composer from '../../src/index.ts'


const composer = new Composer(document.getElementById('root'))
Object.defineProperty(window, '$', {
    value: composer
})
Object.defineProperty(window, 'composer', {
    value: composer
})
console.log(composer)
