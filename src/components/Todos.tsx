import React, { FC, useCallback, useState } from 'react';
import { Button } from './Button';
import { Input } from './Imput';

type Todo = {
    title: string;
    id: number;
}

const Todos: FC<{}> = () => {
  const [text, setText] = useState<string>('');
  const [filterText, setFilterText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChangeAddElementInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setText(event.target.value);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilterText(event.target.value);
  };

  const handleAdd = () => {
      setTodos([...todos, {title: text, id: todos.length + 1}])
  };

  const handleRemove = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Input
        customField="str"
        value={text}
        placeholder="Введите название нового поля"
        onChange={handleChangeAddElementInput}
      />
      <Button onClick={handleAdd}>Добавить</Button>

      <div>
        <Input
          customField="filter"
          placeholder="Фильтруем"
          onChange={handleFilter}
        />

        <ul>
            {
                todos
                    .filter((item: Todo) => item.title.includes(filterText))
                    .map(({title, id}) => (
                        <li key={id}>
                            <span>{title} ({id})</span>
                            <Button onClick={() => handleRemove(id)}>
                                Удалить
                            </Button>
                        </li>
                    ))
            }
        </ul>
      </div>
    </div>
  );
};

export {Todos};
