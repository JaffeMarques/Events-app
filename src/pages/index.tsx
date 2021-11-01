import { Layout } from "systems/Core/components/Layout";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return <Layout title="Events App">
    <div className="">
      <Button colorScheme="primary" m={10}>
        Click
      </Button>
    </div>
  </Layout>
}
