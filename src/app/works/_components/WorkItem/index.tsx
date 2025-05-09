import { Work } from "@/app/works/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import styles from "./WorkItem.module.css";

type WorkItemProps = {
  work: Work;
};

function WorkItem({ work }: WorkItemProps) {
  const { title, imageSrc, description, source } = work;

  return (
    <Card className={styles.container}>
      <CardHeader>
        <CardTitle className={styles.title}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={imageSrc}
          alt={title}
          layout="responsive"
          width={16}
          height={9}
        />
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={source} target="_blank" rel="noopener noreferrer">
          リポジトリ
        </Link>
      </CardFooter>
    </Card>
  );
}

export default WorkItem;
