import classNames from 'classnames'
import { useState } from 'react'
import useFollow from '../../hooks/useFollow'

export default function FollowBtn({ userId }) {
    const { isFollowing, toggleFollow } = useFollow({ userId })
  
    return (
      <Container>
        <button
          className={classNames(isFollowing ? 'following' : 'not-following')}
          onClick={toggleFollow}
        >
          {isFollowing ? (
            <div className="follow-text">
              <span className="follow-text__following">Following</span>
              <span className="follow-text__unfollow">Unfollow</span>
            </div>
          ) : (
            'Follow'
          )}
        </button>
      </Container>
    )
  }