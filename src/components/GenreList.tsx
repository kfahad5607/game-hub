import useGenres from "../hooks/useGenres";
import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const skeletons = [...Array(20).keys()];

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY="5px">
            <HStack>
              <Skeleton
                flexShrink={0}
                width="32px"
                height="32px"
                borderRadius={8}
              />
              <SkeletonText noOfLines={1} skeletonHeight="2">
                lorem ipsum dolor
              </SkeletonText>
            </HStack>
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
