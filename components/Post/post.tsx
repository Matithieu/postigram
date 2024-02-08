import Image from "next/image";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Props = {
  author: string;
  description: string;
  image: string;
  imageAlt: string;
  date: Date;
};

export default function CardWithForm({
  author,
  description,
  image,
  imageAlt,
  date,
}: Props) {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <p className="text-sm">{author}</p>
          </div>
          <div className="w-auto h-auto flex-col">
            <Image src={image} alt={imageAlt} width={100} height={100} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-start">
        <div className="flex-col flex">
          <p className="text-sm">{description}</p>
          <p className="text-sm">{date.toDateString()}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
