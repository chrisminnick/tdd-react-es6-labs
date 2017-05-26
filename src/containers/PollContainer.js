import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton.js';


class PollContainer extends React.Component {

    render(){

        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        var questionsArray = this.props.questions;
        if (this.props.questions) {
            var questionsOutput = questionsArray.map(function (question, questionNumber) {
                return (
                    <div key={`question-number-${questionNumber}`}>
                        <PollQuestion text={question.question}/>
                        <RadioButtonGroup
                            name={questionNumber}
                            checkedValue={this.props.checkedValue[questionNumber]}
                            choices={question.choices}
                            onChange={this.props.selectAnswer}/>
                    </div>
                );

            }.bind(this));
        }
        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text="Welcome to the Poll!" />
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">
                        <form>
                            {questionsOutput}
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>

            </div>
        );
    }

}


export default PollContainer;