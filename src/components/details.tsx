import image1 from "@/assests/news.jpg"
import { StaticImageData } from "next/image";
type List = {
    head:string;
    sub:string;
    image: StaticImageData;
    id: number;
    datas:string;
  };

export const list: List[] = [
    {
      id: 1,
      head:"latest in tech news",
      sub:"2019 Podcast Awards Technology Finalist! Tune in for the latest trending news in tech and gadgets. We search the web for only the newest and coolest news to share with you, even if you are on the go. Welcome to the community and feel free to stay in touch with the show.Electronics & IT Minister Ravi Shankar Prasad believes India’s digital ecosystem will contribute $1 trillion to the $5 trillion economy targeted in five years.",
      datas:"hello i am a something new thing this is one ",
      image: image1,
    },
    {
        id: 2,
        head:"latest in tech news",
        sub:"2019 Podcast Awards Technology Finalist! Tune in for the latest trending news in tech and gadgets. We search the web for only the newest and coolest news to share with you, even if you are on the go. Welcome to the community and feel free to stay in touch with the show.Electronics & IT Minister Ravi Shankar Prasad believes India’s digital ecosystem will contribute $1 trillion to the $5 trillion economy targeted in five years.",
        datas:"hello i am a something new thing is two ",
        image: image1,
      },
      {
        id: 3,
        head:"latest in tech news",
        sub:"2019 Podcast Awards Technology Finalist! Tune in for the latest trending news in tech and gadgets. We search the web for only the newest and coolest news to share with you, even if you are on the go. Welcome to the community and feel free to stay in touch with the show.Electronics & IT Minister Ravi Shankar Prasad believes India’s digital ecosystem will contribute $1 trillion to the $5 trillion economy targeted in five years.",
        datas:"hello i am a something new thing is three ",
        image: image1,
      },
      {
        id: 4,
        head:"latest in tech news",
        sub:"2019 Podcast Awards Technology Finalist! Tune in for the latest trending news in tech and gadgets. We search the web for only the newest and coolest news to share with you, even if you are on the go. Welcome to the community and feel free to stay in touch with the show.Electronics & IT Minister Ravi Shankar Prasad believes India’s digital ecosystem will contribute $1 trillion to the $5 trillion economy targeted in five years.",
        datas:"hello i am a something new thing is four",
        image: image1,
      },
      {
        id: 5,
        head:"latest in tech news",
        sub:"2019 Podcast Awards Technology Finalist! Tune in for the latest trending news in tech and gadgets. We search the web for only the newest and coolest news to share with you, even if you are on the go. Welcome to the community and feel free to stay in touch with the show.Electronics & IT Minister Ravi Shankar Prasad believes India’s digital ecosystem will contribute $1 trillion to the $5 trillion economy targeted in five years.",
        datas:"hello i am a something new thing is five",
        image: image1,
      },
  ];