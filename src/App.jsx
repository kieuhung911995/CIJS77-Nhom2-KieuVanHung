import React from "react";
import "./index.css";
const data1 = [
  {
    number: "1",
    src:'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/21024180/21024180-1665924329601-f6d68382842a7.jpg',
    title: "#26 Bí quyết thành công của người Do Thái | Đắp chăn nằm nghe...",
    chanel: "Đắp chăn nằm nghe Tun kể",
    timeUp: "16/10/2022 - 16 phút"
  },
  {
    number: "2",
    src:'https://i.ytimg.com/vi/uZCKUQbrkaQ/maxresdefault.jpg',
    title: "#25 Cùng Đích Lép đi tìm 5 dấu hiệu lý tưởng mà một người bạn đời...",
    chanel: "Đắp chăn nằm nghe Tun kể",
    timeUp: "09/10/2022 - 24 phút"
  },
  {
    number: "3",
    src:'https://storage.buzzsprout.com/variants/s6tvepoexorp5nqr22vd4018fjmw/60854458c4d1acdf4e1c2f79c4137142d85d78e379bdafbd69bd34c85f5819ad.jpg',
    title: "[Phần 2] Cuộc Đời Nói Chuyện Bằng Kết Quả - Tri kỷ cảm xúc #252",
    chanel: "Tri kỷ cảm xúc",
    timeUp: "17/10/2022 - 25 phút"
  },
];
const data2 = [
  {
    number: "4",
    src:'https://i.scdn.co/image/ab6765630000ba8a5b61945f5f6bf820d3d43fbe',
    title: "85. Hành Trình Hiểu Về Bản Thân",
    chanel: "HIEU.TV",
    timeUp: "11/10/2022 - 19 phút"
  },
  {
    number: "5",
    src:'https://i.scdn.co/image/ab6765630000ba8a5b61945f5f6bf820d3d43fbe',
    title: "86. Hướng Nội và Hướng Ngoại",
    chanel: "HIEU.TV",
    timeUp: "21/10/2022 - 22 phút"
  },
  {
    number: "6",
    src:'https://i.scdn.co/image/ab6765630000ba8a89a4c1b4639678f20e146ad1',
    title: "Cuối đoạn đường | Tập cuối - Nắng Thủy Tinh Podcast Series",
    chanel: "Nắng Thủy Tinh",
    timeUp: "21/08/2022 - 24 phút"
  },
];
const SubApp1 = ({ number, src, title, chanel, timeUp }) => {
  return (
    <div className="component-item">
      <div className="comp-header">{number}</div>
      <img src={src} className="comp-img"></img>
      <ul className="comp-text">
        <li className="comp-header">{title}</li>
        <li className="comp-p">{chanel}</li>
        <li className="comp-p">{timeUp}</li>
      </ul>
    </div>
  )
};
const SubApp2 = ({ number, src, title, chanel, timeUp }) => {
  return (
    <div className="component-item">
      <div className="comp-header">{number}</div>
      <img src={src} className="comp-img"></img>
      <ul className="comp-text">
        <li className="comp-header">{title}</li>
        <li className="comp-p">{chanel}</li>
        <li className="comp-p">{timeUp}</li>
      </ul>
    </div>
  )
};
const App = () => {
  return (
    <div className="body">
      <div className="header">
        <h1 className="header-h">Bảng Xếp Hạng Podcast</h1>
        <p className="header-p">Tất cả</p>
      </div>
      <div className="main">
        <div className="component">
          {data1.map((element) => (
            <SubApp1
              number={element.number}
              src={element.src}
              title={element.title}
              chanel={element.chanel}
              timeUp={element.timeUp}
            />
          ))}
        </div>
        <div className="component">
          {data2.map((element) => (
            <SubApp2
              number={element.number}
              src={element.src}
              title={element.title}
              chanel={element.chanel}
              timeUp={element.timeUp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
