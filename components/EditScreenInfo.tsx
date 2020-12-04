import React from 'react';

import { Container, Text, Button } from 'native-base';

const EditScreenInfo = ({ path }: { path: string }) => (
  <Container>
    <Text>{ path }</Text>
    <Button>
      <Text>start working on your app!</Text>
    </Button>
  </Container>
);

export default EditScreenInfo;
