import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background:rgb(54, 105, 243);
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const onChange = e => setValue(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    onInsert(value);
    setValue('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input 
        placeholder="할 일을 입력하세요" 
        value={value} 
        onChange={onChange} 
      />
      <Button type="submit">추가</Button>
    </Form>
  );
}

export default TodoInsert;
