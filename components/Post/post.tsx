import Image from "next/image";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

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
    <Card className="w-[350px] flex items-center flex-col justify-center">
      <CardHeader>
        <h1 className="text-xl">{author}</h1>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-4">
          <div className="w-auto h-auto">
            <Image src={image} alt={imageAlt} width={100} height={100} />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div>
          <p className="text-sm">{description}</p>
          <p className="text-sm">{date.toDateString()}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
