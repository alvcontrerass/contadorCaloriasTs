import type { Activity } from "../types";

export type ActivityActions =
	{type: "save-activity"; payload: { newActivity: Activity }} | 
	{type: "set-activeId"; payload: { id: Activity['id'] }} |
	{type: "delete-activeId"; payload: { id: Activity['id'] }}

export interface activityState {
	activities: Activity[],
	activeId: Activity['id']
}

export const initialState: activityState = {
	activities: [],
	activeId: '',
};

export const activityReducer = (
	state: activityState = initialState,
	action: ActivityActions,
) => {
	if (action.type === "save-activity") {
		
		let updatedActivities : Activity[] = []
		
		if(state.activeId) {
			updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
		} else {
			updatedActivities = [...state.activities, action.payload.newActivity]
		}

		return {
			...state,
			activities: updatedActivities,
			activeId: ""
		};
	}

	if(action.type === "set-activeId") {
		return {
			...state,
			activeId: action.payload.id
		}
	}

	if(action.type === "delete-activeId") {
		return {
			...state,
			activities: state.activities.filter( activity => activity.id !== action.payload.id)
		}
	}

	return state;
};
