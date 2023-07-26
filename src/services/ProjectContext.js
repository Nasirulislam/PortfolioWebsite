import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selectedProj, setSelectedProj] = useState('');
  const [projChanged, setProjChanged] = useState(false);

  useEffect(() => {console.log("selected project changed in th context api: ",selectedProj)},[selectedProj])

  return (
    <ProjectContext.Provider value={{ selectedProj, setSelectedProj, projChanged, setProjChanged }}>
      {children}
    </ProjectContext.Provider>
  );
};