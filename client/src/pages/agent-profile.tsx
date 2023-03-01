// Packages
import React from 'react'
import { useOne } from '@pankod/refine-core';
import { useParams } from "@pankod/refine-react-router-v6";
import { Typography } from '@pankod/refine-mui';

// Components
import { Profile } from 'components';

const AgentProfile = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string,
  });

  const agentProfile = data?.data?.[0] ?? {};

  if (isLoading) return <Typography>loading...</Typography>;
  if (isError) return <Typography>error...</Typography>;

  return (
    <Profile
      type="Agent"
      name={agentProfile?.name}
      email={agentProfile?.email}
      avatar={agentProfile?.avatar}
      properties={agentProfile?.allProperties}
    />
  )
}

export default AgentProfile;