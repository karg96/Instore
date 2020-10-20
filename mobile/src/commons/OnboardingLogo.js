import React from 'react'
import {Box,Text} from 'react-native-design-utility'
import {images} from '../constants/images'
import {Image} from 'react-native'

const OnboardingLogo=()=>(
    <Box center>
    <Box mb="sm">
      <Image source={images.logo}/>
    </Box>
  <Box mb="sm">
      <Text size="xl">In
      <Text color="green" size="xl">Store</Text>
      </Text>
  </Box>
  <Text size="sm">easy grocery shopping</Text>
  </Box>
)

export default OnboardingLogo