import { Fragment } from "react";
import { Heading } from "@chakra-ui/react";
import Image from "next/image";

export interface IProps {
  fullName: string;
  email: string;
  avatarUrl: string;
}

const UserDetails = ({ fullName, email, avatarUrl }: IProps) => {
  return (
    <Fragment>
      <Heading as="h1" size="4xl" noOfLines={1}>
        {fullName}
      </Heading>
      <Heading as="h2" size="3xl" noOfLines={1}>
        {email}
      </Heading>
      <Image
        src={avatarUrl}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </Fragment>
  );
};

export default UserDetails;
