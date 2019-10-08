import React from 'react';
import { connect } from 'react-redux';
import { increaseVote, decreaseVote } from '../actions/charsActions';

const CharCard = props => {

  const { char } = props;

  return (
    <div className='card'>
      <h2>Name: { char.name }</h2>
      <p>Votes: { char.votes }</p>
      <img src={ char.img } alt={ char.name }></img>
      <br />
      <button onClick={() => {
        props.increaseVote(char.id)
      }}>
        Upvote
      </button>
      <button onClick={() => {
        props.decreaseVote(char.id)
      }}>
        Downvote
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    increaseVote: id => dispatch(increaseVote(id)),
    decreaseVote: id => dispatch(decreaseVote(id))
  }
}

export default connect(null, mapDispatchToProps)(CharCard);