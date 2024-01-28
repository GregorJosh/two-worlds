import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
  children: string;
}

export const MenuItem = (props: Props) => {
  const { children, ...linkProps } = props;

  return (
    <li>
      <Link {...linkProps} prefetch={false}>
        {children}
      </Link>
    </li>
  );
};
