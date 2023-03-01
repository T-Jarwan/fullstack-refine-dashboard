import { useGetIdentity, useOne } from "@pankod/refine-core";

import { Profile } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data?.[0] ?? {};

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  console.log('ssss', myProfile)

  return (
    <Profile
      type="My"
      name={myProfile?.name}
      email={myProfile?.email}
      avatar={myProfile?.avatar}
      properties={myProfile?.allProperties}
    />
  );
};

export default MyProfile;