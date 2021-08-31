import React from 'react'
import styled from 'styled-components'
import { FeatureDatas } from './FeatureDatas'
import FeatureItem from './FeatureItem'

const Feature = () => {
  return (
    <Container>
      {
        FeatureDatas.map((value, key)=>{
          return (
            <FeatureItem value={value} key={key}/>
          )
        })
      }
    </Container>
  )
}
const Container = styled.div`
  max-width: 1237px;
  height: 85px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 88px;
`
export default Feature
