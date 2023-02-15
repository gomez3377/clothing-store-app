import React from 'react'
import './directory-item.styles.jsx'
import { BackgroundImage, DirectoryBodyContainer, DirectoryBodyText, DirectoryBodyTitle, DirectoryItemContainer } from './directory-item.styles.jsx'

const DirectoryItem = ( { category } ) => {
    const {title, imageUrl} = category
  return (
    <DirectoryItemContainer>
    <BackgroundImage className='background-image' style={{
      backgroundImage: `url(${imageUrl})`
    }} />
     <DirectoryBodyContainer>
       <DirectoryBodyTitle>{title}</DirectoryBodyTitle>
       <DirectoryBodyText>Shop Now</DirectoryBodyText>
     </DirectoryBodyContainer>
  </DirectoryItemContainer>
  )
}

export default DirectoryItem