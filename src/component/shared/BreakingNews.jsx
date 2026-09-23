import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "This website was created just for practice. I do not know whether the news featured on this website is true or false.",
  },
  {
    id: 2,
    title: "This website was created just for practice. I do not know whether the news featured on this website is true or false.",
  },
  {
    id: 3,
    title: "This website was created just for practice. I do not know whether the news featured on this website is true or false.",
  },
  {
    id: 4,
    title: "This website was created just for practice. I do not know whether the news featured on this website is true or false.",
  },
  {
    id: 5,
    title: "This website was created just for practice. I do not know whether the news featured on this website is true or false.",
  },
  {
    id: 6,
    title: "This website was created just for practice. I do not know whether the news featured on this website is true or false.",
  },
];


const BreakingNews = () => {
    return (
        <div className="w-10/12 flex gap-4 mx-auto bg-slate-200 p-4">
            <Button className="rounded-sm" variant="danger">Latest</Button>
            <Marquee pauseOnHover={true}>
            {/* <div className="flex gap-10">
                {news.map((n, index) => <p className="font-bold" key={index}>{n.title}</p>)}
                </div> */}
                <p className="font-bold"><span className="bg-gray-200 text-gray-200">sfasasassfsdssd</span>শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে,<span className="text-red-800 bg-white">ইউজারদের জন্য নয়</span>.<span className="bg-gray-200 text-gray-200">sfsfsdssd</span>News and information are provided only for the developers practice, <span className="bg-white text-red-800">not for users.</span></p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;