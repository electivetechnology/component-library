export type ActionBarTheme =
  | ActionBarThemesConst.CLIENT
  | ActionBarThemesConst.CAMPAIGN
  | ActionBarThemesConst.OUTLINE
  | ActionBarThemesConst.ENGAGEMENT
  | ActionBarThemesConst.CONVERSATION_TEMPLATE
  | ActionBarThemesConst.QUESTION
  | ActionBarThemesConst.MESSAGE_TEMPLATE
  | ActionBarThemesConst.LABEL
  | ActionBarThemesConst.COMPANY
  | ActionBarThemesConst.PROFILE

export enum ActionBarThemesConst {
  CAMPAIGN = 'campaign',
  CLIENT = 'client',
  OUTLINE = 'outline',
  ENGAGEMENT = 'engagement',
  CONVERSATION_TEMPLATE = 'conversationTemplate',
  QUESTION = 'question',
  MESSAGE_TEMPLATE = 'messageTemplate',
  LABEL = 'label',
  COMPANY = 'company',
  PROFILE = 'profile'
}
