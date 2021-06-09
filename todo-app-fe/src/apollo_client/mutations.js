import { gql } from '@apollo/client';

export const CREATE_TODO = gql `
    mutation CreateTodo($name: String!) {
        createTodo(name:$name)
        {todo{id,name}}
    }
`;