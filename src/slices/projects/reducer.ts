import { createSlice } from "@reduxjs/toolkit";
import { getProjectList, addProjectList, deleteProjectList,getProjectById,updateProjectById ,getSimpleProject,getUninvited} from './thunk';
export const initialState : any= {
    projectLists: [],
    error: "",
    toastData: "",
    
};
const ProjectsSlice = createSlice({
    name: 'ProjectsSlice',
    initialState,
    reducers: {
        resetProjectFlagChange(state : any) {
            state.toastData = "";
            state.error = "";
          },
    },
    extraReducers: (builder) => {
        builder.addCase(getProjectList.fulfilled, (state:any, action:any) => {
            state.projectLists = action.payload;
        });
        builder.addCase(getProjectList.rejected,(state:any, action:any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(getUninvited.fulfilled, (state:any, action:any) => {
            state.projectLists = action.payload;
        });
        builder.addCase(getUninvited.rejected,(state:any, action:any) => {
            state.error = action.payload || null;
        });
        builder.addCase(getSimpleProject.fulfilled, (state:any, action:any) => {
            state.projectLists = action.payload;
        });
        builder.addCase(getSimpleProject.rejected,(state:any, action:any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addProjectList.fulfilled, (state:any, action:any) => {
            // state.projectLists.push(action.payload.data);
            state.toastData=action.payload.toastData;
           if (action.payload.error){
            state.error=action.payload.error;
           }
           console.log(state.error)

        });
        builder.addCase(addProjectList.rejected, (state:any, action:any) => {
            console.log(action.payload)
            state.error = action.payload || null;
        });
        builder.addCase(getProjectById.fulfilled, (state:any, action:any) => {
            state.projectLists.push(action.payload);
           if (action.payload.error){
            state.error=action.payload.error;
           }
        });
        builder.addCase(getProjectById.rejected, (state:any, action:any) => {
            console.log(action.payload)
            state.error = action.payload || null;
        });
        builder.addCase(updateProjectById.fulfilled, (state:any, action:any) => {
            // state.projectLists.push(action.payload);
           if (action.payload.error){
            state.error=action.payload.error;
           }
           else{
            state.toastData="Update success";
           }
        });
        builder.addCase(updateProjectById.rejected, (state:any, action:any) => {
            console.log(action.payload)
            state.error = "Update Fail";
        });

        builder.addCase(deleteProjectList.fulfilled, (state:any, action:any) => {
            // state.projectLists = state.projectLists.filter((project:any) => project.id.toString() !== action.payload.id.toString());
        });
        builder.addCase(deleteProjectList.rejected, (state:any, action:any) => {
            state.error = action.payload.error || null;
        });
    }
});
export const {
    resetProjectFlagChange
  } = ProjectsSlice.actions;
export default ProjectsSlice.reducer;