import React, { useState } from 'react';

const RegisterType = ({ type }) => {
  const [variableType, setVariableType] = useState(type);
    const updateVariableType = (event) => {
        console.log('type',event.target.value);
        const newVariableType = event.target.value;
        setVariableType(newVariableType);
      };

        


  return (
<></>
  );
};

export default RegisterType;