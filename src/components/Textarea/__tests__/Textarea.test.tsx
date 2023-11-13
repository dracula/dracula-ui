import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Textarea } from '@/components/Textarea/Textarea'
import { Heading } from '@/components/Heading/Heading'

docs(Textarea, {
  basic() {
    return snapshot('Usage', Usage, 'Styles or abstrats HTML textarea elements.')
  },
  variations() {
  	return [
  	  snapshot(
  	  	'Colors',
  	  	Colors,
  	  	'Textareas can be customized to use any of the Dracula UI theme colors.'
  	  ),
  	  snapshot(
  	  	'Sizes',
  	  	Sizes,
  	  	'Textareaas can be customized to use several different sizes.'
  	  ),
  	  snapshot(
  	  	'Variants',
  	  	Variants,
  	  	'Use the `outline` variant to represent subtler Textareas'
  	  ),
  	  snapshot(
  	  	'Border Sizes',
  	  	BorderSizes,
  	  	'Border size can be customized to use several different sizes'
  	  )
  	]
  }
})

function Usage() {
	return <Textarea placeholder="Textarea" color="white"></Textarea>
}

function Colors() {
  return (
    <Box>
      <Textarea color="purple" placeholder="purple" m="xs"></Textarea>
      <Textarea color="green" placeholder="green" m="xs"></Textarea>
    </Box>
  )
}

function Sizes() {
  return (
    <Box>
      <Textarea color="white" size="sm" placeholder="small" m="xs"></Textarea>
      <Textarea color="white" size="md" placeholder="medium" m="xs"></Textarea>
      <Textarea color="white" size="lg" placeholder="large" m="xs"></Textarea>
    </Box>
  )
}

function Variants() {
  return (
    <Box>
      <Textarea color="white" variant="normal" placeholder="normal" m="xs"></Textarea>
      <Textarea color="white" variant="outline" placeholder="outline" m="xs"></Textarea>
    </Box>
  )
}

function BorderSizes() {
  return (
    <Box>
      <Box mb="sm">
        <Heading size="sm">sm</Heading>
        <Textarea
          color="green"
          variant="normal"
          borderSize="sm"
          placeholder="small border outline"
          m="xs"
        ></Textarea>
        <Textarea
          color="green"
          variant="outline"
          borderSize="sm"
          placeholder="small border outline"
          m="xs"
        ></Textarea>
      </Box>

      <Box mb="sm">
        <Heading size="sm">md</Heading>

        <Textarea
          color="purple"
          variant="normal"
          borderSize="md"
          placeholder="medium border outline"
          m="xs"
        ></Textarea>
        <Textarea
          color="purple"
          variant="outline"
          borderSize="md"
          placeholder="medium border outline"
          m="xs"
        ></Textarea>
      </Box>

      <Box mb="sm">
        <Heading size="sm">lg</Heading>

        <Textarea
          color="yellow"
          variant="normal"
          borderSize="lg"
          placeholder="large border outline"
          m="xs"
        ></Textarea>
        <Textarea
          color="yellow"
          variant="outline"
          borderSize="lg"
          placeholder="large border outline"
          m="xs"
        ></Textarea>
      </Box>
    </Box>
  )
}
