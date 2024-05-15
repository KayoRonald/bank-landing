import type { DeepPartial, Theme } from '@chakra-ui/react'

export const styles: DeepPartial<Theme['styles']> = {
  global: {
    'body::-webkit-scrollbar': {
      width: '5px'
    },
    'body::-webkit-scrollbar-track': {
      background: 'black'
    },
    'body::-webkit-scrollbar-thumb': {
      background: 'var(--chakra-colors-gray-500)',
      borderRadius: '3px'
    },
    'body::-webkit-scrollbar-thumb:hover': {
      background: 'var(--chakra-colors-gray-700)'
    }
  }
}
