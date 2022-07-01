import React from 'react'
import PropTypes from 'prop-types'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Notification from './Notification'
import SectionTitle from './SectionTitle'

class Feedback extends React.Component {
    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number
    }
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    handleGoodIncrement = () => {
    this.setState((prevState) => {
    return {
        good: prevState.good + 1
    }
})
    }
    handleNeutralIncrement = () => {
        this.setState((prevState) => {
        return {
            neutral: prevState.neutral + 1
        }
    })
        }
        handleBadIncrement = () => {
            this.setState(prevState => {
            return {
                bad: prevState.bad + 1
            }
        })
            }
            countTotalFeedback = () => {
                return this.state.good + this.state.neutral + this.state.bad
            }
            countPositiveFeedbackPercentage = () => {
                return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)}
    render () {
        return (
            <div>
                <SectionTitle title="Please leave feedback">
                <FeedbackOptions 
                onGood={this.handleGoodIncrement} 
                onNeutral={this.handleNeutralIncrement} 
                onBad={this.handleBadIncrement}
                />
                </SectionTitle>
                <SectionTitle title="Statistics">
                <Statistics 
                onGood={this.state.good} 
                onNeutral={this.state.neutral}
                onBad={this.state.bad}
                />
                </SectionTitle>
                {this.countTotalFeedback() === 0 && <Notification message="There is no feedback"></Notification>}
            </div>
            
        )
    }

}
export default Feedback