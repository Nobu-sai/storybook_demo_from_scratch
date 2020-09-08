import React from 'react';
import TodoContainer from '../TodoContainer.js'

export default {
  title: 'TodoContainer',
  component: TodoContainer,
};

export const normalTodoContainer = () => <TodoContainer todos={["from", "TodoContainer.stories.js"]} />;