import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  const handleClick = () => {
    alert(`This would take you to ${title}`);
  };

  return (
    <div>
      <Box bg="white" borderRadius="lg" boxShadow="md" textColor="black">
        <VStack spacing={2} align="start">
          <Image src={imageSrc} alt={title} borderRadius="lg" />
          <VStack padding={2} align="start">
            <Heading as="h2" size="md">
              {title}
            </Heading>
            <Text>{description}</Text>

            <HStack onClick={handleClick} cursor="pointer">
              <Text fontWeight="500">See more</Text>
              <FontAwesomeIcon icon={faArrowRight} />
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </div>
  );
};

export default Card;
