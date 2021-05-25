import React from "react"

const SelectComp = ({setDiverSkillLevelState,divingSkills})=>{

    const handleChange=(e)=> setDiverSkillLevelState(e.target.value)

    return <select onChange={handleChange}>
        {divingSkills.map((skill,i)=><option key ={i}>{skill}</option>)}
    </select>
}

export default SelectComp