import React from 'react'

class Feedback extends React.Component {
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
                <div>
                <h3>Please leave feedback</h3>
                <button onClick={this.handleGoodIncrement}>good</button>
                <button onClick={this.handleNeutralIncrement}>neutral</button>
                <button onClick={this.handleBadIncrement}>bad</button></div>
                <div>
                <h3>Statistics</h3>
                {this.state.good > 0 && <p>Good: {this.state.good}</p>}
                {this.state.neutral > 0 && <p>Neutral: {this.state.neutral}</p>}
                {this.state.bad > 0 && <p>Bad: {this.state.bad}</p>}
                {this.countTotalFeedback() > 0 && <p>Total: {this.countTotalFeedback()}</p>}
                {this.countPositiveFeedbackPercentage() > 0 && <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>}
                {this.countTotalFeedback() === 0 && <p>There is no feedback</p>}
                </div>
            </div>
        )
    }

}
export default Feedback