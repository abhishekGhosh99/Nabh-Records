import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.jpeg"
        alt="Nabh Records"
        width={100}
        height={100}
        priority
        className="rounded-full"
      />
    </Link>
  );
};

export default Logo;
