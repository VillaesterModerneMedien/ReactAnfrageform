import { createContext, useReducer } from 'react';
import produce from 'immer';

export const AppContext = createContext();

/**
 * Action Konstanten.
 * Dienen dafür, dass man überall in der App, wo man eine Action dispatched
 * den selben Wert verwendet, der hier im Reducer (verarbeitet des State) auch
 * genutzt wird.
 *
 * Entspricht dem, was man per dispatch({ type: XYZ, ...}) anspricht und im switch Abfragt.
 */
export const SET_STEP_START = 'SET_STEP_START';
export const SET_STEP_MAIN = 'SET_STEP_MAIN';
export const ADD_QUERY = 'ADD_QUERY';
export const REMOVE_QUERY = 'REMOVE_QUERY';
export const SET_STEP_DATA = 'SET_STEP_DATA';

/**
 * Initialer State, wenn noch keine Action gefeuert wurde.
 * Der erste Dispatch, basiert auf diesem initial State.
 * Mit jedem Dispatch verändert sich der State dann.
 */
const initialState = {};

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
    case SET_STEP_START:
      if (!draft.start) {
        draft.start = {};
      }
      draft.start.containers = action.start.containers;
      draft.start.layers = action.start.layers;
      draft.start.connectedContainers = action.start.connectedContainers;

      draft.content = {};
      break;

    case SET_STEP_DATA:
      draft.data.push(action.data);
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
