import React from 'react';
const cnxt = React.createContext();
const CnxtProvider = cnxt.Provider;
const CnxtConsumer = cnxt.Consumer;


export {CnxtProvider , CnxtConsumer};