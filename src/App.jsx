import React from "react";
import "./index.css";
const data1 = [
  {
    src: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/12/17/863059/Osad-2.png",
    title: "Lời có cánh",
    artist: "OSAD",
    timeUp: "2 giờ trước",
  },
  {
    src: "http://cdn.shopify.com/s/files/1/0546/6033/products/8817584_6330_1.jpg?v=1654026154",
    title: "Lời có cánh",
    artist: "Ellie Gounding",
    timeUp: "1 ngày trước",
  },
  {
    src: "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/masew_07_horizontalposter-c1a5347d7910-1631606018825-efo8ePlA.jpg?v=0&maxW=600",
    title: "Hối Duyên",
    artist: "Masew, Khoi Vu, Great",
    timeUp: "4 ngày trước",
  },
  {
    src: "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/2/c/6/5/2c651dc58c046d51175a6b38105503c5.jpg",
    title: "Nỗi nhớ khi xưa",
    artist: "Kha",
    timeUp: "Hôm nay",
  },
  {
    src: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMTgyMTgzOTk3MDg4ODkw/gettyimages-483195065.jpg",
    title: "Monotonia",
    artist: "Shakỉa, Ozuna",
    timeUp: "1 ngày trước",
  },
  {
    src: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2018/03/06/1/0/a/4/1520308951432_600.jpg",
    title: "Người còn thương",
    artist: "Minh Vương M4U, Thương Võ, ACV",
    timeUp: "5 ngày trước",
  },
  {
    src: "https://znews-photo.zingcdn.me/w660/Uploaded/wpdhnwhnw/2022_10_14/307653264_637995611013005_2590676343667179460_n_1.jpg",
    title: "Cô đơn trên sofa",
    artist: "Hồ Ngọc Hà",
    timeUp: "1 ngày trước",
  },
  {
    src: "https://static2.yan.vn/YanNews/2167221/202107/wren-evans-la-ai-thong-tin-tieu-su-anh-chang-nhu-the-nao-bc1c132f.jpg",
    title: "Vàng",
    artist: "Daisy Le Garcon, Wren Evans",
    timeUp: "1 ngày trước",
  },
  {
    src: "https://nguoinoitieng.tv/images/nnt/102/1/bgbd.jpg",
    title: "Hoa tình chẳng nở",
    artist: "Dee Trần",
    timeUp: "5 ngày trước",
  },
  {
    src: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/12/17/863059/Osad-2.png",
    title: "90609",
    artist: "Tóc tiên, Mew Amazing",
    timeUp: "1 ngày trước",
  },
  {
    src: "https://bachkhoawiki.com/wp-content/uploads/2021/07/anh-tu-atus.jpg",
    title: "Bài này không để đi diễn",
    artist: "Anh Tú Atus",
    timeUp: "3 ngày trước",
  },
  {
    src: "https://vcdn1-giaitri.vnecdn.net/2022/07/18/vucattuongtop-1658133596-9601-1658133904.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=j7NHo_5IysIPr-I1IE4k4g",
    title: "HUNGGOVER",
    artist: "Minh, Vũ Cát Tường",
    timeUp: "2 giờ trước",
  },
];
const data2 = [
  {
    src: "https://media.istockphoto.com/vectors/wednesday-handdrawn-lettering-spring-vector-poster-floral-frame-vector-id1142211001?k=20&m=1142211001&s=612x612&w=0&h=nCm1zDvqmbxU7L7o_uFyfONTcvZKFHM8_-Fm92jS6Is=",
    title: "Nhạc Cho Thứ Tư",
    note: "Thứ Tư từ từ tận hưởng Indie Việt",
  },
  {
    src: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/8/1/1/c81185776ffb408b0edb6acf53756abb.jpg",
    title: "Đóa Hồng Nhạc Việt",
    note: "Nữ ca sĩ tỏa sắc hương trong khu vườn V-Pop",
  },
  {
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/04/22/9/3/4/c/1587551129349.jpg",
    title: "Chillout",
    note: "Bạn đã sẵn sàng bỏ hết mọi ưu phiền mệt mỏi hay chưa",
  },
  {
    src: "https://i1.sndcdn.com/artworks-001011856801-99r2ni-t500x500.jpg",
    title: "Pop Rising",
    note: "Tiềm năng Pop Âu Mỹ đáng nghe nhất hiện tại",
  },
  {
    src: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/2/8/2/a282a0d1ca6dff2bdba8f0944af98a64.jpg",
    title: "Hà Nhi's Ex Story",
    note: "Lâu lâu nhắc lại 'vũ trụ người yêu cũ' cùng Hà Nhi",
  },
];
const SubApp1 = ({ src, title, artist, timeUp }) => {
  return (
    <div className="component1">
      <img src={src} className="comp1-img"></img>
      <ul className="comp1-text">
        <li className="comp1-header">{title}</li>
        <li className="comp1-p">{artist}</li>
        <li className="comp1-p">{timeUp}</li>
      </ul>
    </div>
  );
};
const SubApp2 = ({ src, title, note }) => {
  return (
    <div className="component2">
      <img src={src} className="comp2-img"></img>
      <ul className="comp2-text">
        <li className="comp1-header">{title}</li>
        <li className="comp1-p">{note}</li>
      </ul>
    </div>
  );
};
const App = () => {
  return (
    <div className="background">
      <h1 className="menu-header">Mới phát hành</h1>
      <ul className="menu-flex">
        <div className="menu-item12">
          <li className="menu-item1">
            <div>BÀI HÁT</div>
          </li>
          <li className="menu-item2">ALBUM</li>
        </div>
        <li className="menu-item3">TẤT CẢ</li>
      </ul>
      <div className="main">
        {data1.map((element) => (
          <SubApp1
            src={element.src}
            title={element.title}
            artist={element.artist}
            timeUp={element.timeUp}
          />
        ))}
      </div>
      <h2 className="menu-header">Cứ Chill Thôi</h2>
      <div className="main">
        {data2.map((element) => (
          <SubApp2
            src={element.src}
            title={element.title}
            note={element.note}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
