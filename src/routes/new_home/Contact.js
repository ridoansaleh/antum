import React, { useState } from 'react';
import { Container, FieldWrapper, Input, Label, TextArea, Button } from './styles/_contactStyle';

function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangeSubject = e => {
    setSubject(e.target.value);
  };
  const handleChangeMessage = e => {
    setMessage(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FieldWrapper>
          <Label>Email:</Label>
          <Input type="text" value={email} onChange={handleChangeEmail} />
        </FieldWrapper>
        <FieldWrapper>
          <Label>Subject</Label>
          <Input type="text" value={subject} onChange={handleChangeSubject} />
        </FieldWrapper>
        <FieldWrapper>
          <Label>Message</Label>
          <TextArea value={message} onChange={handleChangeMessage} />
        </FieldWrapper>
        <Button type="submit" value="Send" />
      </form>
    </Container>
  );
}

export default Contact;
