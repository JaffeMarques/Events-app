import { Layout } from "systems/Core/components/Layout";
import { gql, useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import tw from "twin.macro";
import { Spinner } from "@chakra-ui/spinner";

const EVENTS_QUERY = gql`
  query EventsQuery {
    events {
      id
      title
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(EVENTS_QUERY)

  return (
    <Layout title="Events App">
      {loading ? <div css={styles.root}><Spinner /></div> : (
        <div css={styles.root}>
          {data?.events.map((event: any) => <div key={event.id}>{event.title}</div>)}
        </div>
      )}
      
    </Layout>
  )
}

const styles = {
  root: () => css`
    ${tw`flex flex-col items-center justify-center width[100vw] height[100vh]`}
  `
}



