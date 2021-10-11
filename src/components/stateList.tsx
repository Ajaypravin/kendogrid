import React from "react";
import {
  Grid,
  GridColumn,
  GridDetailRowProps,
  GridExpandChangeEvent,
} from "@progress/kendo-react-grid";
import { StateModel } from "../models/StateModel";

interface StateListProps {
  states: StateModel[];
  loading: boolean;
  error: null | string;
  modifyStates: Function;
}

const StateList: React.FC<StateListProps> = ({
  states,
  loading,
  error,
  modifyStates,
}) => {
  const expandChange = (event: GridExpandChangeEvent) => {
    event.dataItem.expanded = event.value;
    modifyStates([...states]);
    return;
  };
  const CityList = (props: GridDetailRowProps) => {
    const { cities } = props.dataItem;

    const cityWithZip = [];
    for (const [key, value] of Object.entries(cities)) {
      const zip = new String(value);

      cityWithZip.push({
        city: key,
        zip: zip.toString(),
      });
    }
    return (
      <Grid style={{ height: "400px" }} fixedScroll={true} data={cityWithZip}>
        <GridColumn field="city" title="city" />
        <GridColumn field="zip" title="Zip" />
      </Grid>
    );
  };

  return loading ? (
    <div>loading......</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <Grid
      data={states}
      expandField="expanded"
      onExpandChange={expandChange}
      detail={CityList}
    >
      <GridColumn title="state" field="name" />
    </Grid>
  );
};

export default StateList;
