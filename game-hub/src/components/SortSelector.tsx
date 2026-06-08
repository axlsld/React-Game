import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="Relevance">Relevance</Menu.Item>
          <Menu.Item value="Date Added">Date Added</Menu.Item>
          <Menu.Item value="Name">Name</Menu.Item>
          <Menu.Item value="Release Date">Release Date</Menu.Item>
          <Menu.Item value="Popularity">Popularity</Menu.Item>
          <Menu.Item value="Average rating">Average rating</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}

export default SortSelector