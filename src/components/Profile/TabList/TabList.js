import classNames from 'classnames'
import { useState } from 'react'
import './TabList.css'

const tabs = [
    {
      id: 'tweets',
      label: 'Tweets',
    },
    {
      id: 'tweet-replies',
      label: 'Tweets & replies',
    },
    {
      id: 'media',
      label: 'Media',
    },
    {
      id: 'likes',
      label: 'Likes',
    },
  ]
  
  export default function TabList() {
    const [activeTab, setActiveTab] = useState(tabs[0].id)
  
    return (
      <Container>
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.id)}
            className="tab"
            key={tab.id}
          >
            <span
              className={classNames(
                'tab__label',
                activeTab === tab.id && 'active'
              )}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </Container>
    )
  }