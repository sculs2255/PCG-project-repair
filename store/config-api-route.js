const url = process.env.API_URL;
export default {
  user: {
    main: url + "/User/GetUserList",
    info_edit: url + "/User",
    update: url + "/User",
    register: url + "/AuthManagement/Register",
    create: url + "/User/Create",
    delete: url + "/User",
    profile_edit: url + "/Profile",
    changepw: url + "/Profile/ChangePW",
    resetpw: url + "/User/ResetPW",
    genpw: url + "/User/GeneratePassword",
    roles: url + "/UserRoles/Roles",
    userlist: url + "/User/List"
  },

  case: {
    main: url + "/Case",
    my_list: url + "/Case/List"
  },
  status: {
    main: url + "/Status"
  },
  incidentCase: {
    main: url + "/IncidentCase"
  },
  priority: {
    main: url + "/Priority"
  },

  country: {
    main: url + "/Country"
  },

  branch: {
    main: url + "/Branch"
  },

  module: {
    main: url + "/Module"
  },

  hdsystem: {
    main: url + "/HDSystem"
  },

  department: {
    main: url + "/Department"
  },
  receiver: {
    main: url + "/Receiver"
  },
  informer: {
    main: url + "/Informer"
  },
  cancel: {
    main: url + "/Cancel"
  },
  workplace: {
    main: url + "/Workplace"
  }
};
