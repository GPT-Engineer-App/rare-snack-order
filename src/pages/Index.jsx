import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const snacks = [
  {
    id: 1,
    name: "Cosmic Crunch",
    description: "A celestial mix of sweet and savory flavors.",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNuYWNrJTIwbWl4fGVufDB8fHx8MTcxMDcxMzM4OHww&ixlib=rb-4.0.3&q=80&w=1080",
    price: 8.99,
  },
  {
    id: 2,
    name: "Lava Bites",
    description: "Spicy and fiery, these snacks are not for the faint of heart.",
    image: "https://images.unsplash.com/photo-1575919159574-e49dc9e1228f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGljeSUyMHJlZCUyMHNuYWNrc3xlbnwwfHx8fDE3MTA3MTMzODh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    price: 6.99,
  },
  {
    id: 3,
    name: "Lunar Cheese",
    description: "A unique twist on classic cheese puffs, straight from the moon.",
    image: "https://images.unsplash.com/photo-1578615437406-511cafe4a5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb29uJTIwc2hhcGVkJTIwY2hlZXNlJTIwc25hY2tzfGVufDB8fHx8MTcxMDcxMzM4OHww&ixlib=rb-4.0.3&q=80&w=1080",
    price: 7.49,
  },
  {
    id: 4,
    name: "Martian Munchies",
    description: "A mysterious mix of flavors from the red planet.",
    image: "https://images.unsplash.com/photo-1604079681864-c6fbd7eb109c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWQlMjBwbGFuZXQlMjB0aGVtZWQlMjBzbmFja3N8ZW58MHx8fHwxNzEwNzEzMzg5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    price: 9.99,
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const toast = useToast();

  const addToCart = (snack) => {
    setCart([...cart, snack]);
    toast({
      title: "Added to cart",
      description: `${snack.name} has been added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Flex align="center" mb={8}>
        <Heading as="h1" size="xl" mr={4}>
          Rare Snacks
        </Heading>
        <Spacer />
        <IconButton icon={<FaShoppingCart />} aria-label="Shopping Cart" variant="outline" />
        <Text ml={2}>{cart.length} items</Text>
      </Flex>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
        {snacks.map((snack) => (
          <Box key={snack.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={snack.image} alt={snack.name} mb={4} />
            <Heading as="h2" size="md" mb={2}>
              {snack.name}
            </Heading>
            <Text mb={4}>{snack.description}</Text>
            <Flex align="center">
              <Text fontWeight="bold">${snack.price}</Text>
              <Spacer />
              <Button onClick={() => addToCart(snack)}>Add to Cart</Button>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
