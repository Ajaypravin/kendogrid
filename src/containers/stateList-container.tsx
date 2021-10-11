import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/useActions";
import StateList from "../components/stateList";

const StateListContainer: React.FC = (): JSX.Element => {
  const { fetchStates, updateStates } = useAction();
  const { data = [], loading, error } = useTypedSelector(
    (state) => state.states
  );
  console.log(data);
  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <div className="container">
      <StateList
        states={data}
        loading={loading}
        error={error}
        modifyStates={updateStates}
      />
    </div>
  );
};
export default StateListContainer;
