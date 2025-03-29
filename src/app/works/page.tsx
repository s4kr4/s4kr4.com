import { Metadata } from "next";
import styles from "./page.module.css";
import WorkItem from "@/app/works/_components/WorkItem";
import PageTitle from "@/components/PageTitle";

export type Work = {
  title: string;
  imageSrc: string;
  description: string;
  source: string;
};

const workList: Work[] = [
  {
    title: "s4kr4.com",
    imageSrc: "/images/s4kr4-com.png",
    description: "本サイトです。Next.js+TypeScriptで作成しました。",
    source: "https://github.com/s4kr4/s4kr4.github.io",
  },
  {
    title: "react-input-shortcut",
    imageSrc: "/images/react-input-shortcut.gif",
    description:
      "入力したキーの組み合わせを表示する、Reactのライブラリです。Webアプリ等のショートカットキー設定画面等での使用を想定しいます。",
    source: "https://github.com/s4kr4/react-input-shortcut",
  },
  {
    title: "Ghoost Shooter",
    imageSrc: "/images/ghoost-shooter.gif",
    description:
      "大学生の頃に作ったシューティングゲームです。DXライブラリを用いて、C++で実装しました。イラスト素材の一部の制作を友人に頼み、その他の実装は全て自分が担当しました。",
    source: "https://github.com/s4kr4/GhoostShooter",
  },
  {
    title: "実況通神",
    imageSrc: "/images/chatter.png",
    description:
      "『境界線上のホライゾン』というアニメに出てくるチャットツールのUIを真似て作った、Twitterクライアントです。Streaming APIの廃止以降の改修はしていないので、現状は動作しません。",
    source: "https://github.com/s4kr4/CHATTER",
  },
];

export const metadata: Metadata = {
  title: "Works",
  description: "s4kr4の制作物一覧です。",
};

export default function Works() {
  return (
    <div className={styles.container}>
      <PageTitle>Works</PageTitle>
      <div className={styles.content}>
        {workList.map((work, index) => (
          <WorkItem key={index} work={work} />
        ))}
      </div>
    </div>
  );
}
