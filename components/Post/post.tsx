import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DtoPost } from "@/lib/dto-post";

export default function CardWithForm({
  author,
  description,
  image,
  date,
}: DtoPost) {
  return (
    <Card className="w-[350px] flex items-center flex-col justify-center">
      <CardHeader>
        <h1 className="text-xl">{author}</h1>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-4">
          <div className="w-auto h-auto">
            {image ? (
              <Image
                src={image ? image : "/"}
                alt="post image"
                width={200}
                height={200}
                loading="lazy"
                className="rounded-md"
              />
            ) : (
              <p>No image</p>
            )}
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
