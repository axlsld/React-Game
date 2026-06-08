import { HStack, List, Skeleton, SkeletonText } from '@chakra-ui/react'

const GenreListSkeleton = () => {
  return (
    <List.Root>
      <HStack>
        <Skeleton></Skeleton>
        <SkeletonText></SkeletonText>
      </HStack>
    </List.Root>
  )
}

export default GenreListSkeleton