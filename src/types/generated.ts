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
  create_notification: Createone_Notification_Response;
  create_notification_message: Createone_Notification_Message_Response;
  create_send_email: Createone_Send_Email_Response;
  create_todo: Createone_Todo_Response;
  create_todo_access: Createone_Todo_Access_Response;
  create_todo_history: Createone_Todo_History_Response;
  create_user: Createone_User_Response;
  create_user_connection: Createone_User_Connection_Response;
  register_finish: Scalars['Boolean']['output'];
  register_start: Scalars['String']['output'];
  update_notification_messages: Updatemany_Notification_Message_Response;
  update_notifications: Updatemany_Notification_Response;
  update_send_email: Updateone_Send_Email_Response;
  update_send_emails: Updatemany_Send_Email_Response;
  update_todo_accesss: Updatemany_Todo_Access_Response;
  update_todo_historys: Updatemany_Todo_History_Response;
  update_todos: Updatemany_Todo_Response;
  update_user_connections: Updatemany_User_Connection_Response;
  update_users: Updatemany_User_Response;
};


export type MutationAuthenticate_FinishArgs = {
  identifier: Scalars['String']['input'];
  public_key: Scalars['String']['input'];
};


export type MutationAuthenticate_StartArgs = {
  identifier: Scalars['String']['input'];
};


export type MutationCreate_NotificationArgs = {
  create_notification_input: Create_Notification_Input;
};


export type MutationCreate_Notification_MessageArgs = {
  create_notification_message_input: Create_Notification_Message_Input;
};


export type MutationCreate_Send_EmailArgs = {
  create_send_email_input: Create_Send_Email_Input;
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


export type MutationUpdate_Notification_MessagesArgs = {
  update_notification_messages_input: Update_Notification_Messages_Input;
};


export type MutationUpdate_NotificationsArgs = {
  update_notifications_input: Update_Notifications_Input;
};


export type MutationUpdate_Send_EmailArgs = {
  update_send_email_input: Update_Send_Email_Input;
};


export type MutationUpdate_Send_EmailsArgs = {
  update_send_emails_input: Update_Send_Emails_Input;
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
  get_notification: Findone_Notification_Response;
  get_notification_message: Findone_Notification_Message_Response;
  get_notification_messages: Findmany_Notification_Message_Response;
  get_notifications: Findmany_Notification_Response;
  get_send_email: Findone_Send_Email_Response;
  get_send_emails: Findmany_Send_Email_Response;
  get_todo: Findone_Todo_Response;
  get_todo_access: Findone_Todo_Access_Response;
  get_todo_accesss: Findmany_Todo_Access_Response;
  get_todo_history: Findone_Todo_History_Response;
  get_todo_historys: Findmany_Todo_History_Response;
  get_todos: Findmany_Todo_Response;
  get_user: Findone_User_Response;
  get_user_connection: Findone_User_Connection_Response;
  get_user_connections: Findmany_User_Connection_Response;
  get_users: Findmany_User_Response;
};


export type QueryGet_NotificationArgs = {
  get_notification_input: Get_Notification_Input;
};


export type QueryGet_Notification_MessageArgs = {
  get_notification_message_input: Get_Notification_Message_Input;
};


export type QueryGet_Notification_MessagesArgs = {
  get_notification_messages_input: Get_Notification_Messages_Input;
};


export type QueryGet_NotificationsArgs = {
  get_notifications_input: Get_Notifications_Input;
};


export type QueryGet_Send_EmailArgs = {
  get_send_email_input: Get_Send_Email_Input;
};


export type QueryGet_Send_EmailsArgs = {
  get_send_emails_input: Get_Send_Emails_Input;
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

export type Create_Notification_Input = {
  values: Create_Notification_Values_Input;
};

export type Create_Notification_Message_Input = {
  values: Create_Notification_Message_Values_Input;
};

export type Create_Notification_Message_Values_Input = {
  identifier: Scalars['String']['input'];
  message: Scalars['String']['input'];
};

export type Create_Notification_Values_Input = {
  notification_message: Scalars['Int']['input'];
  read: Scalars['Boolean']['input'];
};

export type Create_Send_Email_Input = {
  values: Create_Send_Email_Values_Input;
};

export type Create_Send_Email_Values_Asm_Input = {
  groupId: Scalars['Int']['input'];
  groupsToDisplay?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Create_Send_Email_Values_Attachments_Input = {
  content: Scalars['String']['input'];
  disposition?: InputMaybe<Scalars['String']['input']>;
  filename: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Send_Email_Values_Content_Input = {
  type: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Create_Send_Email_Values_From_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Send_Email_Values_Input = {
  asm?: InputMaybe<Create_Send_Email_Values_Asm_Input>;
  attachments?: InputMaybe<Array<Create_Send_Email_Values_Attachments_Input>>;
  batchId?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  content: Array<Create_Send_Email_Values_Content_Input>;
  from: Create_Send_Email_Values_From_Input;
  ipPoolName?: InputMaybe<Scalars['String']['input']>;
  mailSettings?: InputMaybe<Create_Send_Email_Values_MailSettings_Input>;
  personalizations: Array<Create_Send_Email_Values_Personalizations_Input>;
  replyTo?: InputMaybe<Create_Send_Email_Values_ReplyTo_Input>;
  sendAt?: InputMaybe<Scalars['Int']['input']>;
  subject: Scalars['String']['input'];
  template_id?: InputMaybe<Scalars['String']['input']>;
  trackingSettings?: InputMaybe<Create_Send_Email_Values_TrackingSettings_Input>;
};

export type Create_Send_Email_Values_MailSettings_Bcc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Create_Send_Email_Values_MailSettings_BypassBounceManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Create_Send_Email_Values_MailSettings_BypassListManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Create_Send_Email_Values_MailSettings_BypassUnsubscribeManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Create_Send_Email_Values_MailSettings_Footer_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Send_Email_Values_MailSettings_Input = {
  bcc?: InputMaybe<Create_Send_Email_Values_MailSettings_Bcc_Input>;
  bypassBounceManagement?: InputMaybe<Create_Send_Email_Values_MailSettings_BypassBounceManagement_Input>;
  bypassListManagement?: InputMaybe<Create_Send_Email_Values_MailSettings_BypassListManagement_Input>;
  bypassUnsubscribeManagement?: InputMaybe<Create_Send_Email_Values_MailSettings_BypassUnsubscribeManagement_Input>;
  footer?: InputMaybe<Create_Send_Email_Values_MailSettings_Footer_Input>;
  sandboxMode?: InputMaybe<Create_Send_Email_Values_MailSettings_SandboxMode_Input>;
  spamCheck?: InputMaybe<Create_Send_Email_Values_MailSettings_SpamCheck_Input>;
};

export type Create_Send_Email_Values_MailSettings_SandboxMode_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Create_Send_Email_Values_MailSettings_SpamCheck_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  postToUrl?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Send_Email_Values_Personalizations_Bcc_Input = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Send_Email_Values_Personalizations_Cc_Input = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Send_Email_Values_Personalizations_Dynamic_Template_Data_Input = {
  invitor?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Send_Email_Values_Personalizations_Input = {
  bcc?: InputMaybe<Array<Create_Send_Email_Values_Personalizations_Bcc_Input>>;
  cc?: InputMaybe<Array<Create_Send_Email_Values_Personalizations_Cc_Input>>;
  dynamic_template_data?: InputMaybe<Create_Send_Email_Values_Personalizations_Dynamic_Template_Data_Input>;
  to: Array<Create_Send_Email_Values_Personalizations_To_Input>;
};

export type Create_Send_Email_Values_Personalizations_To_Input = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Send_Email_Values_ReplyTo_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Send_Email_Values_TrackingSettings_ClickTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  enableText?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Create_Send_Email_Values_TrackingSettings_Ganalytics_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  utmTerm?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Send_Email_Values_TrackingSettings_Input = {
  clickTracking?: InputMaybe<Create_Send_Email_Values_TrackingSettings_ClickTracking_Input>;
  ganalytics?: InputMaybe<Create_Send_Email_Values_TrackingSettings_Ganalytics_Input>;
  openTracking?: InputMaybe<Create_Send_Email_Values_TrackingSettings_OpenTracking_Input>;
  subscriptionTracking?: InputMaybe<Create_Send_Email_Values_TrackingSettings_SubscriptionTracking_Input>;
};

export type Create_Send_Email_Values_TrackingSettings_OpenTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Send_Email_Values_TrackingSettings_SubscriptionTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Todo_Access_Input = {
  values: Create_Todo_Access_Values_Input;
};

export type Create_Todo_Access_Values_Input = {
  edit: Scalars['Boolean']['input'];
  manage: Scalars['Boolean']['input'];
  revoked: Scalars['Boolean']['input'];
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Todo_History_Input = {
  values: Create_Todo_History_Values_Input;
};

export type Create_Todo_History_Values_Input = {
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Todo_Input = {
  values: Create_Todo_Values_Input;
};

export type Create_Todo_Values_Input = {
  completed: Scalars['Boolean']['input'];
  description: Scalars['String']['input'];
  goal_date?: InputMaybe<Scalars['String']['input']>;
  is_encrypted?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
};

export type Create_User_Connection_Input = {
  values: Create_User_Connection_Values_Input;
};

export type Create_User_Connection_Values_Input = {
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  user_uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Create_User_Input = {
  values: Create_User_Values_Input;
};

export type Create_User_Values_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  last_active?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Createone_Notification_Message_Response = {
  __typename?: 'createone_notification_message_response';
  data: Notification_Message;
  meta?: Maybe<Meta>;
};

export type Createone_Notification_Response = {
  __typename?: 'createone_notification_response';
  data: Notification;
  meta?: Maybe<Meta>;
};

export type Createone_Send_Email_Response = {
  __typename?: 'createone_send_email_response';
  meta?: Maybe<Meta>;
};

export type Createone_Todo_Access_Response = {
  __typename?: 'createone_todo_access_response';
  data: Todo_Access;
  meta?: Maybe<Meta>;
};

export type Createone_Todo_History_Response = {
  __typename?: 'createone_todo_history_response';
  data: Todo_History;
  meta?: Maybe<Meta>;
};

export type Createone_Todo_Response = {
  __typename?: 'createone_todo_response';
  data: Todo;
  meta?: Maybe<Meta>;
};

export type Createone_User_Connection_Response = {
  __typename?: 'createone_user_connection_response';
  data?: Maybe<User_Connection>;
  meta?: Maybe<Meta>;
};

export type Createone_User_Response = {
  __typename?: 'createone_user_response';
  data?: Maybe<User>;
  meta?: Maybe<Meta>;
};

export type Findmany_Notification_Message_Response = {
  __typename?: 'findmany_notification_message_response';
  data: Array<Notification_Message>;
  meta?: Maybe<Meta>;
};

export type Findmany_Notification_Response = {
  __typename?: 'findmany_notification_response';
  data: Array<Notification>;
  meta?: Maybe<Meta>;
};

export type Findmany_Send_Email_Response = {
  __typename?: 'findmany_send_email_response';
  meta?: Maybe<Meta>;
};

export type Findmany_Todo_Access_Response = {
  __typename?: 'findmany_todo_access_response';
  data: Array<Todo_Access>;
  meta?: Maybe<Meta>;
};

export type Findmany_Todo_History_Response = {
  __typename?: 'findmany_todo_history_response';
  data: Array<Todo_History>;
  meta?: Maybe<Meta>;
};

export type Findmany_Todo_Response = {
  __typename?: 'findmany_todo_response';
  data: Array<Todo>;
  meta?: Maybe<Meta>;
};

export type Findmany_User_Connection_Response = {
  __typename?: 'findmany_user_connection_response';
  data: Array<Maybe<User_Connection>>;
  meta?: Maybe<Meta>;
};

export type Findmany_User_Response = {
  __typename?: 'findmany_user_response';
  data: Array<Maybe<User>>;
  meta?: Maybe<Meta>;
};

export type Findone_Notification_Message_Response = {
  __typename?: 'findone_notification_message_response';
  data: Notification_Message;
  meta?: Maybe<Meta>;
};

export type Findone_Notification_Response = {
  __typename?: 'findone_notification_response';
  data: Notification;
  meta?: Maybe<Meta>;
};

export type Findone_Send_Email_Response = {
  __typename?: 'findone_send_email_response';
  meta?: Maybe<Meta>;
};

export type Findone_Todo_Access_Response = {
  __typename?: 'findone_todo_access_response';
  data: Todo_Access;
  meta?: Maybe<Meta>;
};

export type Findone_Todo_History_Response = {
  __typename?: 'findone_todo_history_response';
  data: Todo_History;
  meta?: Maybe<Meta>;
};

export type Findone_Todo_Response = {
  __typename?: 'findone_todo_response';
  data: Todo;
  meta?: Maybe<Meta>;
};

export type Findone_User_Connection_Response = {
  __typename?: 'findone_user_connection_response';
  data?: Maybe<User_Connection>;
  meta?: Maybe<Meta>;
};

export type Findone_User_Response = {
  __typename?: 'findone_user_response';
  data?: Maybe<User>;
  meta?: Maybe<Meta>;
};

export type Get_Notification_Input = {
  query: Get_Notification_Query_Input;
};

export type Get_Notification_Message_Input = {
  query: Get_Notification_Message_Query_Input;
};

export type Get_Notification_Message_Query_Input = {
  AND?: InputMaybe<Array<Get_Notification_Message_Query_Input>>;
  GT?: InputMaybe<Get_Notification_Message_Query_Input>;
  LIKE?: InputMaybe<Get_Notification_Message_Query_Input>;
  LT?: InputMaybe<Get_Notification_Message_Query_Input>;
  OR?: InputMaybe<Array<Get_Notification_Message_Query_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Notification_Messages_Input = {
  opts?: InputMaybe<Options_Input>;
  query: Get_Notification_Messages_Querys_Input;
};

export type Get_Notification_Messages_Querys_Input = {
  AND?: InputMaybe<Array<Get_Notification_Messages_Querys_Input>>;
  GT?: InputMaybe<Get_Notification_Messages_Querys_Input>;
  LIKE?: InputMaybe<Get_Notification_Messages_Querys_Input>;
  LT?: InputMaybe<Get_Notification_Messages_Querys_Input>;
  OR?: InputMaybe<Array<Get_Notification_Messages_Querys_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Notification_Query_Input = {
  AND?: InputMaybe<Array<Get_Notification_Query_Input>>;
  GT?: InputMaybe<Get_Notification_Query_Input>;
  LIKE?: InputMaybe<Get_Notification_Query_Input>;
  LT?: InputMaybe<Get_Notification_Query_Input>;
  OR?: InputMaybe<Array<Get_Notification_Query_Input>>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  notification_message?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Get_Todo_Query_Input>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Notifications_Input = {
  opts?: InputMaybe<Options_Input>;
  query: Get_Notifications_Querys_Input;
};

export type Get_Notifications_Querys_Input = {
  AND?: InputMaybe<Array<Get_Notifications_Querys_Input>>;
  GT?: InputMaybe<Get_Notifications_Querys_Input>;
  LIKE?: InputMaybe<Get_Notifications_Querys_Input>;
  LT?: InputMaybe<Get_Notifications_Querys_Input>;
  OR?: InputMaybe<Array<Get_Notifications_Querys_Input>>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  notification_message?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Get_Todo_Query_Input>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Input = {
  query: Get_Send_Email_Query_Input;
};

export type Get_Send_Email_Query_Asm_Input = {
  groupId?: InputMaybe<Scalars['Int']['input']>;
  groupsToDisplay?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Get_Send_Email_Query_Attachments_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  disposition?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Query_Content_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Query_From_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Query_Input = {
  asm?: InputMaybe<Get_Send_Email_Query_Asm_Input>;
  attachments?: InputMaybe<Array<Get_Send_Email_Query_Attachments_Input>>;
  batchId?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Array<Get_Send_Email_Query_Content_Input>>;
  from?: InputMaybe<Get_Send_Email_Query_From_Input>;
  ipPoolName?: InputMaybe<Scalars['String']['input']>;
  mailSettings?: InputMaybe<Get_Send_Email_Query_MailSettings_Input>;
  personalizations?: InputMaybe<Array<Get_Send_Email_Query_Personalizations_Input>>;
  replyTo?: InputMaybe<Get_Send_Email_Query_ReplyTo_Input>;
  sendAt?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template_id?: InputMaybe<Scalars['String']['input']>;
  trackingSettings?: InputMaybe<Get_Send_Email_Query_TrackingSettings_Input>;
};

export type Get_Send_Email_Query_MailSettings_Bcc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Email_Query_MailSettings_BypassBounceManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Email_Query_MailSettings_BypassListManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Email_Query_MailSettings_BypassUnsubscribeManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Email_Query_MailSettings_Footer_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Query_MailSettings_Input = {
  bcc?: InputMaybe<Get_Send_Email_Query_MailSettings_Bcc_Input>;
  bypassBounceManagement?: InputMaybe<Get_Send_Email_Query_MailSettings_BypassBounceManagement_Input>;
  bypassListManagement?: InputMaybe<Get_Send_Email_Query_MailSettings_BypassListManagement_Input>;
  bypassUnsubscribeManagement?: InputMaybe<Get_Send_Email_Query_MailSettings_BypassUnsubscribeManagement_Input>;
  footer?: InputMaybe<Get_Send_Email_Query_MailSettings_Footer_Input>;
  sandboxMode?: InputMaybe<Get_Send_Email_Query_MailSettings_SandboxMode_Input>;
  spamCheck?: InputMaybe<Get_Send_Email_Query_MailSettings_SpamCheck_Input>;
};

export type Get_Send_Email_Query_MailSettings_SandboxMode_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Email_Query_MailSettings_SpamCheck_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  postToUrl?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};

export type Get_Send_Email_Query_Personalizations_Bcc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Query_Personalizations_Cc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Query_Personalizations_Dynamic_Template_Data_Input = {
  invitor?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Query_Personalizations_Input = {
  bcc?: InputMaybe<Array<Get_Send_Email_Query_Personalizations_Bcc_Input>>;
  cc?: InputMaybe<Array<Get_Send_Email_Query_Personalizations_Cc_Input>>;
  dynamic_template_data?: InputMaybe<Get_Send_Email_Query_Personalizations_Dynamic_Template_Data_Input>;
  to?: InputMaybe<Array<Get_Send_Email_Query_Personalizations_To_Input>>;
};

export type Get_Send_Email_Query_Personalizations_To_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Query_ReplyTo_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Query_TrackingSettings_ClickTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  enableText?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Email_Query_TrackingSettings_Ganalytics_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  utmTerm?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Query_TrackingSettings_Input = {
  clickTracking?: InputMaybe<Get_Send_Email_Query_TrackingSettings_ClickTracking_Input>;
  ganalytics?: InputMaybe<Get_Send_Email_Query_TrackingSettings_Ganalytics_Input>;
  openTracking?: InputMaybe<Get_Send_Email_Query_TrackingSettings_OpenTracking_Input>;
  subscriptionTracking?: InputMaybe<Get_Send_Email_Query_TrackingSettings_SubscriptionTracking_Input>;
};

export type Get_Send_Email_Query_TrackingSettings_OpenTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Email_Query_TrackingSettings_SubscriptionTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Input = {
  query: Get_Send_Emails_Querys_Input;
};

export type Get_Send_Emails_Querys_Asms_Input = {
  groupId?: InputMaybe<Scalars['Int']['input']>;
  groupsToDisplay?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Get_Send_Emails_Querys_Attachmentss_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  disposition?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Querys_Contents_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Querys_Froms_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Querys_Input = {
  asm?: InputMaybe<Get_Send_Emails_Querys_Asms_Input>;
  attachments?: InputMaybe<Array<Get_Send_Emails_Querys_Attachmentss_Input>>;
  batchId?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Array<Get_Send_Emails_Querys_Contents_Input>>;
  from?: InputMaybe<Get_Send_Emails_Querys_Froms_Input>;
  ipPoolName?: InputMaybe<Scalars['String']['input']>;
  mailSettings?: InputMaybe<Get_Send_Emails_Querys_MailSettingss_Input>;
  personalizations?: InputMaybe<Array<Get_Send_Emails_Querys_Personalizationss_Input>>;
  replyTo?: InputMaybe<Get_Send_Emails_Querys_ReplyTos_Input>;
  sendAt?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template_id?: InputMaybe<Scalars['String']['input']>;
  trackingSettings?: InputMaybe<Get_Send_Emails_Querys_TrackingSettingss_Input>;
};

export type Get_Send_Emails_Querys_MailSettingss_Bccs_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Emails_Querys_MailSettingss_BypassBounceManagements_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Emails_Querys_MailSettingss_BypassListManagements_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Emails_Querys_MailSettingss_BypassUnsubscribeManagements_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Emails_Querys_MailSettingss_Footers_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Querys_MailSettingss_Input = {
  bcc?: InputMaybe<Get_Send_Emails_Querys_MailSettingss_Bccs_Input>;
  bypassBounceManagement?: InputMaybe<Get_Send_Emails_Querys_MailSettingss_BypassBounceManagements_Input>;
  bypassListManagement?: InputMaybe<Get_Send_Emails_Querys_MailSettingss_BypassListManagements_Input>;
  bypassUnsubscribeManagement?: InputMaybe<Get_Send_Emails_Querys_MailSettingss_BypassUnsubscribeManagements_Input>;
  footer?: InputMaybe<Get_Send_Emails_Querys_MailSettingss_Footers_Input>;
  sandboxMode?: InputMaybe<Get_Send_Emails_Querys_MailSettingss_SandboxModes_Input>;
  spamCheck?: InputMaybe<Get_Send_Emails_Querys_MailSettingss_SpamChecks_Input>;
};

export type Get_Send_Emails_Querys_MailSettingss_SandboxModes_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Emails_Querys_MailSettingss_SpamChecks_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  postToUrl?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};

export type Get_Send_Emails_Querys_Personalizationss_Bccs_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Querys_Personalizationss_Ccs_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Querys_Personalizationss_Dynamic_Template_Datas_Input = {
  invitor?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Querys_Personalizationss_Input = {
  bcc?: InputMaybe<Array<Get_Send_Emails_Querys_Personalizationss_Bccs_Input>>;
  cc?: InputMaybe<Array<Get_Send_Emails_Querys_Personalizationss_Ccs_Input>>;
  dynamic_template_data?: InputMaybe<Get_Send_Emails_Querys_Personalizationss_Dynamic_Template_Datas_Input>;
  to?: InputMaybe<Array<Get_Send_Emails_Querys_Personalizationss_Tos_Input>>;
};

export type Get_Send_Emails_Querys_Personalizationss_Tos_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Querys_ReplyTos_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Querys_TrackingSettingss_ClickTrackings_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  enableText?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Get_Send_Emails_Querys_TrackingSettingss_Ganalyticss_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  utmTerm?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Querys_TrackingSettingss_Input = {
  clickTracking?: InputMaybe<Get_Send_Emails_Querys_TrackingSettingss_ClickTrackings_Input>;
  ganalytics?: InputMaybe<Get_Send_Emails_Querys_TrackingSettingss_Ganalyticss_Input>;
  openTracking?: InputMaybe<Get_Send_Emails_Querys_TrackingSettingss_OpenTrackings_Input>;
  subscriptionTracking?: InputMaybe<Get_Send_Emails_Querys_TrackingSettingss_SubscriptionTrackings_Input>;
};

export type Get_Send_Emails_Querys_TrackingSettingss_OpenTrackings_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Send_Emails_Querys_TrackingSettingss_SubscriptionTrackings_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Access_Input = {
  query: Get_Todo_Access_Query_Input;
};

export type Get_Todo_Access_Query_Input = {
  AND?: InputMaybe<Array<Get_Todo_Access_Query_Input>>;
  GT?: InputMaybe<Get_Todo_Access_Query_Input>;
  LIKE?: InputMaybe<Get_Todo_Access_Query_Input>;
  LT?: InputMaybe<Get_Todo_Access_Query_Input>;
  OR?: InputMaybe<Array<Get_Todo_Access_Query_Input>>;
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  manage?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Accesss_Input = {
  opts?: InputMaybe<Options_Input>;
  query: Get_Todo_Accesss_Querys_Input;
};

export type Get_Todo_Accesss_Querys_Input = {
  AND?: InputMaybe<Array<Get_Todo_Accesss_Querys_Input>>;
  GT?: InputMaybe<Get_Todo_Accesss_Querys_Input>;
  LIKE?: InputMaybe<Get_Todo_Accesss_Querys_Input>;
  LT?: InputMaybe<Get_Todo_Accesss_Querys_Input>;
  OR?: InputMaybe<Array<Get_Todo_Accesss_Querys_Input>>;
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  manage?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_History_Input = {
  query: Get_Todo_History_Query_Input;
};

export type Get_Todo_History_Query_Input = {
  AND?: InputMaybe<Array<Get_Todo_History_Query_Input>>;
  GT?: InputMaybe<Get_Todo_History_Query_Input>;
  LIKE?: InputMaybe<Get_Todo_History_Query_Input>;
  LT?: InputMaybe<Get_Todo_History_Query_Input>;
  OR?: InputMaybe<Array<Get_Todo_History_Query_Input>>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  todo?: InputMaybe<Get_Todo_Query_Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Historys_Input = {
  opts?: InputMaybe<Options_Input>;
  query: Get_Todo_Historys_Querys_Input;
};

export type Get_Todo_Historys_Querys_Input = {
  AND?: InputMaybe<Array<Get_Todo_Historys_Querys_Input>>;
  GT?: InputMaybe<Get_Todo_Historys_Querys_Input>;
  LIKE?: InputMaybe<Get_Todo_Historys_Querys_Input>;
  LT?: InputMaybe<Get_Todo_Historys_Querys_Input>;
  OR?: InputMaybe<Array<Get_Todo_Historys_Querys_Input>>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  todo?: InputMaybe<Get_Todo_Query_Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todo_Input = {
  query: Get_Todo_Query_Input;
};

export type Get_Todo_Query_Input = {
  AND?: InputMaybe<Array<Get_Todo_Query_Input>>;
  GT?: InputMaybe<Get_Todo_Query_Input>;
  LIKE?: InputMaybe<Get_Todo_Query_Input>;
  LT?: InputMaybe<Get_Todo_Query_Input>;
  OR?: InputMaybe<Array<Get_Todo_Query_Input>>;
  access?: InputMaybe<Get_Todo_Access_Query_Input>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completed_at?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_encrypted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Todos_Input = {
  opts?: InputMaybe<Options_Input>;
  query: Get_Todos_Querys_Input;
};

export type Get_Todos_Querys_Input = {
  AND?: InputMaybe<Array<Get_Todos_Querys_Input>>;
  GT?: InputMaybe<Get_Todos_Querys_Input>;
  LIKE?: InputMaybe<Get_Todos_Querys_Input>;
  LT?: InputMaybe<Get_Todos_Querys_Input>;
  OR?: InputMaybe<Array<Get_Todos_Querys_Input>>;
  access?: InputMaybe<Get_Todo_Access_Query_Input>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completed_at?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_encrypted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_User_Connection_Input = {
  query: Get_User_Connection_Query_Input;
};

export type Get_User_Connection_Query_Input = {
  AND?: InputMaybe<Array<Get_User_Connection_Query_Input>>;
  GT?: InputMaybe<Get_User_Connection_Query_Input>;
  LIKE?: InputMaybe<Get_User_Connection_Query_Input>;
  LT?: InputMaybe<Get_User_Connection_Query_Input>;
  OR?: InputMaybe<Array<Get_User_Connection_Query_Input>>;
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  connected_user?: InputMaybe<Get_User_Query_Input>;
  created_by?: InputMaybe<Get_User_Query_Input>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  revoked_by?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_by?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_User_Connections_Input = {
  opts?: InputMaybe<Options_Input>;
  query: Get_User_Connections_Querys_Input;
};

export type Get_User_Connections_Querys_Input = {
  AND?: InputMaybe<Array<Get_User_Connections_Querys_Input>>;
  GT?: InputMaybe<Get_User_Connections_Querys_Input>;
  LIKE?: InputMaybe<Get_User_Connections_Querys_Input>;
  LT?: InputMaybe<Get_User_Connections_Querys_Input>;
  OR?: InputMaybe<Array<Get_User_Connections_Querys_Input>>;
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  connected_user?: InputMaybe<Get_User_Query_Input>;
  created_by?: InputMaybe<Get_User_Query_Input>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  revoked_by?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_by?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Get_User_Query_Input>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_User_Input = {
  query: Get_User_Query_Input;
};

export type Get_User_Query_Input = {
  AND?: InputMaybe<Array<Get_User_Query_Input>>;
  GT?: InputMaybe<Get_User_Query_Input>;
  LIKE?: InputMaybe<Get_User_Query_Input>;
  LT?: InputMaybe<Get_User_Query_Input>;
  OR?: InputMaybe<Array<Get_User_Query_Input>>;
  email?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Get_Users_Input = {
  opts?: InputMaybe<Options_Input>;
  query: Get_Users_Querys_Input;
};

export type Get_Users_Querys_Input = {
  AND?: InputMaybe<Array<Get_Users_Querys_Input>>;
  GT?: InputMaybe<Get_Users_Querys_Input>;
  LIKE?: InputMaybe<Get_Users_Querys_Input>;
  LT?: InputMaybe<Get_Users_Querys_Input>;
  OR?: InputMaybe<Array<Get_Users_Querys_Input>>;
  email?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Meta = {
  __typename?: 'meta';
  count: Scalars['Int']['output'];
  executed_at: Scalars['String']['output'];
  page: Scalars['Int']['output'];
  request_id: Scalars['String']['output'];
  service_name: Scalars['String']['output'];
  service_version?: Maybe<Scalars['String']['output']>;
  total_count: Scalars['Int']['output'];
  total_pages: Scalars['Int']['output'];
  user_uuid?: Maybe<Scalars['String']['output']>;
};

export type Notification = {
  __typename?: 'notification';
  created_at: Scalars['String']['output'];
  created_by: Findone_User_Response;
  notification_message: Findone_Notification_Message_Response;
  read: Scalars['Boolean']['output'];
  todo: Findone_Todo_Response;
  updated_at: Scalars['String']['output'];
  user: Findone_User_Response;
  uuid: Scalars['String']['output'];
};


export type NotificationCreated_ByArgs = {
  created_by: Get_User_Input;
};


export type NotificationNotification_MessageArgs = {
  notification_message: Get_Notification_Message_Input;
};


export type NotificationTodoArgs = {
  todo: Get_Todo_Input;
};


export type NotificationUserArgs = {
  user: Get_User_Input;
};

export type Notification_Message = {
  __typename?: 'notification_message';
  identifier: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Options_Input = {
  page?: InputMaybe<Scalars['Int']['input']>;
  per_page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Sort_Input>>;
};

export enum Sort_Direction {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Sort_Input = {
  direction?: InputMaybe<Sort_Direction>;
  field?: InputMaybe<Scalars['String']['input']>;
};

export type Todo = {
  __typename?: 'todo';
  access: Findmany_Todo_Access_Response;
  completed: Scalars['Boolean']['output'];
  completed_at?: Maybe<Scalars['String']['output']>;
  completed_by?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['String']['output'];
  created_by: Findone_User_Response;
  deleted_at?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  goal_date?: Maybe<Scalars['String']['output']>;
  history: Findmany_Todo_History_Response;
  is_deleted?: Maybe<Scalars['Boolean']['output']>;
  is_encrypted?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  updated_by: Scalars['Int']['output'];
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
  created_at: Scalars['String']['output'];
  created_by: Findone_User_Response;
  edit: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  manage: Scalars['Boolean']['output'];
  revoked: Scalars['Boolean']['output'];
  todo: Findone_Todo_Response;
  updated_at: Scalars['String']['output'];
  updated_by: Findone_User_Response;
  user: Findone_User_Response;
  uuid: Scalars['String']['output'];
};


export type Todo_AccessCreated_ByArgs = {
  created_by: Get_User_Input;
};


export type Todo_AccessTodoArgs = {
  todo: Get_Todo_Input;
};


export type Todo_AccessUpdated_ByArgs = {
  updated_by: Get_User_Input;
};


export type Todo_AccessUserArgs = {
  user: Get_User_Input;
};

export type Todo_History = {
  __typename?: 'todo_history';
  created_at: Scalars['String']['output'];
  created_by: Findone_User_Response;
  id: Scalars['Int']['output'];
  new_value?: Maybe<Scalars['String']['output']>;
  old_value?: Maybe<Scalars['String']['output']>;
  property: Scalars['String']['output'];
  todo: Findone_Todo_Response;
  uuid: Scalars['String']['output'];
};


export type Todo_HistoryCreated_ByArgs = {
  created_by: Get_User_Input;
};


export type Todo_HistoryTodoArgs = {
  todo: Get_Todo_Input;
};

export type Update_Notification_Messages_Input = {
  query: Update_Notification_Messages_Query_Input;
  values: Update_Notification_Messages_Values_Input;
};

export type Update_Notification_Messages_Query_Input = {
  AND?: InputMaybe<Array<Update_Notification_Messages_Query_Input>>;
  GT?: InputMaybe<Update_Notification_Messages_Query_Input>;
  LIKE?: InputMaybe<Update_Notification_Messages_Query_Input>;
  LT?: InputMaybe<Update_Notification_Messages_Query_Input>;
  OR?: InputMaybe<Array<Update_Notification_Messages_Query_Input>>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Notification_Messages_Values_Input = {
  identifier?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Notifications_Input = {
  query: Update_Notifications_Query_Input;
  values: Update_Notifications_Values_Input;
};

export type Update_Notifications_Query_Input = {
  AND?: InputMaybe<Array<Update_Notifications_Query_Input>>;
  GT?: InputMaybe<Update_Notifications_Query_Input>;
  LIKE?: InputMaybe<Update_Notifications_Query_Input>;
  LT?: InputMaybe<Update_Notifications_Query_Input>;
  OR?: InputMaybe<Array<Update_Notifications_Query_Input>>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  notification_message?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Notifications_Values_Input = {
  notification_message?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Email_Input = {
  query: Get_Send_Email_Query_Input;
  values: Update_Send_Email_Values_Input;
};

export type Update_Send_Email_Values_Asm_Input = {
  groupId?: InputMaybe<Scalars['Int']['input']>;
  groupsToDisplay?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Update_Send_Email_Values_Attachments_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  disposition?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Email_Values_Content_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Email_Values_From_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Email_Values_Input = {
  asm?: InputMaybe<Update_Send_Email_Values_Asm_Input>;
  attachments?: InputMaybe<Array<Update_Send_Email_Values_Attachments_Input>>;
  batchId?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Array<Update_Send_Email_Values_Content_Input>>;
  from?: InputMaybe<Update_Send_Email_Values_From_Input>;
  ipPoolName?: InputMaybe<Scalars['String']['input']>;
  mailSettings?: InputMaybe<Update_Send_Email_Values_MailSettings_Input>;
  personalizations?: InputMaybe<Array<Update_Send_Email_Values_Personalizations_Input>>;
  replyTo?: InputMaybe<Update_Send_Email_Values_ReplyTo_Input>;
  sendAt?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template_id?: InputMaybe<Scalars['String']['input']>;
  trackingSettings?: InputMaybe<Update_Send_Email_Values_TrackingSettings_Input>;
};

export type Update_Send_Email_Values_MailSettings_Bcc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Email_Values_MailSettings_BypassBounceManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Email_Values_MailSettings_BypassListManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Email_Values_MailSettings_BypassUnsubscribeManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Email_Values_MailSettings_Footer_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Email_Values_MailSettings_Input = {
  bcc?: InputMaybe<Update_Send_Email_Values_MailSettings_Bcc_Input>;
  bypassBounceManagement?: InputMaybe<Update_Send_Email_Values_MailSettings_BypassBounceManagement_Input>;
  bypassListManagement?: InputMaybe<Update_Send_Email_Values_MailSettings_BypassListManagement_Input>;
  bypassUnsubscribeManagement?: InputMaybe<Update_Send_Email_Values_MailSettings_BypassUnsubscribeManagement_Input>;
  footer?: InputMaybe<Update_Send_Email_Values_MailSettings_Footer_Input>;
  sandboxMode?: InputMaybe<Update_Send_Email_Values_MailSettings_SandboxMode_Input>;
  spamCheck?: InputMaybe<Update_Send_Email_Values_MailSettings_SpamCheck_Input>;
};

export type Update_Send_Email_Values_MailSettings_SandboxMode_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Email_Values_MailSettings_SpamCheck_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  postToUrl?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Send_Email_Values_Personalizations_Bcc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Email_Values_Personalizations_Cc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Email_Values_Personalizations_Dynamic_Template_Data_Input = {
  invitor?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Email_Values_Personalizations_Input = {
  bcc?: InputMaybe<Array<Update_Send_Email_Values_Personalizations_Bcc_Input>>;
  cc?: InputMaybe<Array<Update_Send_Email_Values_Personalizations_Cc_Input>>;
  dynamic_template_data?: InputMaybe<Update_Send_Email_Values_Personalizations_Dynamic_Template_Data_Input>;
  to?: InputMaybe<Array<Update_Send_Email_Values_Personalizations_To_Input>>;
};

export type Update_Send_Email_Values_Personalizations_To_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Email_Values_ReplyTo_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Email_Values_TrackingSettings_ClickTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  enableText?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Email_Values_TrackingSettings_Ganalytics_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  utmTerm?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Email_Values_TrackingSettings_Input = {
  clickTracking?: InputMaybe<Update_Send_Email_Values_TrackingSettings_ClickTracking_Input>;
  ganalytics?: InputMaybe<Update_Send_Email_Values_TrackingSettings_Ganalytics_Input>;
  openTracking?: InputMaybe<Update_Send_Email_Values_TrackingSettings_OpenTracking_Input>;
  subscriptionTracking?: InputMaybe<Update_Send_Email_Values_TrackingSettings_SubscriptionTracking_Input>;
};

export type Update_Send_Email_Values_TrackingSettings_OpenTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Email_Values_TrackingSettings_SubscriptionTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Input = {
  query: Update_Send_Emails_Query_Input;
  values: Update_Send_Emails_Values_Input;
};

export type Update_Send_Emails_Query_Asm_Input = {
  groupId?: InputMaybe<Scalars['Int']['input']>;
  groupsToDisplay?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Update_Send_Emails_Query_Attachments_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  disposition?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Query_Content_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Query_From_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Query_Input = {
  asm?: InputMaybe<Update_Send_Emails_Query_Asm_Input>;
  attachments?: InputMaybe<Array<Update_Send_Emails_Query_Attachments_Input>>;
  batchId?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Array<Update_Send_Emails_Query_Content_Input>>;
  from?: InputMaybe<Update_Send_Emails_Query_From_Input>;
  ipPoolName?: InputMaybe<Scalars['String']['input']>;
  mailSettings?: InputMaybe<Update_Send_Emails_Query_MailSettings_Input>;
  personalizations?: InputMaybe<Array<Update_Send_Emails_Query_Personalizations_Input>>;
  replyTo?: InputMaybe<Update_Send_Emails_Query_ReplyTo_Input>;
  sendAt?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template_id?: InputMaybe<Scalars['String']['input']>;
  trackingSettings?: InputMaybe<Update_Send_Emails_Query_TrackingSettings_Input>;
};

export type Update_Send_Emails_Query_MailSettings_Bcc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Query_MailSettings_BypassBounceManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Query_MailSettings_BypassListManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Query_MailSettings_BypassUnsubscribeManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Query_MailSettings_Footer_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Query_MailSettings_Input = {
  bcc?: InputMaybe<Update_Send_Emails_Query_MailSettings_Bcc_Input>;
  bypassBounceManagement?: InputMaybe<Update_Send_Emails_Query_MailSettings_BypassBounceManagement_Input>;
  bypassListManagement?: InputMaybe<Update_Send_Emails_Query_MailSettings_BypassListManagement_Input>;
  bypassUnsubscribeManagement?: InputMaybe<Update_Send_Emails_Query_MailSettings_BypassUnsubscribeManagement_Input>;
  footer?: InputMaybe<Update_Send_Emails_Query_MailSettings_Footer_Input>;
  sandboxMode?: InputMaybe<Update_Send_Emails_Query_MailSettings_SandboxMode_Input>;
  spamCheck?: InputMaybe<Update_Send_Emails_Query_MailSettings_SpamCheck_Input>;
};

export type Update_Send_Emails_Query_MailSettings_SandboxMode_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Query_MailSettings_SpamCheck_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  postToUrl?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Send_Emails_Query_Personalizations_Bcc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Query_Personalizations_Cc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Query_Personalizations_Dynamic_Template_Data_Input = {
  invitor?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Query_Personalizations_Input = {
  bcc?: InputMaybe<Array<Update_Send_Emails_Query_Personalizations_Bcc_Input>>;
  cc?: InputMaybe<Array<Update_Send_Emails_Query_Personalizations_Cc_Input>>;
  dynamic_template_data?: InputMaybe<Update_Send_Emails_Query_Personalizations_Dynamic_Template_Data_Input>;
  to?: InputMaybe<Array<Update_Send_Emails_Query_Personalizations_To_Input>>;
};

export type Update_Send_Emails_Query_Personalizations_To_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Query_ReplyTo_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Query_TrackingSettings_ClickTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  enableText?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Query_TrackingSettings_Ganalytics_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  utmTerm?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Query_TrackingSettings_Input = {
  clickTracking?: InputMaybe<Update_Send_Emails_Query_TrackingSettings_ClickTracking_Input>;
  ganalytics?: InputMaybe<Update_Send_Emails_Query_TrackingSettings_Ganalytics_Input>;
  openTracking?: InputMaybe<Update_Send_Emails_Query_TrackingSettings_OpenTracking_Input>;
  subscriptionTracking?: InputMaybe<Update_Send_Emails_Query_TrackingSettings_SubscriptionTracking_Input>;
};

export type Update_Send_Emails_Query_TrackingSettings_OpenTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Query_TrackingSettings_SubscriptionTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_Asm_Input = {
  groupId?: InputMaybe<Scalars['Int']['input']>;
  groupsToDisplay?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Update_Send_Emails_Values_Attachments_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  disposition?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_Content_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_From_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_Input = {
  asm?: InputMaybe<Update_Send_Emails_Values_Asm_Input>;
  attachments?: InputMaybe<Array<Update_Send_Emails_Values_Attachments_Input>>;
  batchId?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  content?: InputMaybe<Array<Update_Send_Emails_Values_Content_Input>>;
  from?: InputMaybe<Update_Send_Emails_Values_From_Input>;
  ipPoolName?: InputMaybe<Scalars['String']['input']>;
  mailSettings?: InputMaybe<Update_Send_Emails_Values_MailSettings_Input>;
  personalizations?: InputMaybe<Array<Update_Send_Emails_Values_Personalizations_Input>>;
  replyTo?: InputMaybe<Update_Send_Emails_Values_ReplyTo_Input>;
  sendAt?: InputMaybe<Scalars['Int']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  template_id?: InputMaybe<Scalars['String']['input']>;
  trackingSettings?: InputMaybe<Update_Send_Emails_Values_TrackingSettings_Input>;
};

export type Update_Send_Emails_Values_MailSettings_Bcc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Values_MailSettings_BypassBounceManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Values_MailSettings_BypassListManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Values_MailSettings_BypassUnsubscribeManagement_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Values_MailSettings_Footer_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_MailSettings_Input = {
  bcc?: InputMaybe<Update_Send_Emails_Values_MailSettings_Bcc_Input>;
  bypassBounceManagement?: InputMaybe<Update_Send_Emails_Values_MailSettings_BypassBounceManagement_Input>;
  bypassListManagement?: InputMaybe<Update_Send_Emails_Values_MailSettings_BypassListManagement_Input>;
  bypassUnsubscribeManagement?: InputMaybe<Update_Send_Emails_Values_MailSettings_BypassUnsubscribeManagement_Input>;
  footer?: InputMaybe<Update_Send_Emails_Values_MailSettings_Footer_Input>;
  sandboxMode?: InputMaybe<Update_Send_Emails_Values_MailSettings_SandboxMode_Input>;
  spamCheck?: InputMaybe<Update_Send_Emails_Values_MailSettings_SpamCheck_Input>;
};

export type Update_Send_Emails_Values_MailSettings_SandboxMode_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Values_MailSettings_SpamCheck_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  postToUrl?: InputMaybe<Scalars['String']['input']>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Send_Emails_Values_Personalizations_Bcc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_Personalizations_Cc_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_Personalizations_Dynamic_Template_Data_Input = {
  invitor?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_Personalizations_Input = {
  bcc?: InputMaybe<Array<Update_Send_Emails_Values_Personalizations_Bcc_Input>>;
  cc?: InputMaybe<Array<Update_Send_Emails_Values_Personalizations_Cc_Input>>;
  dynamic_template_data?: InputMaybe<Update_Send_Emails_Values_Personalizations_Dynamic_Template_Data_Input>;
  to?: InputMaybe<Array<Update_Send_Emails_Values_Personalizations_To_Input>>;
};

export type Update_Send_Emails_Values_Personalizations_To_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_ReplyTo_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_TrackingSettings_ClickTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  enableText?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Update_Send_Emails_Values_TrackingSettings_Ganalytics_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  utmCampaign?: InputMaybe<Scalars['String']['input']>;
  utmContent?: InputMaybe<Scalars['String']['input']>;
  utmMedium?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
  utmTerm?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_TrackingSettings_Input = {
  clickTracking?: InputMaybe<Update_Send_Emails_Values_TrackingSettings_ClickTracking_Input>;
  ganalytics?: InputMaybe<Update_Send_Emails_Values_TrackingSettings_Ganalytics_Input>;
  openTracking?: InputMaybe<Update_Send_Emails_Values_TrackingSettings_OpenTracking_Input>;
  subscriptionTracking?: InputMaybe<Update_Send_Emails_Values_TrackingSettings_SubscriptionTracking_Input>;
};

export type Update_Send_Emails_Values_TrackingSettings_OpenTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Send_Emails_Values_TrackingSettings_SubscriptionTracking_Input = {
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  substitutionTag?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todo_Accesss_Input = {
  query: Update_Todo_Accesss_Query_Input;
  values: Update_Todo_Accesss_Values_Input;
};

export type Update_Todo_Accesss_Query_Input = {
  AND?: InputMaybe<Array<Update_Todo_Accesss_Query_Input>>;
  GT?: InputMaybe<Update_Todo_Accesss_Query_Input>;
  LIKE?: InputMaybe<Update_Todo_Accesss_Query_Input>;
  LT?: InputMaybe<Update_Todo_Accesss_Query_Input>;
  OR?: InputMaybe<Array<Update_Todo_Accesss_Query_Input>>;
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  manage?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todo_Accesss_Values_Input = {
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  manage?: InputMaybe<Scalars['Boolean']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  todo_uuid?: InputMaybe<Scalars['String']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todo_Historys_Input = {
  query: Update_Todo_Historys_Query_Input;
  values: Update_Todo_Historys_Values_Input;
};

export type Update_Todo_Historys_Query_Input = {
  AND?: InputMaybe<Array<Update_Todo_Historys_Query_Input>>;
  GT?: InputMaybe<Update_Todo_Historys_Query_Input>;
  LIKE?: InputMaybe<Update_Todo_Historys_Query_Input>;
  LT?: InputMaybe<Update_Todo_Historys_Query_Input>;
  OR?: InputMaybe<Array<Update_Todo_Historys_Query_Input>>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
  todo?: InputMaybe<Scalars['Int']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todo_Historys_Values_Input = {
  new_value?: InputMaybe<Scalars['String']['input']>;
  old_value?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todos_Input = {
  query: Update_Todos_Query_Input;
  values: Update_Todos_Values_Input;
};

export type Update_Todos_Query_Input = {
  AND?: InputMaybe<Array<Update_Todos_Query_Input>>;
  GT?: InputMaybe<Update_Todos_Query_Input>;
  LIKE?: InputMaybe<Update_Todos_Query_Input>;
  LT?: InputMaybe<Update_Todos_Query_Input>;
  OR?: InputMaybe<Array<Update_Todos_Query_Input>>;
  access?: InputMaybe<Array<Scalars['Int']['input']>>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completed_at?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['String']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  deleted_at?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  is_encrypted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Todos_Values_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  goal_date?: InputMaybe<Scalars['String']['input']>;
  is_deleted?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_User_Connections_Input = {
  query: Update_User_Connections_Query_Input;
  values: Update_User_Connections_Values_Input;
};

export type Update_User_Connections_Query_Input = {
  AND?: InputMaybe<Array<Update_User_Connections_Query_Input>>;
  GT?: InputMaybe<Update_User_Connections_Query_Input>;
  LIKE?: InputMaybe<Update_User_Connections_Query_Input>;
  LT?: InputMaybe<Update_User_Connections_Query_Input>;
  OR?: InputMaybe<Array<Update_User_Connections_Query_Input>>;
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  connected_user?: InputMaybe<Scalars['Int']['input']>;
  created_by?: InputMaybe<Scalars['Int']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  revoked_by?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  updated_by?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['Int']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_User_Connections_Values_Input = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  accepted_at?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  user_uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Users_Input = {
  query: Update_Users_Query_Input;
  values: Update_Users_Values_Input;
};

export type Update_Users_Query_Input = {
  AND?: InputMaybe<Array<Update_Users_Query_Input>>;
  GT?: InputMaybe<Update_Users_Query_Input>;
  LIKE?: InputMaybe<Update_Users_Query_Input>;
  LT?: InputMaybe<Update_Users_Query_Input>;
  OR?: InputMaybe<Array<Update_Users_Query_Input>>;
  email?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Users_Values_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  last_active?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profile_img?: InputMaybe<Scalars['String']['input']>;
  share_active?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Updatemany_Notification_Message_Response = {
  __typename?: 'updatemany_notification_message_response';
  data: Array<Notification_Message>;
  meta?: Maybe<Meta>;
};

export type Updatemany_Notification_Response = {
  __typename?: 'updatemany_notification_response';
  data: Array<Notification>;
  meta?: Maybe<Meta>;
};

export type Updatemany_Send_Email_Response = {
  __typename?: 'updatemany_send_email_response';
  meta?: Maybe<Meta>;
};

export type Updatemany_Todo_Access_Response = {
  __typename?: 'updatemany_todo_access_response';
  data: Array<Todo_Access>;
  meta?: Maybe<Meta>;
};

export type Updatemany_Todo_History_Response = {
  __typename?: 'updatemany_todo_history_response';
  data: Array<Todo_History>;
  meta?: Maybe<Meta>;
};

export type Updatemany_Todo_Response = {
  __typename?: 'updatemany_todo_response';
  data: Array<Todo>;
  meta?: Maybe<Meta>;
};

export type Updatemany_User_Connection_Response = {
  __typename?: 'updatemany_user_connection_response';
  data: Array<Maybe<User_Connection>>;
  meta?: Maybe<Meta>;
};

export type Updatemany_User_Response = {
  __typename?: 'updatemany_user_response';
  data: Array<Maybe<User>>;
  meta?: Maybe<Meta>;
};

export type Updateone_Send_Email_Response = {
  __typename?: 'updateone_send_email_response';
  meta?: Maybe<Meta>;
};

export type User = {
  __typename?: 'user';
  authentication_state?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  identifier: Scalars['String']['output'];
  last_active?: Maybe<Scalars['String']['output']>;
  passkey?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
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
  connected_user: Findone_User_Response;
  created_at: Scalars['String']['output'];
  created_by: Findone_User_Response;
  id: Scalars['Int']['output'];
  identifier: Scalars['String']['output'];
  revoked: Scalars['Boolean']['output'];
  revoked_at?: Maybe<Scalars['String']['output']>;
  revoked_by?: Maybe<Scalars['Int']['output']>;
  status: Scalars['Boolean']['output'];
  updated_at: Scalars['String']['output'];
  updated_by?: Maybe<Scalars['Int']['output']>;
  user: Findone_User_Response;
  user_uuid?: Maybe<Scalars['String']['output']>;
  uuid: Scalars['String']['output'];
};


export type User_ConnectionConnected_UserArgs = {
  connected_user: Get_User_Input;
};


export type User_ConnectionCreated_ByArgs = {
  created_by: Get_User_Input;
};


export type User_ConnectionUserArgs = {
  user: Get_User_Input;
};
