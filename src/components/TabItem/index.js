// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickChangeTab = () => {
    updateActiveTabId(tabId)
  }

  const activeClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`button-styling ${activeClassName}`}
        onClick={onClickChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
