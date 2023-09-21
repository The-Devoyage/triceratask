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
  authenticate_finish: Authenticate_Success;
  authenticate_start: Scalars['String']['output'];
  create_todo: Todo;
  create_todo_history: Todo_History;
  register_finish: Scalars['Boolean']['output'];
  register_start: Scalars['String']['output'];
  update_todo_historys: Array<Todo_History>;
  update_todos: Array<Todo>;
};


export type MutationAuthenticate_FinishArgs = {
  identifier: Scalars['String']['input'];
  public_key: Scalars['String']['input'];
};


export type MutationAuthenticate_StartArgs = {
  identifier: Scalars['String']['input'];
};


export type MutationCreate_TodoArgs = {
  create_todo_input: Create_Todo_Input;
};


export type MutationCreate_Todo_HistoryArgs = {
  create_todo_history_input: Create_Todo_History_Input;
};


export type MutationRegister_FinishArgs = {
  identifier: Scalars['String']['input'];
  public_key: Scalars['String']['input'];
};


export type MutationRegister_StartArgs = {
  identifier: Scalars['String']['input'];
};


export type MutationUpdate_Todo_HistorysArgs = {
  update_todo_historys_input: Update_Todo_Historys_Input;
};


export type MutationUpdate_TodosArgs = {
  update_todos_input: Update_Todos_Input;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  get_todo: Todo;
  get_todo_history: Todo_History;
  get_todo_historys: Array<Todo_History>;
  get_todos: Array<Todo>;
};


export type QueryGet_TodoArgs = {
  get_todo_input: Get_Todo_Input;
};


export type QueryGet_Todo_HistoryArgs = {
  get_todo_history_input: Get_Todo_History_Input;
};


export type QueryGet_Todo_HistorysArgs = {
  get_todo_historys_input: Get_Todo_Historys_Input;
};


export type QueryGet_TodosArgs = {
  get_todos_input: Get_Todos_Input;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type Authenticate_Success = {
  __typename?: 'authenticate_success';
  token: Scalars['String']['output'];
  user_uuid: Scalars['String']['output'];
};

export type Create_Todo_History_Input = {
  created_by: Scalars['String']['input'];
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  property: Scalars['String']['input'];
};

export type Create_Todo_Input = {
  completed: Scalars['Boolean']['input'];
  created_by: Scalars['String']['input'];
  description: Scalars['String']['input'];
  goal_date?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updated_by: Scalars['String']['input'];
};

export type Get_Todo_History_Input = {
  created_by?: InputMaybe<Scalars['String']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Historys_Input = {
  created_by?: InputMaybe<Scalars['String']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todos_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Todo = {
  __typename?: 'todo';
  completed: Scalars['Boolean']['output'];
  completed_at?: Maybe<Scalars['String']['output']>;
  completed_by?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  created_by: Scalars['String']['output'];
  description: Scalars['String']['output'];
  goal_date?: Maybe<Scalars['String']['output']>;
  history: Array<Todo_History>;
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};


export type TodoHistoryArgs = {
  history: Get_Todo_Historys_Input;
};

export type Todo_History = {
  __typename?: 'todo_history';
  created_at: Scalars['String']['output'];
  created_by: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  new_value?: Maybe<Scalars['String']['output']>;
  old_value?: Maybe<Scalars['String']['output']>;
  property: Scalars['String']['output'];
  todo_uuid: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type Update_Todo_Historys_Input = {
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
  query: Update_Todo_Historys_Query_Input;
};

export type Update_Todo_Historys_Query_Input = {
  created_by?: InputMaybe<Scalars['String']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todos_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  query: Update_Todos_Query_Input;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todos_Query_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};
