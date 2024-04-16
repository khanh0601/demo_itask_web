export const baseURL:string="http://ec2-54-254-231-122.ap-southeast-1.compute.amazonaws.com:8080/"
export const registerUserAPI:string= baseURL+"api/v1/register"
export const getUserByEmail:string= baseURL+"api/v1/profile"
export const getUserLogin:string= baseURL+"api/v1/login"
export const getUserProfile:string= baseURL+"api/v1/account"
export const getListProjects:string= baseURL+"api/v1/projects"
export const uploadFile:string= baseURL+"api/v1/upload"
export const changePassword:string= baseURL+"api/v1/change/password"
export const forgotPassword:string= baseURL+"api/v1/forgot/password"
export const verifyCode:string= baseURL+"api/v1/verify_reset_password"
export const resetPassword:string= baseURL+"api/v1/reset/password"
export const getTaskListAPI:string= baseURL+"api/v1/tasks"
export const getTaskByIdAPI:string= baseURL+"api/v1/tasks"
export const deleteTaskAPI:string= baseURL+"api/v1/tasks"
export const simpleProjectAPI:string= baseURL+"api/v1/projects/simple-list"
export const inviteMemberAPI:string= baseURL+"api/v1/projectMembers/invitation"
export const assigneesAPI:string= baseURL+"api/v1/taskAssignees"
export const uninvitedAPI:string= baseURL+"api/v1/projectMembers/invited-member"
export const getUnassignessAPI:string= baseURL+"api/v1/projectMembers/invited-member"
export const deleteMemberAPI:string= baseURL+"api/v1/projectMembers"
export const getMemberAssigneesAPI:string= baseURL+"api/v1/projectMembers/unassigned-members"
export const assignMemberAPI:string= baseURL+"api/v1/taskAssignees"
