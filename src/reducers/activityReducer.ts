import type { Activity } from "../types";

export interface ActivityActions {
	type: "save-activity";
	payload: { newActivity: Activity };
}

interface activityState {
	activities: Activity[];
}

export const initialState: activityState = {
	activities: [],
};

export const activityReducer = (
	state: activityState = initialState,
	action: ActivityActions,
) => {
	if (action.type === "save-activity") {
		return {
			...state,
			activities: [...state.activities, action.payload.newActivity],
		};
	}

	return state;
};
