import Image from "next/image";

const userInfo = [
  {
    id: 1,
    image: "/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png",
    title: "Anna Sven från Dedicare",
    name: "SSK, VC, stockholm",
    message: "Hej, hur mår du?",
  },
  {
    id: 2,
    image: "/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png",
    title: "Anna Sven från Dedicare",
    name: "SSK, VC, stockholm",
    message: "Hej, hur mår du?",
  },
  {
    id: 3,
    image: "/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png",
    title: "Anna Sven från Dedicare",
    name: "SSK, VC, stockholm",
    message: "Hej, hur mår du?",
  },
  {
    id: 4,
    image: "/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png",
    title: "Anna Sven från Dedicare",
    name: "SSK, VC, stockholm",
    message: "Hej, hur mår du?",
  },
  {
    id: 5,
    image: "/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png",
    title: "Anna Sven från Dedicare",
    name: "SSK, VC, stockholm",
    message: "Hej, hur mår du?",
  },
];
export default function Chatbar() {
  return (
    <div className="bg-background rounded-l-2xl p-5 w-[50%]">
      {userInfo.map((item, index) => {
        return (
          <div key={index} className="flex items-center gap-3 py-2">
            <div className="w-[50px] h-[50px]">
              <Image src={item.image} width={50} height={50} alt="" />
            </div>
            <div className="">
              <p className="font-semibold text-xl">{item.title}</p>
              <p className="font-medium">{item.name}</p>
              <p className="">{item.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
