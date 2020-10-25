import './index.css'
var el = document.createElement('div');
el.innerHTML = 'hi,welcome to data structor linkedlist page !';
document.body.appendChild(el)
if(process.env.NODE_ENV === 'production'){
    console.log('环境：i am production');
    
}
console.log('环境process.env:',process.env,'环境变量NODE_ENV:',process.env.NODE_ENV);
