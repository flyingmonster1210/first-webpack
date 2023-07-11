// console.log('hello webpack')

import { getBlogPosts } from "./data"
import justAnImage from './asset/images/1.JPG'
import './style.css'
import './test/date/printDate'

const blogs = getBlogPosts()
const ul = document.createElement('ul')
blogs.forEach((blog) => {
  const li = document.createElement('li')
  li.innerText = blog
  ul.appendChild(li)
})

document.body.appendChild(ul)

const image = document.createElement('img')
image.src = justAnImage
document.body.prepend(image)

const h1 = document.createElement('h1')
h1.innerText = 'Just a test for yarn start'
document.body.prepend(h1)






