export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  create_todo: Todo;
  register_finish: Scalars['Boolean']['output'];
  register_start: Scalars['String']['output'];
  update_todos: Array<Todo>;
};


export type MutationCreate_TodoArgs = {
  create_todo_input: Create_Todo_Input;
};


export type MutationRegister_FinishArgs = {
  identifier: Scalars['String']['input'];
  public_key: Scalars['String']['input'];
};


export type MutationRegister_StartArgs = {
  identifier: Scalars['String']['input'];
};


export type MutationUpdate_TodosArgs = {
  update_todos_input: Update_Todos_Input;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  get_todo: Todo;
  get_todos: Array<Todo>;
};


export type QueryGet_TodoArgs = {
  get_todo_input: Get_Todo_Input;
};


export type QueryGet_TodosArgs = {
  get_todos_input: Get_Todos_Input;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type Create_Todo_Input = {
  completed: Scalars['Boolean']['input'];
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Get_Todo_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completed_at?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todos_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completed_at?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Todo = {
  __typename?: 'todo';
  completed: Scalars['Boolean']['output'];
  completed_at?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
};

export type Update_Todos_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  query: Update_Todos_Query_Input;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todos_Query_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completed_at?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};
