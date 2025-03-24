import { ComponentChildren, createContext } from "preact";
import { Dispatch, useReducer } from "preact/hooks";
import { Me } from "../library/types.d.ts";

export const ClientState = createContext<[ClientState, Dispatch<ClientAction>]>(
  [{}, () => {}],
);

export interface ClientState {
  user?: Me;
}

export type ClientAction =
  | { type: "sign-in"; user: Me }
  | { type: "sign-out" };

export interface ClientStateProviderProps {
  children: ComponentChildren;
}

export default function ClientStateProvider(props: ClientStateProviderProps) {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <ClientState.Provider value={[state, dispatch]}>
      {props.children}
    </ClientState.Provider>
  );
}

function reducer(state: ClientState, action: ClientAction): ClientState {
  switch (action.type) {
    case "sign-in": {
      return { ...state, user: action.user };
    }
    case "sign-out": {
      return { ...state, user: undefined };
    }
  }
}
