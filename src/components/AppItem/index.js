// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {imageUrl, appName} = eachApp
  return (
    <div>
      <li className="each-app">
        <img src={imageUrl} alt={appName} className="image-edit" />
        <p className="app-name">{appName}</p>
      </li>
    </div>
  )
}

export default AppItem
