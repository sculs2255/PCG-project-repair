const url = process.env.API_URL
export default {
  user: {
    main: url + '/User/GetUserList',
    info_edit: url + '/User',
    update: url + '/User',
    register: url + '/AuthManagement/Register',
    create: url + '/User/Create',
    delete: url + '/User',
    profile_edit: url + '/Profile',
    changepw: url + '/Profile/ChangePW',
    resetpw: url + '/User/ResetPW',
    genpw: url + '/User/GeneratePassword',
    roles: url + '/UserRoles/Roles',
    userlist: url + '/User/List'
  },

  case: {
    main: url + '/Case',
  },
  status: {
    main: url + '/Status',
  },

  priority: {
    main: url + '/Priority',
  },

  country: {
    main: url + '/Country',
  },

  branch: {
    main: url + '/Branch',
  },

  module: {
    main: url + '/Module',
  },
  
  hdsystem: {
    main: url + '/HDSystem',
  },

  department: {
    main: url + '/Department',
  },

  workplace: {
    main: url + '/Workplace',
  },




}
