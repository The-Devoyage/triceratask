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
  create_todo_access: Todo_Access;
  create_todo_history: Todo_History;
  create_user: User;
  create_user_connection: User_Connection;
  register_finish: Scalars['Boolean']['output'];
  register_start: Scalars['String']['output'];
  update_todo_accesss: Array<Todo_Access>;
  update_todo_historys: Array<Todo_History>;
  update_todos: Array<Todo>;
  update_user_connections: Array<User_Connection>;
  update_users: Array<User>;
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


export type MutationCreate_Todo_AccessArgs = {
  create_todo_access_input: Create_Todo_Access_Input;
};


export type MutationCreate_Todo_HistoryArgs = {
  create_todo_history_input: Create_Todo_History_Input;
};


export type MutationCreate_UserArgs = {
  create_user_input: Create_User_Input;
};


export type MutationCreate_User_ConnectionArgs = {
  create_user_connection_input: Create_User_Connection_Input;
};


export type MutationRegister_FinishArgs = {
  identifier: Scalars['String']['input'];
  public_key: Scalars['String']['input'];
};


export type MutationRegister_StartArgs = {
  identifier: Scalars['String']['input'];
};


export type MutationUpdate_Todo_AccesssArgs = {
  update_todo_accesss_input: Update_Todo_Accesss_Input;
};


export type MutationUpdate_Todo_HistorysArgs = {
  update_todo_historys_input: Update_Todo_Historys_Input;
};


export type MutationUpdate_TodosArgs = {
  update_todos_input: Update_Todos_Input;
};


export type MutationUpdate_User_ConnectionsArgs = {
  update_user_connections_input: Update_User_Connections_Input;
};


export type MutationUpdate_UsersArgs = {
  update_users_input: Update_Users_Input;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  get_todo: Todo;
  get_todo_access: Todo_Access;
  get_todo_accesss: Array<Todo_Access>;
  get_todo_history: Todo_History;
  get_todo_historys: Array<Todo_History>;
  get_todos: Array<Todo>;
  get_user: User;
  get_user_connection: User_Connection;
  get_user_connections: Array<User_Connection>;
  get_users: Array<User>;
};


export type QueryGet_TodoArgs = {
  get_todo_input: Get_Todo_Input;
};


export type QueryGet_Todo_AccessArgs = {
  get_todo_access_input: Get_Todo_Access_Input;
};


export type QueryGet_Todo_AccesssArgs = {
  get_todo_accesss_input: Get_Todo_Accesss_Input;
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


export type QueryGet_UserArgs = {
  get_user_input: Get_User_Input;
};


export type QueryGet_User_ConnectionArgs = {
  get_user_connection_input: Get_User_Connection_Input;
};


export type QueryGet_User_ConnectionsArgs = {
  get_user_connections_input: Get_User_Connections_Input;
};


export type QueryGet_UsersArgs = {
  get_users_input: Get_Users_Input;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type Authenticate_Success = {
  __typename?: 'authenticate_success';
  token: Scalars['String']['output'];
  user_identifier: Scalars['String']['output'];
  user_uuid: Scalars['String']['output'];
};

export type Create_Todo_Access_Input = {
  values: Create_Todo_Access_Values_Input;
};

export type Create_Todo_Access_Values_Input = {
  edit: Scalars['Boolean']['input'];
  revoked: Scalars['Boolean']['input'];
  todo_uuid: Scalars['String']['input'];
  user_uuid: Scalars['String']['input'];
  view: Scalars['Boolean']['input'];
};

export type Create_Todo_History_Input = {
  values: Create_Todo_History_Values_Input;
};

export type Create_Todo_History_Values_Input = {
  created_by: Scalars['String']['input'];
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  property: Scalars['String']['input'];
};

export type Create_Todo_Input = {
  values: Create_Todo_Values_Input;
};

export type Create_Todo_Values_Input = {
  completed: Scalars['Boolean']['input'];
  created_by: Scalars['String']['input'];
  description: Scalars['String']['input'];
  goal_date?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updated_by: Scalars['String']['input'];
};

export type Create_User_Connection_Input = {
  values: Create_User_Connection_Values_Input;
};

export type Create_User_Connection_Values_Input = {
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  created_by: Scalars['String']['input'];
  identifier: Scalars['String']['input'];
  updated_by: Scalars['String']['input'];
  user_uuid: Scalars['String']['input'];
};

export type Create_User_Input = {
  values: Create_User_Values_Input;
};

export type Create_User_Values_Input = {
  identifier: Scalars['String']['input'];
  last_active?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Access_Input = {
  query: Get_Todo_Access_Query_Input;
};

export type Get_Todo_Access_Query_Input = {
  AND?: InputMaybe<Array<Get_Todo_Access_Query_Input>>;
  OR?: InputMaybe<Array<Get_Todo_Access_Query_Input>>;
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  view?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Todo_Accesss_Input = {
  query: Get_Todo_Accesss_Querys_Input;
};

export type Get_Todo_Accesss_Querys_Input = {
  AND?: InputMaybe<Array<Get_Todo_Accesss_Querys_Input>>;
  OR?: InputMaybe<Array<Get_Todo_Accesss_Querys_Input>>;
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  view?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Todo_History_Input = {
  query: Get_Todo_History_Query_Input;
};

export type Get_Todo_History_Query_Input = {
  AND?: InputMaybe<Array<Get_Todo_History_Query_Input>>;
  OR?: InputMaybe<Array<Get_Todo_History_Query_Input>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Historys_Input = {
  query: Get_Todo_Historys_Querys_Input;
};

export type Get_Todo_Historys_Querys_Input = {
  AND?: InputMaybe<Array<Get_Todo_Historys_Querys_Input>>;
  OR?: InputMaybe<Array<Get_Todo_Historys_Querys_Input>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Input = {
  query: Get_Todo_Query_Input;
};

export type Get_Todo_Query_Input = {
  AND?: InputMaybe<Array<Get_Todo_Query_Input>>;
  OR?: InputMaybe<Array<Get_Todo_Query_Input>>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todos_Input = {
  query: Get_Todos_Querys_Input;
};

export type Get_Todos_Querys_Input = {
  AND?: InputMaybe<Array<Get_Todos_Querys_Input>>;
  OR?: InputMaybe<Array<Get_Todos_Querys_Input>>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_User_Connection_Input = {
  query: Get_User_Connection_Query_Input;
};

export type Get_User_Connection_Query_Input = {
  AND?: InputMaybe<Array<Get_User_Connection_Query_Input>>;
  OR?: InputMaybe<Array<Get_User_Connection_Query_Input>>;
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  connected_user_uuid?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_User_Connections_Input = {
  query: Get_User_Connections_Querys_Input;
};

export type Get_User_Connections_Querys_Input = {
  AND?: InputMaybe<Array<Get_User_Connections_Querys_Input>>;
  OR?: InputMaybe<Array<Get_User_Connections_Querys_Input>>;
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  connected_user_uuid?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_User_Input = {
  query: Get_User_Query_Input;
};

export type Get_User_Query_Input = {
  AND?: InputMaybe<Array<Get_User_Query_Input>>;
  OR?: InputMaybe<Array<Get_User_Query_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Users_Input = {
  query: Get_Users_Querys_Input;
};

export type Get_Users_Querys_Input = {
  AND?: InputMaybe<Array<Get_Users_Querys_Input>>;
  OR?: InputMaybe<Array<Get_Users_Querys_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Todo = {
  __typename?: 'todo';
  access: Array<Todo_Access>;
  completed: Scalars['Boolean']['output'];
  completed_at?: Maybe<Scalars['String']['output']>;
  completed_by?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  created_by: User;
  description: Scalars['String']['output'];
  goal_date?: Maybe<Scalars['String']['output']>;
  history: Array<Maybe<Todo_History>>;
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};


export type TodoAccessArgs = {
  access: Get_Todo_Accesss_Input;
};


export type TodoCreated_ByArgs = {
  created_by: Get_User_Input;
};


export type TodoHistoryArgs = {
  history: Get_Todo_Historys_Input;
};

export type Todo_Access = {
  __typename?: 'todo_access';
  edit: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  revoked: Scalars['Boolean']['output'];
  todo_id: Todo;
  user_uuid: User;
  uuid: Scalars['String']['output'];
  view: Scalars['Boolean']['output'];
};


export type Todo_AccessTodo_IdArgs = {
  todo_id: Get_Todo_Input;
};


export type Todo_AccessUser_UuidArgs = {
  user_uuid: Get_User_Input;
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

export type Update_Todo_Accesss_Input = {
  query: Update_Todo_Accesss_Query_Input;
  values: Update_Todo_Accesss_Values_Input;
};

export type Update_Todo_Accesss_Query_Input = {
  AND?: InputMaybe<Array<Update_Todo_Accesss_Query_Input>>;
  OR?: InputMaybe<Array<Update_Todo_Accesss_Query_Input>>;
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  view?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Todo_Accesss_Values_Input = {
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  view?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Todo_Historys_Input = {
  query: Update_Todo_Historys_Query_Input;
  values: Update_Todo_Historys_Values_Input;
};

export type Update_Todo_Historys_Query_Input = {
  AND?: InputMaybe<Array<Update_Todo_Historys_Query_Input>>;
  OR?: InputMaybe<Array<Update_Todo_Historys_Query_Input>>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todo_Historys_Values_Input = {
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  property?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todos_Input = {
  query: Update_Todos_Query_Input;
  values: Update_Todos_Values_Input;
};

export type Update_Todos_Query_Input = {
  AND?: InputMaybe<Array<Update_Todos_Query_Input>>;
  OR?: InputMaybe<Array<Update_Todos_Query_Input>>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todos_Values_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Update_User_Connections_Input = {
  query: Update_User_Connections_Query_Input;
  values: Update_User_Connections_Values_Input;
};

export type Update_User_Connections_Query_Input = {
  AND?: InputMaybe<Array<Update_User_Connections_Query_Input>>;
  OR?: InputMaybe<Array<Update_User_Connections_Query_Input>>;
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  connected_user_uuid?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_User_Connections_Values_Input = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Users_Input = {
  query: Update_Users_Query_Input;
  values: Update_Users_Values_Input;
};

export type Update_Users_Query_Input = {
  AND?: InputMaybe<Array<Update_Users_Query_Input>>;
  OR?: InputMaybe<Array<Update_Users_Query_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Users_Values_Input = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'user';
  authentication_state?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  last_active?: Maybe<Scalars['String']['output']>;
  passkey?: Maybe<Scalars['String']['output']>;
  profile_img?: Maybe<Scalars['String']['output']>;
  registration_state?: Maybe<Scalars['String']['output']>;
  share_active?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type User_Connection = {
  __typename?: 'user_connection';
  accepted: Scalars['Boolean']['output'];
  accepted_at?: Maybe<Scalars['String']['output']>;
  connected_user_uuid?: Maybe<User>;
  created_at: Scalars['String']['output'];
  created_by: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  identifier: Scalars['String']['output'];
  revoked: Scalars['Boolean']['output'];
  revoked_at?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
  updated_at: Scalars['String']['output'];
  updated_by: Scalars['String']['output'];
  user_uuid: User;
  uuid: Scalars['String']['output'];
};


export type User_ConnectionConnected_User_UuidArgs = {
  connected_user_uuid: Get_User_Input;
};


export type User_ConnectionUser_UuidArgs = {
  user_uuid: Get_User_Input;
};
