import React from 'react'
import "./index.css"

export default function App() {
  const [title, setTitle] = React.useState("")
  const [subtitle, setSubTitle] = React.useState("")
  const [posts, setPosts] = React.useState([])

  function addButton() {
    if (title && subtitle) {
      setPosts([...posts, {
        title: title,
        subTitle: subtitle,
      }])
      setTitle("")
      setSubTitle("")
    } else {
      alert("Title yoki subtitleni kriting !")
    }
  }

  console.log(posts)


  return (
    <div className='app'>
      <div className='app-form'>
        <input type="text" placeholder='sarlavha' onChange={(event) => setTitle(event.target.value)} />
        <input type="text" placeholder='matn' onChange={(event) => setSubTitle(event.target.value)} />
        <button onClick={addButton}>Qo'shish</button>
      </div>
      <div className='app-content'>
        {
          posts.map(item => (
            <div className='app-content__item'>
              <h1>{item.title}</h1>
              <p>{item.subTitle}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
