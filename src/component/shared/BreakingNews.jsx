import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "Next.js 16 introduces improved performance and developer experience",
  },
  {
    id: 2,
    title: "React developers explore new features for modern web applications",
  },
  {
    id: 3,
    title: "Tailwind CSS makes responsive UI development faster and easier",
  },
  {
    id: 4,
    title: "AI tools are changing the way developers build web applications",
  },
  {
    id: 5,
    title: "Modern JavaScript continues to evolve with new language features",
  },
  {
    id: 6,
    title: "Full-stack development remains a popular path for web developers",
  },
];


const BreakingNews = () => {
    return (
        <div className="w-10/12 flex gap-4 mx-auto bg-slate-200 p-4">
            <Button className="rounded-sm" variant="danger">Latest</Button>
            <Marquee>
            <div className="flex gap-10">
                {news.map((n, index) => <p key={index}>{n.title}</p>)}
                </div>
            </Marquee>
        </div>
    );
};

export default BreakingNews;