import {useState} from 'react'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },
  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },
  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const BrowserHistory = () => {
  const [historyList, setHistoryList] = useState(initialHistoryList)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = event => {
    setSearchQuery(event.target.value)
  }

  const handleDeleteHistory = id => {
    const updatedHistoryList = historyList.filter(item => item.id !== id)
    setHistoryList(updatedHistoryList)
  }

  const filteredHistoryList = historyList.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="app-container">
      <div className="search-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/app-logo-img.png"
          alt="app logo"
        />
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <img
          className="search-icon"
          src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          alt="search"
        />
      </div>

      {filteredHistoryList.length === 0 ? (
        <p className="no-history">There is no history to show</p>
      ) : (
        <ul className="history-list">
          {filteredHistoryList.map(historyItem => (
            <li className="history-item" key={historyItem.id}>
              <div className="history-item-details">
                <img
                  src={historyItem.logoUrl}
                  alt="domain logo"
                  className="history-item-logo"
                />
                <div className="history-item-info">
                  <p className="history-item-title">{historyItem.title}</p>
                  <p className="history-item-domain">{historyItem.domainUrl}</p>
                  <p className="history-item-time">
                    {historyItem.timeAccessed}
                  </p>
                </div>
              </div>
              <button
                className="delete-button"
                data-testid="delete"
                onClick={() => handleDeleteHistory(historyItem.id)}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                  className="delete-icon"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BrowserHistory
