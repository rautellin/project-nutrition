import React from 'react'
import { useDispatch } from 'react-redux'
import { userinterface } from '../reducers/userinterface'
import { HeadLine } from '../lib/Texts'


export const Home = () => {
  const dispatch = useDispatch()
  dispatch(userinterface.actions.setHeader(""))

  return (
    <HeadLine>IIFYM</HeadLine>
  )
}