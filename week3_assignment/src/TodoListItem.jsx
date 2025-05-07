import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 5px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 16px;
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`;

const Button = styled.button`
  background:rgb(255, 92, 94);
  border: none;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
`;

function TodoListItem({ todo, onToggle, onRemove }) {
  const { id, text, checked } = todo;

  return (
    <Item>
      <Label>
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={() => onToggle(id)} 
        />
        <Text checked={checked}>{text}</Text>
      </Label>
      <Button onClick={() => onRemove(id)}>삭제</Button>
    </Item>
  );
}

export default TodoListItem;
