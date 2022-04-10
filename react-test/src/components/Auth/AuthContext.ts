import React from 'react'
import { claim } from './Auth.models'

const AuthContext = React.createContext<{
    claims: claim[];
    update(claims: claim[]): void;
}>({ claims: [], update: () => { } });

export default AuthContext;