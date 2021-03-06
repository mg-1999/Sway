import React from 'react/addons';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.getIn(['myVote', 'entry']),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(
    mapStateToProps,
    actionCreators
)(Voting);
// this is the connected component, doesn't mutate the above component, returns a new one that is synced to redux store state. the dumb one above relies solely on props to change itself

//passing in actioncreators passes in a vote prop into Voting which dispatches the action to the store