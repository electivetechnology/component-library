import { admin, add, api, back, billing, business, briefs, call, candidates, completed, contacts, conversation, remove, download, email, engagement, list, help, home, upload, inbox, invite, invited, label, linkOut, meeting, newServiceAccounts, newUser, pending, permissions, phone, placed, rejected, roles, serviceAccounts, settings, folder, signout, sms, sort, support, sync, unsuccessful, users, web, work, filter, checked, save } from "organisms/Icons"

export enum IconsConst {
  ADD = 'Add',
  ADMIN = 'Admin',
  API = 'Api',
  BACK = 'Back',
  BILLING = 'Billing',
  BUSINESS = 'Business',
  BRIEFS = 'Briefs',
  CALL = 'Call',
  CANDIDATES = 'Candidates',
  CHECKED = 'Checked',
  COMPLETED = 'Completed',
  CONTACTS = 'Contacts',
  CONVERSATION = 'Conversation',
  CUP = 'Cup',
  DELETE = 'Delete',
  DOWNLOAD = 'Download',
  EMAIL = 'Email',
  ENGAGEMENT = 'Engagement',
  FOLDER_SHARED = 'Folder shared',
  FILTER = 'Filter',
  HELP = 'Help',
  HOME = 'Home',
  IMPORT = 'Import',
  INBOX = 'Inbox',
  INVITE = 'Invite',
  INVITED = 'Invited',
  LABEL = 'Label',
  LINK_OUT = 'Link out',
  LIST = 'List',
  MEETING_ROOM = 'Meeting room',
  NEW_SERVICE_ACCOUNTS = 'New service accounts',
  NEW_USER = 'New user',
  PENDING = 'Pending',
  PERMISSIONS = 'Permissions',
  PHONE = 'Phone',
  REJECTED = 'Rejected',
  ROLES = 'Roles',
  SAVE = 'Save',
  SERVICE_ACCOUNTS = 'Service accounts',
  SETTINGS = 'Settings',
  SIGH_OUT = 'Sign out',
  SMS = 'Sms',
  SORT = 'Sort',
  SUPPORT = 'Support',
  SYNC = 'Sync',
  UNSUCCESSFUL = 'Unsuccessful',
  USERS = 'Users',
  WEB = 'Web',
  WORK_OFF = 'Work off'
}

export const renderIcon = (icon: IconsConst) => {
  switch (icon) {
    case IconsConst.ADD:
      return add
    case IconsConst.ADMIN:
      return admin
    case IconsConst.API:
      return api
    case IconsConst.BACK:
      return back
    case IconsConst.BILLING:
      return billing
    case IconsConst.BUSINESS:
      return business
    case IconsConst.BRIEFS:
      return briefs
    case IconsConst.CALL:
      return call
    case IconsConst.CANDIDATES:
      return candidates
    case IconsConst.CHECKED:
      return checked
    case IconsConst.COMPLETED:
      return completed
    case IconsConst.CONTACTS:
      return contacts
    case IconsConst.CONVERSATION:
      return conversation
    case IconsConst.CUP:
      return placed
    case IconsConst.DELETE:
      return remove
    case IconsConst.DOWNLOAD:
      return download
    case IconsConst.EMAIL:
      return email
    case IconsConst.ENGAGEMENT:
      return engagement
    case IconsConst.FOLDER_SHARED:
      return folder
    case IconsConst.FILTER:
      return filter
    case IconsConst.HELP:
      return help
    case IconsConst.HOME:
      return home
    case IconsConst.IMPORT:
      return upload
    case IconsConst.INBOX:
      return inbox
    case IconsConst.INVITE:
      return invite
    case IconsConst.INVITED:
      return invited
    case IconsConst.LABEL:
      return label
    case IconsConst.LINK_OUT:
      return linkOut
    case IconsConst.LIST:
      return list
    case IconsConst.MEETING_ROOM:
      return meeting
    case IconsConst.NEW_SERVICE_ACCOUNTS:
      return newServiceAccounts
    case IconsConst.NEW_USER:
      return newUser
    case IconsConst.PENDING:
      return pending
    case IconsConst.PERMISSIONS:
      return permissions
    case IconsConst.PHONE:
      return phone
    case IconsConst.REJECTED:
      return rejected
    case IconsConst.ROLES:
      return roles
    case IconsConst.SAVE:
      return save
    case IconsConst.SERVICE_ACCOUNTS:
      return serviceAccounts
    case IconsConst.SETTINGS:
      return settings
    case IconsConst.SIGH_OUT:
      return signout
    case IconsConst.SMS:
      return sms
    case IconsConst.SORT:
      return sort
    case IconsConst.SUPPORT:
      return support
    case IconsConst.SYNC:
      return sync
    case IconsConst.UNSUCCESSFUL:
      return unsuccessful
    case IconsConst.USERS:
      return users
    case IconsConst.WEB:
      return web
    case IconsConst.WORK_OFF:
      return work
    default:
      return null
  }
}
