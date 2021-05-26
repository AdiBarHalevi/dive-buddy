import React from "react";
import styled from "styled-components";

const SelectComp = ({ setDiverSkillLevelState, divingSkills }) => {
  const handleChange = (e) => setDiverSkillLevelState(e.target.value);

  return (
    <SelectStyle onChange={handleChange}>
      {divingSkills.map((skill, i) => (
        <option key={i}>{skill}</option>
      ))}
    </SelectStyle>
  );
};

export default SelectComp;

const SelectStyle = styled.select`
  height: 1.5rem;
`;
