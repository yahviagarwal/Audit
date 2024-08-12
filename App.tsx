import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;  // Ensure the container takes up the full viewport height
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const Column1 = styled.div`
  flex: 0 0 70%; // Flex-basis 70% to control column width
  max-width: 70%;
  padding: 10px;
  box-sizing: border-box;
`;

const Column2 = styled.div`
  flex: 0 0 30%; // Flex-basis 30% to control column width
  max-width: 30%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Form = styled.form`
  fieldset {
    margin-bottom: 15px;
  }
`;

const App: React.FC = () => (
  <Container>
    <Row>
      <Column1>
        <h1>Urban Company</h1>
        <p>Hello supervisor, please inspect the pictures!</p>
        <InspectionForm />
      </Column1>
      <Column2>
        <h1>Before:</h1>
        <Image src="Dirty.jpeg" alt="Dirty Glass" />
        <h1>After:</h1>
        <Image src="clean.jpeg" alt="Clean Glass" />
      </Column2>
    </Row>
  </Container>
);

const InspectionForm: React.FC = () => (
  <Form>
    <Question 
      legend="Were there any noticeable streaks or smudges before the cleaning?" 
      name="Q1" 
    />
    <Question 
      legend="Does the glass look brighter and more transparent now?" 
      name="Q2" 
    />
    <Question 
      legend="Does the glass appear to be free of dust and fingerprints?" 
      name="Q3" 
    />
    <Question 
      legend="Did the cleaner reach all of the corners and edges of the glass?" 
      name="Q4" 
    />
    <Question
      legend="Can you see through the glass without any distortions?" 
      name="Q5" 
    />
    <br />
    <input type="submit" value="Submit" />
  </Form>
);

interface QuestionProps {
  legend: string;
  name: string;
}

const Question: React.FC<QuestionProps> = ({ legend, name }) => (
  <fieldset>
    <legend>{legend}</legend>
    <input type="radio" id={`${name}-yes`} name={name} value="YES" />
    <label htmlFor={`${name}-yes`}>Yes</label><br />
    <input type="radio" id={`${name}-no`} name={name} value="NO" />
    <label htmlFor={`${name}-no`}>No</label><br />
  </fieldset>
);

interface ImageProps {
  src: string;
  alt: string;
}

const Image = styled.img<ImageProps>`
  width: 100%; // Ensure images take up full column width
  height: 50%; // Maintain aspect ratio
`;

export default App;
