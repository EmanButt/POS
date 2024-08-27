import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Teacherroute from '../Route/routing.js';
import './Teachersquizpage.css';

const TeacherQuizPage = () => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", "", "", ""]);
    const [correctAnswer, setCorrectAnswer] = useState("");

    // Function to handle input changes for question
    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    // Function to handle input changes for options
    const handleOptionChange = (index, e) => {
        const newOptions = [...options];
        newOptions[index] = e.target.value;
        setOptions(newOptions);
    };

    // Function to handle select changes for correct answer
    const handleAnswerChange = (e) => {
        setCorrectAnswer(e.target.value);
    };

    // Function to clear all fields
    const clearFields = () => {
        setQuestion("");
        setOptions(["", "", "", ""]);
        setCorrectAnswer("");
    };

    // Function to save the current question
    const saveQuestion = async () => {
        // Validate input fields
        if (!question || !options.every(option => option.trim()) || !correctAnswer) {
            toast.error("Please fill in all required fields.");
            return;
        }

        try {
            const data = {
                question: question,
                options: options,
                correctAnswer: correctAnswer
            };

            // Replace with your actual API endpoint
            const response = await axios.post(Teacherroute.teacherquiz, data);

            toast.success("Question saved successfully!");
            clearFields(); // Clear fields after successful submission
            console.log(response);
        } catch (error) {
            console.error('Error saving question:', error);
            toast.error("Failed to save question. Please try again.");
        }
    };

    return (
        <div className="add-quiz-question">
            <Toaster />
            <h2>Add Quiz Question</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="question">Question</label>
                    <input
                        type="text"
                        id="question"
                        value={question}
                        onChange={handleQuestionChange}
                        placeholder="Enter the question"
                        required
                    />
                </div>

                <div className="options-container">
                    {options.map((option, index) => (
                        <div className="option-group" key={index}>
                            <div className="form-group">
                                <label htmlFor={`option${index + 1}`}>{`Option ${index + 1}`}</label>
                                <input
                                    type="text"
                                    id={`option${index + 1}`}
                                    value={option}
                                    onChange={(e) => handleOptionChange(index, e)}
                                    placeholder={`Option ${index + 1}`}
                                    required
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="form-group">
                    <label htmlFor="correctAnswer">Correct Answer</label>
                    <select
                        id="correctAnswer"
                        value={correctAnswer}
                        onChange={handleAnswerChange}
                        required
                    >
                        <option value="">Select the correct answer</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {`Option ${index + 1}`}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="button" onClick={saveQuestion}>Save Question</button>
            </form>
        </div>
    );
};

export default TeacherQuizPage;
