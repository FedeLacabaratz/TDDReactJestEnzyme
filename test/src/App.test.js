import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Todo, TodoForm } from "./App";

// Para poder correr tests en los componentes
configure({ adapter: new Adapter() })

describe("App", () => {

  describe('Testing the Todo Component', () => {
    it('should execute completeTodo function when I click on the button "complete"', () => {
      const completeTodo = jest.fn();
      const removeTodo = jest.fn();
      const index = 5;
      const todo = {
        isCompleted: true,
        text: 'lala',
      };
      const wrapper = shallow(
        <Todo
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          index={index}
          todo={todo}
        />
      );
      wrapper
        .find('button')
        .at(0)
        .simulate('click');

      expect(completeTodo.mock.calls).toEqual([[5]]);
    });

    it('should NOT execute removeTodo function when I click on the button "Complete"', () => {
      const completeTodo = jest.fn();
      const removeTodo = jest.fn();
      const index = 5;
      const todo = {
        isCompleted: true,
        text: 'lala',
      };
      const wrapper = shallow(
        <Todo
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          index={index}
          todo={todo}
        />
      );
      wrapper
        .find('button')
        .at(0)
        .simulate('click');

      expect(removeTodo.mock.calls).toEqual([]);
    });

    it('should execute removeTodo function when I click on the button "X"', () => {
      const completeTodo = jest.fn();
      const removeTodo = jest.fn();
      const index = 5;
      const todo = {
        isCompleted: true,
        text: 'lala',
      };
      const wrapper = shallow(
        <Todo
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          index={index}
          todo={todo}
        />
      );
      wrapper
        .find('button')
        .at(1)
        .simulate('click');

      expect(removeTodo.mock.calls).toEqual([[5]]);
    });

    it('should NOT execute completeTodo function when I click on the button "X"', () => {
      const completeTodo = jest.fn();
      const removeTodo = jest.fn();
      const index = 5;
      const todo = {
        isCompleted: true,
        text: 'lala',
      };
      const wrapper = shallow(
        <Todo
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          index={index}
          todo={todo}
        />
      );
      wrapper
        .find('button')
        .at(1)
        .simulate('click');

      expect(completeTodo.mock.calls).toEqual([]);
    });
  });

  describe('Testing the TodoForm component', () => {
    it('should execute addTodo and preventDefault when "TodoForm" form receives a value', () => {
      const addTodo = jest.fn();
      const prevent = jest.fn();
      const wrapper = shallow(
        <TodoForm
          addTodo={addTodo}
        />
      );
      wrapper
        .find('input')
        .simulate('change', { target: { value: 'mi nuevo todo!' } })
      wrapper
        .find('form')
        .simulate('submit', { preventDefault: prevent })

      expect(addTodo.mock.calls).toEqual([[ "mi nuevo todo!" ]]);
      expect(prevent.mock.calls).toEqual([[]]);
    });
  });
});
