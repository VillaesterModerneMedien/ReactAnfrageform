import { createContext, useReducer } from "react";
import produce from "immer";

export const AppContext = createContext();

/**
 * Action Konstanten.
 * Dienen dafür, dass man überall in der App, wo man eine Action dispatched
 * den selben Wert verwendet, der hier im Reducer (verarbeitet des State) auch
 * genutzt wird.
 *
 * Entspricht dem, was man per dispatch({ type: XYZ, ...}) anspricht und im switch Abfragt.
 */
export const SET_STEP_START = "SET_STEP_START";
export const SET_STEP_DATA = "SET_STEP_DATA";
export const SET_STEP = "SET_STEP";
export const UPDATE_DATA = "UPDATE_DATA";
export const REMOVE_STEP = "REMOVE_STEP";

/**
 * Initialer State, wenn noch keine Action gefeuert wurde.
 * Der erste Dispatch, basiert auf diesem initial State.
 * Mit jedem Dispatch verändert sich der State dann.
 */
const initialState = {
  currentStep: 0,
  stepsIncluded: [0],
};

/**
 * Reducer
 * Diese Funktion verändert den jeweils aktuellsten State.
 * draft enthält den aktuellen State,
 * action das Action Object, welches dispatched wurde.
 *
 * Aufbasis von action.type wird geprüft welche Aktion ausgeführt werden soll.
 * Anschließend wird der draft so verändert, wie man es will.
 * Da wir keine 2 State updates in einem machen, wird jede Action mit einem break; quittiert.
 *
 * dispatch({ type: SET_STEP_START, start: { xyz: 1 }})
 */
const appReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_STEP:
      draft.currentStep = action.step;
      if (!draft.stepsIncluded.includes(action.step)) {
        draft.stepsIncluded.push(action.step);
      }
      break;

    case REMOVE_STEP:
      const previousStep = draft.stepsIncluded[draft.stepsIncluded.length - 2];
      draft.currentStep = previousStep;
      draft.stepsIncluded = draft.stepsIncluded.filter(
        (el) => el !== action.step
      );
      const tmpData = { ...draft.data };
      draft.data = {};
      Object.keys(tmpData)
        .filter((key) => !action.dataToRemove.some((el) => el === key))
        .forEach((key) => {
          draft.data[key] = tmpData[key];
        });

      break;

    case UPDATE_DATA:
      draft.data = { ...draft.data, ...action.data };
      break;

    default:
  }
}, initialState);

/**
 * Provider Komponente
 * Wird um alle anderen Komponenten gepackt (siehe App/index.js).
 * Jede Komponente unterhalb des Providers kann über useContext(AppContext), auf den State
 * zugreifen.
 */
export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const value = { state, dispatch }; // kurzschreibweise von json state: state

  /**
   * value ist das, was wir später über useContext:
   * const { state, dispatch } = useContext(AppContext);
   */
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
