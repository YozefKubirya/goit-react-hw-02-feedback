import React, { Component } from "react"
import { Section } from "./Section/Section";
import { FeedBackOptions } from "./FeedBackOptions/FeedBackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification }from "./Notification/Notification";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleClick = (e) => {
    const { name } = e.target;
    this.setState({ [name]: this.state[name] + 1 });
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = Math.round((good / (good + neutral + bad)) * 100);
    return result;
  }
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state)
    return (
      <>
        <Section title={"Please leave feedback"}>
       <FeedBackOptions options={options} onLeaveFeedback={this.handleClick}/>
        </Section>
          <Section title={"Statistics"}>
          {this.countTotalFeedback() > 0 ?
    <Statistics good={good} neutral={neutral} bad={bad} positivePercentage={this.countPositiveFeedback()} total={this.countTotalFeedback()}>
            </Statistics> :
            <Notification title={"There is no feedback"}></Notification>} 
        </Section>
      </>
    )
  }

  
}
